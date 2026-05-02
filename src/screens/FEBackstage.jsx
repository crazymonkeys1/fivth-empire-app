import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';

export const FEBackstage = ({ onBack }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={<button className="fe-back" onClick={onBack}><FEIcon name="arrowL" size={14} />Back</button>}
        sub="Made with Backstage"
      />
      <div className="fe-scroll fe-bs-page">
        <div className="fe-bs-mark-lg" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="64" height="64">
            <rect x="6" y="18" width="52" height="34" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <line x1="6" y1="26" x2="58" y2="26" stroke="currentColor" strokeWidth="1.4" />
            <line x1="16" y1="18" x2="16" y2="8" stroke="currentColor" strokeWidth="1.4" />
            <line x1="48" y1="18" x2="48" y2="8" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="32" cy="38" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="fe-bs-eyebrow">Backstage · Lisbon &amp; Berlin</div>
        <h1 className="fe-bs-title">A team of humans using tech so other <em>homo sapiens</em> can gather in a more meaningful and impactful way.</h1>
        <div className="fe-bs-cta">
          <a className="fe-bs-btn primary" href="mailto:hello@backstage.fm">Gathering humans? Let's talk.</a>
        </div>
        <div className="fe-bs-credit">Field Editions 2026 runs on Backstage.</div>
      </div>
    </div>
  );
};
