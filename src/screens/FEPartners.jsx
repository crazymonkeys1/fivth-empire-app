import React from 'react';
import { FETopBar, FEBackstageFooter } from '../parts.jsx';
import { FE_PARTNERS, FE_PARTNERS_BY_ID } from '../data.js';

const BSMark = ({ size = 56 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" style={{ color: "var(--fe-gold)" }}>
    <path d="M40 6l7 27.5L74 40l-27 7.5L40 74l-7.5-26.5L6 40l27-6.5z" strokeWidth="1.2" />
    <path d="M40 18l3.5 14L54 40l-10.5 8L40 62l-4-14L26 40l10-8z" strokeWidth="0.8" opacity="0.45" />
    <circle cx="40" cy="40" r="4.5" fill="var(--fe-gold)" stroke="none" />
  </svg>
);

const PartnerLogo = ({ p, hero = false }) => {
  if (p.logo) {
    return hero
      ? <div className="fe-partner-hero"><img src={p.logo} alt={p.name} /></div>
      : <div className="fe-partner-logo"><img src={p.logo} alt={p.name} /></div>;
  }
  if (hero) {
    return (
      <div className="fe-partner-hero fe-partner-hero--mark">
        <BSMark size={80} />
        <div style={{ fontFamily: "var(--fe-mono)", fontSize: 11, letterSpacing: "0.38em", color: "var(--fe-fg-2)", marginTop: 14 }}>BACKSTAGE</div>
      </div>
    );
  }
  return (
    <div className="fe-partner-logo fe-partner-logo--mark">
      <BSMark size={44} />
    </div>
  );
};

export const FEPartners = ({ onOpenPartner, onOpen, themeBtn }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={themeBtn}
        sub="The people behind the FiVth"
        title={<span>Our <em>Partners</em></span>}
      />
      <div className="fe-scroll fe-partners-page">
        <p className="fe-partners-lede">
          The FiVth doesn't happen alone. These are the houses, collectives and small studios holding it with us.
        </p>
        <div className="fe-partners-grid">
          {FE_PARTNERS.map(p => (
            <button key={p.id} className="fe-partner-card" onClick={() => onOpenPartner(p.id)}>
              <PartnerLogo p={p} />
              <div className="fe-partner-meta">
                <div className="cat">{p.category}</div>
                <div className="name">{p.name}</div>
              </div>
              <div className="fe-partner-short">{p.short}</div>
            </button>
          ))}
        </div>
        <div className="fe-partners-credit">
          Want to be on this page next year? <a href="mailto:partners@fieldeditions.fm">partners@fieldeditions.fm</a>
        </div>
        <FEBackstageFooter onClick={() => onOpen("__backstage__")} />
      </div>
    </div>
  );
};

export const FEPartnerDetail = ({ id, onBack, backBtn }) => {
  const p = FE_PARTNERS_BY_ID[id];
  if (!p) return null;
  const isBS = p.id === "backstage";
  const waLink = `https://wa.me/33616120265?text=${encodeURIComponent("hey, just saw what you did for the FiVth event. Let's talk about my project now...")}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar left={backBtn} sub={p.role} />
      <div className="fe-scroll fe-partner-detail">
        <PartnerLogo p={p} hero />
        <div className="fe-partner-eyebrow">{p.category} · FiVth Partner</div>
        <h1 className="fe-partner-title">{p.name}</h1>
        <p className="fe-partner-lede">{p.short}</p>
        <div className="fe-partner-divider" />
        <p className="fe-partner-body">{p.long}</p>
        <div className="fe-partner-stats">
          <div>
            <div className="l">Role at the FiVth</div>
            <div className="n">{p.role}</div>
          </div>
          <div>
            <div className="l">Find them</div>
            <div className="n">{p.web}</div>
          </div>
        </div>
        {isBS
          ? <a href={waLink} target="_blank" rel="noopener noreferrer" className="fe-partner-cta">Gathering humans? Let's talk. →</a>
          : <a href={`https://${p.web}`} target="_blank" rel="noopener noreferrer" className="fe-partner-cta">Visit {p.name} →</a>
        }
      </div>
    </div>
  );
};
