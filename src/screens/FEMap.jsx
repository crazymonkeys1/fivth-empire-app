import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';
import { FE_VENUES } from '../data.js';
import { useClock } from '../ClockContext.jsx';

const PENINHA_GMAPS = "https://maps.app.goo.gl/TVcyjRbrrRQbS8AR8";
const RIBEIRA_GMAPS = "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1f26fbeb6444e5:0xdf1cdd4d55085ee2?sa=X&ved=1t:8290&ictx=111";
const VENUE_ORDER = ["peninha", "quinta", "shanti", "sanctum", "pessoa", "root"];

export const FEMap = ({ themeBtn, onBack, backBtn }) => {
  const now = useClock();
  const showDay2Block = now.day === 1 || now.day === 2;
  const day2Label = now.day === 1 ? "Tomorrow · Day 2 · The Pilgrimage" : "Today · Day 2 · The Pilgrimage";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar
        left={backBtn ?? themeBtn}
        sub="Three stages. One place."
        title={<span>The <em>Grounds</em></span>}
      />
      <div className="fe-scroll">
        <div style={{ padding: 22, position: "relative" }}>

          {/* Field map image */}
          <div style={{ position: "relative", border: "1px solid var(--fe-line)", background: "var(--fe-bg-2)", overflow: "hidden" }}>
            <img src="/assets/field-map.png" alt="FiVth Summit 2026 — field map" style={{ display: "block", width: "100%", height: "auto" }} />
            <div style={{ position: "absolute", left: "39%", top: "53%", width: 14, height: 14, transform: "translate(-50%, -50%)" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#c97a3a", boxShadow: "0 0 0 2px rgba(255,255,255,0.85)" }} />
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1.5px solid #c97a3a", opacity: 0.6, animation: "fe-pulse 2.5s infinite" }} />
            </div>
          </div>

          {/* Venue list */}
          <div style={{ marginTop: 18 }}>
            {/* Ribeira — Day 2 meeting point */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid var(--fe-line)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, background: "var(--fe-venue-peninha)" }} />
              <div>
                <div style={{ fontFamily: "var(--fe-display)", fontSize: 17, lineHeight: 1.1 }}>Ribeira d'Ilhas Surf Restaurant & Bar</div>
                <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fe-fg-3)", marginTop: 3 }}>Day 2 Meeting Point · Arrive by 8h15</div>
              </div>
              <a href={RIBEIRA_GMAPS} target="_blank" rel="noopener noreferrer" className="fe-iconbtn"><FEIcon name="walk" size={16} /></a>
            </div>
            {VENUE_ORDER.map(id => FE_VENUES[id]).filter(Boolean).map(v => (
              <div key={v.id} style={{ padding: "14px 0", borderBottom: "1px solid var(--fe-line)", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, background: `var(--fe-venue-${v.color})` }} />
                <div>
                  <div style={{ fontFamily: "var(--fe-display)", fontSize: 17, lineHeight: 1.1 }}>{v.name}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fe-fg-3)", marginTop: 3 }}>{v.subtitle} · {v.walk}</div>
                </div>
                {v.gmap
                  ? <a href={v.gmap} target="_blank" rel="noopener noreferrer" className="fe-iconbtn"><FEIcon name="walk" size={16} /></a>
                  : <div className="fe-iconbtn" style={{ opacity: 0.25 }}><FEIcon name="walk" size={16} /></div>
                }
              </div>
            ))}
          </div>

          {/* ── Day 2 Pilgrimage Meeting Points ── */}
          {showDay2Block && (
            <div className="fe-map-day2">
              <div className="fe-map-day2-header">
                <span className="fe-map-day2-dot" />
                <span className="fe-map-day2-label">{day2Label}</span>
              </div>

              <div className="fe-map-day2-stop">
                <div className="fe-map-day2-time">08h15</div>
                <div className="fe-map-day2-info">
                  <div className="fe-map-day2-name">Ribeira d'Ilhas Surf Restaurant & Bar</div>
                  <div className="fe-map-day2-note">Meet Manuel Gandra at the restaurant. Arrive early to park — it fills up fast.</div>
                  <a href={RIBEIRA_GMAPS} target="_blank" rel="noopener noreferrer" className="fe-map-day2-gmaps">
                    <FEIcon name="pin" size={11} />
                    Google Maps →
                  </a>
                </div>
              </div>

              <div className="fe-map-day2-connector" />

              <div className="fe-map-day2-stop">
                <div className="fe-map-day2-time">10h30</div>
                <div className="fe-map-day2-info">
                  <div className="fe-map-day2-name">Sanctuary of Peninha · Parking Area</div>
                  <div className="fe-map-day2-note">High above the Atlantic. Ancient sacred sites &amp; ceremonial activation with Cristina Moreira, Reachel, Luciano &amp; Alma.</div>
                  <a href={PENINHA_GMAPS} target="_blank" rel="noopener noreferrer" className="fe-map-day2-gmaps">
                    <FEIcon name="pin" size={11} />
                    Google Maps →
                  </a>
                </div>
              </div>

              <div className="fe-map-day2-connector" />

              <div className="fe-map-day2-stop">
                <div className="fe-map-day2-time">14h30</div>
                <div className="fe-map-day2-info">
                  <div className="fe-map-day2-name">Free Time · Lunch Provided</div>
                  <div className="fe-map-day2-note">Lunch is provided for Pilgrims. Rest and integrate before the evening.</div>
                </div>
              </div>

              <div className="fe-map-day2-connector" />

              <div className="fe-map-day2-stop">
                <div className="fe-map-day2-time">19h00</div>
                <div className="fe-map-day2-info">
                  <div className="fe-map-day2-name">Quinta São José</div>
                  <div className="fe-map-day2-note">A former Templar residence. Art Exhibition · Sage Dinner. Location revealed to Pilgrims on the day.</div>
                </div>
              </div>
            </div>
          )}

          {/* Offline card */}
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
