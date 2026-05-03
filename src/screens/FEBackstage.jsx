import React from 'react';
import { FETopBar } from '../parts.jsx';

// Same component + CSS classes as FEPartners — no extra import needed
const BSTypoLogo = ({ hero = false }) => (
  <div className={`bs-typo-logo${hero ? " bs-typo-logo--hero" : ""}`}>
    <div className="bs-typo-inner">
      <img src="/assets/backstage-icon.svg" alt="" className="bs-typo-icon" aria-hidden="true" />
      <div className="bs-typo-text">
        <div className="bs-typo-back">
          B<span className="bs-typo-flip">A</span>CK
        </div>
        <div className="bs-typo-rule" />
        <div className="bs-typo-stage">STAGE</div>
      </div>
    </div>
  </div>
);

export const FEBackstage = ({ onBack, backBtn }) => {
  const waLink = `https://wa.me/33616120265?text=${encodeURIComponent("hey, just saw what you did for the FiVth event. Let's talk about my project now...")}`;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar left={backBtn} sub="Made with Backstage" />
      <div className="fe-scroll fe-bs-page">

        {/* Hero logo block — same full-bleed dark treatment as partner detail */}
        <div className="fe-partner-hero fe-partner-hero--full fe-partner-hero--bs fe-bs-hero">
          <BSTypoLogo hero />
        </div>

        <div className="fe-bs-intro">Who made this app?<em> That's us.</em></div>
        <div className="fe-bs-eyebrow">Cooked with love from Ericeira</div>
        <h1 className="fe-bs-title">A team of humans using tech so other <em>homo sapiens</em> can gather in a more meaningful and impactful way.</h1>
        <div className="fe-bs-cta">
          <a className="fe-bs-btn primary" href={waLink} target="_blank" rel="noopener noreferrer">Gathering humans? Let's talk.</a>
        </div>
        <div className="fe-bs-credit">This app full of pixels was made with the Backstage team.</div>
      </div>
    </div>
  );
};
