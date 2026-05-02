import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';
import { FE_PEOPLE } from '../data.js';

export const FESpeakers = ({ onOpenPerson, themeBtn }) => {
  const [q, setQ] = React.useState("");
  const filtered = FE_PEOPLE.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.role.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar left={themeBtn} sub="The People in the Room" title={<span>Voices of the <em>FiVth</em></span>} />
      <div style={{ padding: "12px 22px", borderBottom: "1px solid var(--fe-line)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", border: "1px solid var(--fe-line)", background: "var(--fe-bg-2)" }}>
          <FEIcon name="search" size={14} />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search voices…"
            style={{ flex: 1, background: "transparent", border: "none", color: "var(--fe-fg)", fontFamily: "var(--fe-ui)", fontSize: 13, outline: "none" }}
          />
        </div>
      </div>
      <div className="fe-scroll">
        <div style={{ padding: "10px 22px 30px" }}>
          {filtered.map(p => (
            <div key={p.id} className="fe-speaker-row" onClick={() => onOpenPerson(p.id)}>
              <div className="fe-avatar">{p.initials}</div>
              <div>
                <div className="name">{p.name}</div>
                <div className="role">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
