import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';

export const FEBackstage = ({ onBack, backBtn }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn}
        sub="Made with Backstage"
      />
      <div className="fe-scroll fe-bs-page">
        <div className="fe-bs-mark-lg" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
            <path d="M32 4l6 22L60 32l-22 6L32 60l-6-22L4 32l22-6z" />
            <circle cx="32" cy="32" r="5.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="fe-bs-eyebrow">Backstage · Lisbon &amp; Berlin</div>
        <h1 className="fe-bs-title">A team of humans using tech so other <em>homo sapiens</em> can gather in a more meaningful and impactful way.</h1>
        <div className="fe-bs-cta">
          <a className="fe-bs-btn primary" href={`https://wa.me/33616120265?text=${encodeURIComponent("hey, just saw what you did for the FiVth event. Let's talk about my project now...")}`} target="_blank" rel="noopener noreferrer">Gathering humans? Let's talk.</a>
        </div>
        <div className="fe-bs-credit">Field Editions 2026 runs on Backstage.</div>
      </div>
    </div>
  );
};
