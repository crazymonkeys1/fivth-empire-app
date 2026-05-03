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
        <div className="fe-bs-logo" aria-label="Backstage">
          <svg viewBox="0 0 80 80" width="72" height="72" fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
            <path d="M40 6l7 27.5L74 40l-27 7.5L40 74l-7.5-26.5L6 40l27-6.5z" strokeWidth="1.2" />
            <path d="M40 18l3.5 14L54 40l-10.5 8L40 62l-4-14L26 40l10-8z" strokeWidth="0.8" opacity="0.45" />
            <circle cx="40" cy="40" r="4.5" fill="currentColor" stroke="none" />
          </svg>
          <div className="fe-bs-wordmark">BACKSTAGE</div>
        </div>
        <div className="fe-bs-eyebrow">Cooked with love from Ericeira</div>
        <h1 className="fe-bs-title">A team of humans using tech so other <em>homo sapiens</em> can gather in a more meaningful and impactful way.</h1>
        <div className="fe-bs-cta">
          <a className="fe-bs-btn primary" href={`https://wa.me/33616120265?text=${encodeURIComponent("hey, just saw what you did for the FiVth event. Let's talk about my project now...")}`} target="_blank" rel="noopener noreferrer">Gathering humans? Let's talk.</a>
        </div>
        <div className="fe-bs-credit">This app full of pixels was made with the Backstage team.</div>
      </div>
    </div>
  );
};
