import React from 'react';
import { FETopBar, FEBackstageFooter } from '../parts.jsx';
import { FE_PARTNERS, FE_PARTNERS_BY_ID } from '../data.js';

// Typographic BACK/STAGE logo with mirrored-A detail + icon
const BSTypoLogo = ({ hero = false }) => (
  <div className={`bs-typo-logo${hero ? " bs-typo-logo--hero" : ""}`}>
    <img src="/assets/backstage-icon.svg" alt="" className="bs-typo-icon" aria-hidden="true" />
    <div className="bs-typo-text">
      <div className="bs-typo-back">
        B<span className="bs-typo-flip">A</span>CK
      </div>
      <div className="bs-typo-rule" />
      <div className="bs-typo-stage">STAGE</div>
    </div>
  </div>
);

const PartnerLogo = ({ p, hero = false }) => {
  if (p.id === "backstage") {
    return hero
      ? <div className="fe-partner-hero fe-partner-hero--full fe-partner-hero--bs"><BSTypoLogo hero /></div>
      : <div className="fe-partner-logo fe-partner-logo--full fe-partner-logo--bs"><BSTypoLogo /></div>;
  }
  if (p.id === "bora") {
    return hero
      ? <div className="fe-partner-hero fe-partner-hero--full fe-partner-hero--cover"><img src={p.logo} alt={p.name} /></div>
      : <div className="fe-partner-logo fe-partner-logo--full fe-partner-logo--cover"><img src={p.logo} alt={p.name} /></div>;
  }
  return hero
    ? <div className="fe-partner-hero"><img src={p.logo} alt={p.name} /></div>
    : <div className="fe-partner-logo"><img src={p.logo} alt={p.name} /></div>;
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
            <button
              key={p.id}
              className={`fe-partner-card${p.id === "backstage" ? " fe-partner-card--wide" : ""}`}
              onClick={() => onOpenPartner(p.id)}
            >
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
          Want to be on this page next year? <a href="mailto:admin@fivthempire.com">admin@fivthempire.com</a>
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
  const isBora = p.id === "bora";
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
          {isBora && (
            <div>
              <div className="l">Find them</div>
              <div className="n">{p.web}</div>
            </div>
          )}
        </div>
        {isBS && <a href={waLink} target="_blank" rel="noopener noreferrer" className="fe-partner-cta">Gathering humans? Let's talk. →</a>}
        {isBora && <a href={`https://${p.web}`} target="_blank" rel="noopener noreferrer" className="fe-partner-cta">Discover Bora →</a>}
      </div>
    </div>
  );
};
