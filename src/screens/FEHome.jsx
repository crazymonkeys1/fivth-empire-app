import React from 'react';
import { FEIcon } from '../icons.jsx';
import {
  FE_VENUES, FE_TRACKS, FE_PEOPLE_BY_ID,
  FE_liveSessions, FE_upcomingWithin, FE_todaysSpeakers, FE_dayOf, FE_toMinutes,
  FE_SESSIONS,
} from '../data.js';
import { useClock } from '../ClockContext.jsx';
import { FEAvatar, FEBackstageFooter } from '../parts.jsx';

export const FEHome = ({ savedSet, onToggle, onOpen, onOpenPerson, variant, setTab }) => {
  const now = useClock();
  const day = FE_dayOf(now.day);

  if (variant === "B") {
    const nowMin = FE_toMinutes(now.time);
    return (
      <div className="fe-scroll">
        <div className="fe-hero" style={{ paddingBottom: 14 }}>
          <div className="fe-hero-eyebrow"><span className="dot" />{day.long} · {now.time}</div>
          <h1 className="fe-hero-title">Today on <em>The FiVth</em></h1>
          <div className="fe-hero-time">SANTO ISIDORO · ERICEIRA</div>
        </div>
        <div className="fe-section-h">
          <span className="label">The Day · Chronological</span>
          <span className="more">View all →</span>
        </div>
        <div style={{ padding: "0 22px 24px" }}>
          {FE_SESSIONS.filter(s => s.day === now.day).map(s => {
            const min = FE_toMinutes(s.start);
            const past = FE_toMinutes(s.end) <= nowMin;
            const live = min <= nowMin && FE_toMinutes(s.end) > nowMin;
            return (
              <div key={s.id} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 14, padding: "12px 0", borderTop: "1px solid var(--fe-line)", opacity: past ? 0.42 : 1, cursor: "pointer" }} onClick={() => onOpen(s.id)}>
                <div style={{ fontFamily: "var(--fe-mono)", fontSize: 11, color: live ? "var(--fe-gold)" : "var(--fe-fg-2)", letterSpacing: "0.04em", paddingTop: 2 }}>
                  {s.start}
                  {live && <div style={{ fontFamily: "var(--fe-ui)", fontSize: 9, letterSpacing: "0.18em", color: "var(--fe-gold)", marginTop: 4 }}>NOW</div>}
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fe-fg-3)", marginBottom: 3 }}>
                    <span style={{ color: "var(--fe-gold)", marginRight: 6 }}>{FE_TRACKS[s.track].glyph}</span>
                    {FE_VENUES[s.venue].name}
                  </div>
                  <div style={{ fontFamily: "var(--fe-display)", fontSize: 18, lineHeight: 1.15, color: "var(--fe-fg)" }}>
                    {s.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant A — editorial hero
  const live = FE_liveSessions(now);
  const upcoming = FE_upcomingWithin(now, 60);
  const todaysSpeakers = FE_todaysSpeakers(now);

  const heroTitles = {
    1: <><em>The gates</em> are open.</>,
    2: <>The <em>Pilgrimage</em> begins.</>,
    3: <>The <em>New Renaissance</em> starts here.</>,
  };
  const heroSubs = {
    1: "SANTO ISIDORO · ERICEIRA",
    2: "SINTRA · PENINHA",
    3: "ERICEIRA · SHANTI SPACE",
  };

  return (
    <div className="fe-scroll">
      <div className="fe-hero">
        <div className="fe-hero-eyebrow"><span className="dot" />{day.long} · {now.time}</div>
        <h1 className="fe-hero-title">{heroTitles[now.day] ?? heroTitles[1]}</h1>
        <div className="fe-hero-time">{heroSubs[now.day] ?? heroSubs[1]} · {now.time}</div>
      </div>

      {/* Day 2 — Meeting Point alert (shown on day 1 as "tomorrow" and day 2 as "today") */}
      {(now.day === 1 || now.day === 2) && (
        <div className="fe-alert-meeting">
          <div className="fe-alert-meeting-icon">📍</div>
          <div className="fe-alert-meeting-body">
            <div className="fe-alert-meeting-title">
              {now.day === 1 ? "Tomorrow · Day 2 · The Pilgrimage" : "Today · The Pilgrimage · Meeting Points"}
            </div>
            <div className="fe-alert-meeting-line">
              <strong>8h15</strong> — <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1f26fbeb6444e5:0xdf1cdd4d55085ee2?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer">Ribeira d'Ilhas Surf Restaurant & Bar →</a> Meet Manuel Gandra. <em>Arrive early to park.</em>
            </div>
            <div className="fe-alert-meeting-line">
              <strong>10h30</strong> — Peninha Parking Area · <a href="https://maps.app.goo.gl/nrjMxUVG9AZRs3JN9" target="_blank" rel="noopener noreferrer">Google Maps →</a>
            </div>
            <div className="fe-alert-meeting-line">
              <strong>19h00</strong> — Quinta São José · Art Exhibition &amp; Sage Dinner <em>(location revealed to Pilgrims)</em>
            </div>
          </div>
        </div>
      )}

      {/* Happening Now — only shown when sessions are actually live */}
      {live.length > 0 && (
        <>
          <div className="fe-section-h">
            <span className="label">Happening Now</span>
            <span className="more">{live.length} live</span>
          </div>
          <div className="fe-now-rail">
            {live.map(s => {
              const venue = FE_VENUES[s.venue];
              const speakers = (s.speakers || []).map(id => FE_PEOPLE_BY_ID[id]).filter(Boolean);
              const speakerStr = speakers.map(p => p.name.replace("Sir ", "").replace("Dr. ", "")).slice(0, 2).join(" · ") + (speakers.length > 2 ? ` +${speakers.length - 2}` : "");
              const pct = Math.min(100, ((FE_toMinutes(now.time) - FE_toMinutes(s.start)) / (FE_toMinutes(s.end) - FE_toMinutes(s.start))) * 100);
              return (
                <div key={s.id} className="fe-now-mini" onClick={() => onOpen(s.id)}>
                  <div className="row1">
                    <span className="dot-venue" style={{ background: `var(--fe-venue-${venue.color})` }} />
                    <span className="venue">{venue.name}</span>
                    <span className="time">{s.start}—{s.end}</span>
                  </div>
                  <h3 className="title">{s.title}</h3>
                  {speakerStr && <div className="people">{speakerStr}</div>}
                  <div className="bar"><span style={{ width: `${pct}%` }} /></div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Coming Up */}
      {upcoming.length > 0 && (
        <>
          <div className="fe-section-h">
            <span className="label">Coming Up · Next Hour</span>
            <span className="more" onClick={() => setTab && setTab("schedule")} style={{ cursor: "pointer" }}>Full schedule →</span>
          </div>
          <div className="fe-next-list">
            {upcoming.map(s => {
              const venue = FE_VENUES[s.venue];
              const track = FE_TRACKS[s.track];
              const speakers = (s.speakers || []).map(id => FE_PEOPLE_BY_ID[id]).filter(Boolean);
              const speakerStr = speakers.map(p => p.name.replace("Sir ", "").replace("Dr. ", "")).slice(0, 2).join(" · ") + (speakers.length > 2 ? ` +${speakers.length - 2}` : "");
              const inMin = FE_toMinutes(s.start) - FE_toMinutes(now.time);
              return (
                <div key={s.id} className="fe-next-row" onClick={() => onOpen(s.id)}>
                  <div className="time">{s.start}<small>in {inMin} min</small></div>
                  <div>
                    <div className="title">{s.title}</div>
                    <div className="meta">{venue.name}{speakerStr ? " · " + speakerStr : ""}</div>
                  </div>
                  <div className="glyph">{track.glyph}</div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Speakers Rail */}
      <div className="fe-section-h">
        <span className="label">Today's Voices</span>
        <span className="more" onClick={() => setTab && setTab("speakers")} style={{ cursor: "pointer" }}>All voices →</span>
      </div>
      <div className="fe-speakers-rail">
        {todaysSpeakers.map(p => (
          <button key={p.id} className="fe-spk-card" onClick={() => onOpenPerson(p.id)}>
            <FEAvatar person={p} size="sm" />
            <div className="name">{p.name.replace("Sir ", "").replace("Dr. ", "")}</div>
            <div className="role">{p.role}</div>
          </button>
        ))}
      </div>

      {/* Promo Blocks */}
      <div className="fe-field-cards" style={{ marginTop: 8 }}>
        <a className="fe-field-card" href="https://tickets.fivthempire.com/pilgrimage-upgrade" target="_blank" rel="noopener noreferrer">
          <div className="fe-field-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
            </svg>
          </div>
          <div className="fe-field-body">
            <div className="fe-field-eyebrow">Pilgrim Upgrade · €1,144</div>
            <div className="fe-field-title">Join the inner circle for <em>all three days.</em></div>
            <div className="fe-field-sub" style={{ fontSize: 12, color: "var(--fe-fg-3)", marginTop: 4, lineHeight: 1.4 }}>Sacred sites · Templar pilgrimage · Sage's Dinners · Exclusive speaker dinner in an ancient castle.</div>
            <div className="fe-field-cta">Upgrade your ticket →</div>
          </div>
        </a>
        <div className="fe-field-card" style={{ cursor: "default" }}>
          <div className="fe-field-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
            </svg>
          </div>
          <div className="fe-field-body">
            <div className="fe-field-eyebrow">After the FiVth · Wed–Sat</div>
            <div className="fe-field-title">Continue the journey with the <em>UP Game Gathering.</em></div>
            <div className="fe-field-sub" style={{ fontSize: 12, color: "var(--fe-fg-3)", marginTop: 4, lineHeight: 1.4 }}>Adventure north to Óbidos, Fátima, Tomar, Lago Azul and Dornes.</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }}>
              <a href="https://www.up.game/fivthgathering" target="_blank" rel="noopener noreferrer" className="fe-field-cta">up.game/fivthgathering →</a>
              <a href="https://bit.ly/48i6Wle" target="_blank" rel="noopener noreferrer" className="fe-field-cta">View invite deck →</a>
              <a href="https://wa.me/14159669716" target="_blank" rel="noopener noreferrer" className="fe-field-cta">WhatsApp Lucian →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Feature */}
      <div className="fe-section-h">
        <span className="label">From the FiVth</span>
      </div>
      <a className="fe-feature" href="https://orionarchitect.io" target="_blank" rel="noopener noreferrer">
        <div className="fe-feature-art" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
              <radialGradient id="ftg" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(212,164,55,0.35)" />
                <stop offset="100%" stopColor="rgba(212,164,55,0)" />
              </radialGradient>
            </defs>
            <rect width="200" height="200" fill="url(#ftg)" />
            <g fill="none" stroke="rgba(212,164,55,0.7)" strokeWidth="0.7">
              <circle cx="60" cy="55" r="2.5" fill="rgba(212,164,55,0.9)" />
              <circle cx="140" cy="60" r="3" fill="rgba(212,164,55,0.9)" />
              <circle cx="100" cy="100" r="2.5" fill="rgba(212,164,55,0.9)" />
              <circle cx="80" cy="115" r="3" fill="rgba(212,164,55,1)" />
              <circle cx="100" cy="120" r="2.5" fill="rgba(212,164,55,1)" />
              <circle cx="120" cy="125" r="3" fill="rgba(212,164,55,1)" />
              <circle cx="60" cy="160" r="2.5" fill="rgba(212,164,55,0.9)" />
              <circle cx="150" cy="160" r="3" fill="rgba(212,164,55,0.9)" />
              <path d="M60 55 L100 100 L140 60 M100 100 L80 115 L100 120 L120 125 L100 100 M80 115 L60 160 M120 125 L150 160" />
            </g>
            <text x="100" y="186" textAnchor="middle" fill="rgba(212,164,55,0.9)" fontSize="9" fontFamily="Inter" letterSpacing="0.32em">ORION</text>
          </svg>
        </div>
        <div className="fe-feature-body">
          <div className="fe-feature-eyebrow">Launch · Live at the FiVth</div>
          <h3 className="fe-feature-title">We're launching <em>Orion</em> at the FiVth.</h3>
          <p className="fe-feature-lede">A new architecture for the work we've been preparing. Visit the site to see what's coming online.</p>
          <div className="fe-feature-cta">orionarchitect.io →</div>
        </div>
      </a>

      <div className="fe-field-cards">
        <a className="fe-field-card" href="https://tickets.fivthempire.com/2-day-pilgrimage-upgrade" target="_blank" rel="noopener noreferrer">
          <div className="fe-field-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h18v8H3z" /><path d="M16 8v8M8 8v8" strokeDasharray="1.2 2" /><circle cx="6" cy="12" r="0.8" fill="currentColor" />
            </svg>
          </div>
          <div className="fe-field-body">
            <div className="fe-field-eyebrow">Ticket upgrade</div>
            <div className="fe-field-title">Not yet a Pilgrim? <em>There's still time.</em></div>
            <div className="fe-field-cta">Join the full journey →</div>
          </div>
        </a>
        <a className="fe-field-card" href="#" target="_blank" rel="noopener noreferrer">
          <div className="fe-field-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l9 4-9 4-9-4 9-4z" /><path d="M5 9v5c0 2 3.5 3.5 7 3.5s7-1.5 7-3.5V9" /><path d="M21 7v6" />
            </svg>
          </div>
          <div className="fe-field-body">
            <div className="fe-field-eyebrow">Gift · 2 free months</div>
            <div className="fe-field-title">Stay in the journey <em>longer.</em></div>
            <div className="fe-field-cta">Claim Academy access →</div>
          </div>
        </a>
      </div>

      {/* Map link */}
      <button className="fe-map-link" onClick={() => onOpen("__map__")}>
        <span className="map-mini" aria-hidden="true">
          <svg viewBox="0 0 60 36" width="60" height="36">
            <rect x="0.5" y="0.5" width="59" height="35" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
            <circle cx="30" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="30" cy="8" r="1.2" fill="currentColor" />
            <circle cx="14" cy="26" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="14" cy="26" r="1.2" fill="currentColor" />
            <circle cx="46" cy="26" r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="46" cy="26" r="1.2" fill="currentColor" />
            <path d="M30 11 Q22 18 17 23" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" opacity="0.6" />
            <path d="M30 11 Q38 18 43 23" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 1.5" opacity="0.6" />
          </svg>
        </span>
        <span className="map-text">
          <span className="lbl">Find your way</span>
          <span className="sub">Three stages · the meadow · you</span>
        </span>
        <span className="map-arrow">→</span>
      </button>

      <FEBackstageFooter onClick={() => onOpen("__backstage__")} />
    </div>
  );
};
