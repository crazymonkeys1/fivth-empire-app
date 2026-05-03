import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';

export const FEBackstage = ({ onBack, backBtn }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn}
        sub="Backstage Studio"
      />
      <div className="fe-scroll fe-bs-page">
        <div className="fe-bs-logo" aria-label="Backstage">
          <img src="/assets/backstage-icon.svg" alt="Backstage" className="fe-bs-logo-img" />
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
