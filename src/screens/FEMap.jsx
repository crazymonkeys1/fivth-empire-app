import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';
import { FE_VENUES } from '../data.js';

export const FEMap = ({ themeBtn, onBack, backBtn }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn ?? themeBtn}
        sub="Three stages. One place."
        title={<span>The <em>Grounds</em></span>}
      />
      <div className="fe-scroll">
        <div style={{ padding: 22, position: "relative" }}>
          <div style={{ position: "relative", border: "1px solid var(--fe-line)", background: "var(--fe-bg-2)", overflow: "hidden" }}>
            <img src="/assets/field-map.png" alt="FiVth Summit 2026 — field map" style={{ display: "block", width: "100%", height: "auto" }} />
            <div style={{ position: "absolute", left: "39%", top: "53%", width: 14, height: 14, transform: "translate(-50%, -50%)" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#c97a3a", boxShadow: "0 0 0 2px rgba(255,255,255,0.85)" }} />
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1.5px solid #c97a3a", opacity: 0.6, animation: "fe-pulse 2.5s infinite" }} />
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            {Object.values(FE_VENUES).map(v => (
              <div key={v.id} style={{ padding: "14px 0", borderBottom: "1px solid var(--fe-line)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, background: `var(--fe-venue-${v.color})` }} />
                <div>
                  <div style={{ fontFamily: "var(--fe-display)", fontSize: 17, lineHeight: 1.1 }}>{v.name}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fe-fg-3)", marginTop: 3 }}>{v.subtitle} · {v.walk}</div>
                </div>
                <button className="fe-iconbtn"><FEIcon name="walk" size={16} /></button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22, padding: 16, border: "1px solid var(--fe-line)", background: "var(--fe-bg-2)" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--fe-gold)", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <FEIcon name="wifi" size={12} />Offline ready
            </div>
            <div style={{ fontFamily: "var(--fe-display)", fontSize: 16, lineHeight: 1.4, color: "var(--fe-fg-2)" }}>
              The full schedule, all voices and the map are cached on your device. This app stays open with or without signal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
