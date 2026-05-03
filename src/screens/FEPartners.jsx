import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar, FEBackstageFooter } from '../parts.jsx';
import { FE_PARTNERS, FE_PARTNERS_BY_ID } from '../data.js';

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
              <div className="fe-partner-logo">
                <img src={p.logo} alt={p.name} />
              </div>
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
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn}
        sub={p.role}
      />
      <div className="fe-scroll fe-partner-detail">
        <div className="fe-partner-hero">
          <img src={p.logo} alt={p.name} />
        </div>
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
        <a href={`https://${p.web}`} target="_blank" rel="noopener noreferrer" className="fe-partner-cta">Visit {p.name} →</a>
      </div>
    </div>
  );
};
