import React from 'react';
import { FETopBar } from '../parts.jsx';
import { FESessionCard } from '../parts.jsx';
import { FE_SESSIONS, FE_toMinutes, FE_dayOf } from '../data.js';

export const FESaved = ({ savedSet, onToggle, onOpen, themeBtn }) => {
  const saved = FE_SESSIONS.filter(s => savedSet.has(s.id));
  const byDay = {};
  saved.forEach(s => { if (!byDay[s.day]) byDay[s.day] = []; byDay[s.day].push(s); });
  Object.keys(byDay).forEach(d => byDay[d].sort((a, b) => FE_toMinutes(a.start) - FE_toMinutes(b.start)));

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar left={themeBtn} sub="Your Pilgrimage" title={<span>My <em>FiVth</em></span>} />
      <div className="fe-scroll">
        {saved.length === 0 ? (
          <div className="fe-bookmarks-empty">
            <span className="glyph">✶</span>
            <p>"Tap the mark on any session.<br/>The path you save becomes your own."</p>
          </div>
        ) : (
          <div style={{ padding: "10px 22px 30px" }}>
            {Object.keys(byDay).sort().map(d => {
              const day = FE_dayOf(parseInt(d));
              return (
                <div key={d} style={{ marginTop: 18 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "1px solid var(--fe-line)", padding: "6px 0 10px", marginBottom: 12 }}>
                    <div style={{ fontFamily: "var(--fe-display)", fontSize: 22 }}>{day.title}</div>
                    <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--fe-fg-3)" }}>{day.long}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {byDay[d].map(s => (
                      <FESessionCard key={s.id} session={s} savedSet={savedSet} onToggle={onToggle} onOpen={onOpen} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
