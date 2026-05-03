import React from 'react';
import { FEIcon } from './icons.jsx';
import { FE_VENUES, FE_TRACKS, FE_PEOPLE_BY_ID } from './data.js';

export const FESessionCard = ({ session, savedSet, onToggle, onOpen, isLive }) => {
  const venue = FE_VENUES[session.venue];
  const track = FE_TRACKS[session.track];
  const speakers = (session.speakers || []).map(id => FE_PEOPLE_BY_ID[id]).filter(Boolean);
  const speakerNames = speakers.map(s => s.name.replace("Sir ", "").replace("Dr. ", "")).slice(0, 2).join(" · ");
  const more = speakers.length > 2 ? ` +${speakers.length - 2}` : "";

  return (
    <div className={"fe-session-card " + (isLive ? "live" : "")} onClick={() => onOpen(session.id)}>
      <span className="vbar" style={{ background: `var(--fe-venue-${venue.color})` }} />
      <div className="top-row">
        <span className="glyph">{track.glyph}</span>
        <span className="track">{track.name}</span>
        {isLive && <span className="live-tag"><span className="pip" />Now</span>}
      </div>
      <h3 className="title">{session.title}</h3>
      <div className="meta">
        <span>{venue.name}</span>
        {speakerNames && (<><span className="sep">·</span><span>{speakerNames}{more}</span></>)}
      </div>
      <button
        className={"fe-bookmark " + (savedSet.has(session.id) ? "on" : "")}
        onClick={(e) => { e.stopPropagation(); onToggle(session.id); }}
        style={{ position: "absolute", top: 12, right: 12, width: 28, height: 28, display: "grid", placeItems: "center", background: "transparent", border: "none", color: savedSet.has(session.id) ? "var(--fe-gold)" : "var(--fe-fg-3)", cursor: "pointer" }}
      >
        <FEIcon name={savedSet.has(session.id) ? "bookmarkFilled" : "bookmark"} size={15} />
      </button>
    </div>
  );
};

const avatarSrc = (image) => image
  ? (image.startsWith('http') ? image : `/speakers/${image}`)
  : null;

export const FEAvatar = ({ person, size = "md" }) => {
  const src = avatarSrc(person.image);
  if (size === "sm") {
    return (
      <div className="ring" style={src ? { overflow: "hidden" } : {}}>
        {src
          ? <img src={src} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          : <div className="initials">{person.initials}</div>
        }
      </div>
    );
  }
  return (
    <div className={`fe-avatar${size === "lg" ? " lg" : ""}`} style={src ? { padding: 0, overflow: "hidden" } : {}}>
      {src
        ? <img src={src} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        : person.initials
      }
    </div>
  );
};

export const FETopBar = ({ left, title, sub, right }) => (
  <div className="fe-topbar">
    <div style={{ minWidth: 36 }}>{left}</div>
    <div style={{ textAlign: "center" }}>
      {sub && <div className="fe-topbar-sub">{sub}</div>}
      {title && <div className="fe-topbar-title">{title}</div>}
    </div>
    <div style={{ minWidth: 36, display: "flex", justifyContent: "flex-end" }}>{right}</div>
  </div>
);

const BSIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
    <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
  </svg>
);

export const FEBackstageFooter = ({ onClick }) => (
  <div className="fe-backstage-footer-wrap">
    <button className="fe-backstage-footer" onClick={onClick}>
      <span className="bs-mark" aria-hidden="true"><BSIcon size={16} /></span>
      <span className="bs-text">Made with ❤️ by <em>Backstage</em></span>
      <span className="bs-arrow">→</span>
    </button>
  </div>
);

export const FETabBar = ({ tab, onChange, hidden }) => {
  const tabs = [
    { id: "home", label: "Now", icon: "home" },
    { id: "schedule", label: "Schedule", icon: "calendar" },
    { id: "saved", label: "Saved", icon: "bookmark" },
    { id: "speakers", label: "Voices", icon: "user" },
    { id: "partners", label: "Partners", icon: "partners" },
  ];
  return (
    <div className={"fe-tabbar" + (hidden ? " tab-hidden" : "")}>
      {tabs.map(t => (
        <button
          key={t.id}
          className={"fe-tab " + (tab === t.id ? "active" : "")}
          onClick={() => onChange(t.id)}
          style={{ position: "relative" }}
        >
          <FEIcon name={t.icon} size={20} />
          {t.label}
        </button>
      ))}
    </div>
  );
};
