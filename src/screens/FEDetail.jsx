import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar, FEAvatar } from '../parts.jsx';
import {
  FE_SESSIONS, FE_VENUES, FE_TRACKS, FE_PEOPLE_BY_ID, FE_dayOf,
} from '../data.js';

export const FEDetail = ({ id, savedSet, onToggle, onBack, onOpenPerson, backBtn }) => {
  const s = FE_SESSIONS.find(x => x.id === id);
  if (!s) return null;
  const venue = FE_VENUES[s.venue];
  const track = FE_TRACKS[s.track];
  const speakers = (s.speakers || []).map(pid => FE_PEOPLE_BY_ID[pid]).filter(Boolean);
  const day = FE_dayOf(s.day);
  const saved = savedSet.has(s.id);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn}
        sub="Session"
        right={null}
      />
      <div className="fe-scroll">
        <div className="fe-detail-hero">
          <div className="fe-detail-track"><span style={{ color: `var(--fe-track-${track.id})` }}>{track.glyph}</span> {track.name}</div>
          <h1 className="fe-detail-title">{s.title}</h1>
          <dl className="fe-detail-meta">
            <dt>When</dt><dd>{day.long} · {s.start}—{s.end}</dd>
            <dt>Where</dt><dd>{venue.name} <span style={{ color: "var(--fe-fg-4)" }}>· {venue.subtitle}</span></dd>
            {s.note && <><dt>Note</dt><dd style={{ color: "var(--fe-gold)" }}>{s.note}</dd></>}
          </dl>
        </div>

        {s.desc && (
          <div className="fe-detail-section">
            <h3>About</h3>
            <div className="body">{s.desc}</div>
          </div>
        )}

        {speakers.length > 0 && (
          <div className="fe-detail-section">
            <h3>{speakers.length === 1 ? "Speaker" : "Speakers"}</h3>
            {speakers.map(p => (
              <div key={p.id} className="fe-speaker-row" onClick={() => onOpenPerson(p.id)}>
                <FEAvatar person={p} />
                <div>
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="fe-detail-section">
          <h3>Venue</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 64, height: 64, background: `var(--fe-venue-${venue.color})`, opacity: 0.85, display: "grid", placeItems: "center", color: "#0a0908", fontFamily: "var(--fe-display)", fontSize: 20 }}>
              <FEIcon name="pin" size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--fe-display)", fontSize: 18, marginBottom: 2 }}>{venue.name}</div>
              <div style={{ fontSize: 11, color: "var(--fe-fg-3)" }}>{venue.location}</div>
              <div style={{ fontSize: 11, color: "var(--fe-fg-3)", marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
                <FEIcon name="walk" size={12} />{venue.walk}
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 12 }} />
      </div>
      <div className="fe-cta-bar">
        <button className={"fe-btn primary " + (saved ? "saved" : "")} onClick={() => onToggle(s.id)}>
          <FEIcon name={saved ? "bookmarkFilled" : "bookmark"} size={14} />
          {saved ? "Saved" : "Save"}
        </button>
        <button className="fe-btn"><FEIcon name="walk" size={14} />Directions</button>
      </div>
    </div>
  );
};

export const FEPersonDetail = ({ id, onBack, onOpen, backBtn }) => {
  const p = FE_PEOPLE_BY_ID[id];
  if (!p) return null;
  const sessions = FE_SESSIONS.filter(s => (s.speakers || []).includes(id));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn}
        sub="Voice"
        right={null}
      />
      <div className="fe-scroll">
        <div className="fe-speaker-hero">
          <FEAvatar person={p} size="lg" />
          <div className="name">{p.name}</div>
          <div className="role">{p.role}</div>
          {p.tag && <div className="tag">{p.tag}</div>}
        </div>
        <div className="fe-detail-section">
          <h3>About</h3>
          <div className="body" style={{ fontSize: 16, lineHeight: 1.5 }}>{p.bio}</div>
        </div>
        {sessions.length > 0 && (
          <div className="fe-detail-section">
            <h3>Appearing in</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {sessions.map(s => (
                <div key={s.id} className="fe-session-card" onClick={() => onOpen(s.id)}>
                  <span className="vbar" style={{ background: `var(--fe-venue-${FE_VENUES[s.venue].color})` }} />
                  <div className="top-row">
                    <span className="glyph">{FE_TRACKS[s.track].glyph}</span>
                    <span className="track">{FE_dayOf(s.day).date} · {s.start}</span>
                  </div>
                  <h3 className="title">{s.title}</h3>
                  <div className="meta">{FE_VENUES[s.venue].name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{ height: 24 }} />
      </div>
    </div>
  );
};
