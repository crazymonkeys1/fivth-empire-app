import React from 'react';
import { FEIcon } from './icons.jsx';
import { FETopBar, FETabBar } from './parts.jsx';
import { FEHome } from './screens/FEHome.jsx';
import { FESchedule } from './screens/FESchedule.jsx';
import { FEDetail, FEPersonDetail } from './screens/FEDetail.jsx';
import { FESpeakers } from './screens/FESpeakers.jsx';
import { FESaved } from './screens/FESaved.jsx';
import { FEMap } from './screens/FEMap.jsx';
import { FEPartners, FEPartnerDetail } from './screens/FEPartners.jsx';
import { FEBackstage } from './screens/FEBackstage.jsx';

const FEApp = ({ variant = "A", theme = "midnight", typePair = "default" }) => {
  const [tab, setTab] = React.useState("home");
  const [stack, setStack] = React.useState([]);
  const [localTheme, setLocalTheme] = React.useState(null);
  const activeTheme = localTheme ?? theme;
  const [savedSet, setSavedSet] = React.useState(() => {
    try {
      const raw = localStorage.getItem("fe-saved-" + variant);
      return new Set(raw ? JSON.parse(raw) : ["sa07", "sa11", "pe07"]);
    } catch { return new Set(["sa07", "sa11", "pe07"]); }
  });

  const onToggle = (id) => {
    setSavedSet(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      try { localStorage.setItem("fe-saved-" + variant, JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const onOpenSession = (id) => {
    if (id === "__backstage__") setStack(s => [...s, { type: "backstage" }]);
    else if (id === "__map__") setStack(s => [...s, { type: "map" }]);
    else setStack(s => [...s, { type: "session", id }]);
  };
  const onOpenPerson = (id) => setStack(s => [...s, { type: "person", id }]);
  const onOpenPartner = (id) => setStack(s => [...s, { type: "partner", id }]);
  const onBack = () => setStack(s => s.slice(0, -1));

  const themeClass = activeTheme === "parchment" ? "theme-parchment" : "";
  const typeClass = typePair === "cormorant" ? "type-cormorant" : typePair === "system" ? "type-system" : "";
  const flipTheme = () => setLocalTheme(activeTheme === "parchment" ? "midnight" : "parchment");
  const themeBtn = (
    <button className="fe-iconbtn" onClick={flipTheme} aria-label="Toggle theme" title={activeTheme === "parchment" ? "Switch to Midnight" : "Switch to Parchment"}>
      <FEIcon name={activeTheme === "parchment" ? "moon" : "sun"} size={16} />
    </button>
  );

  const top = stack[stack.length - 1];

  return (
    <div className={"fe-app " + themeClass + " " + typeClass}>
      <div className="fe-screen">
        {top ? (
          top.type === "session"
            ? <FEDetail id={top.id} savedSet={savedSet} onToggle={onToggle} onBack={onBack} onOpenPerson={onOpenPerson} />
            : top.type === "backstage"
              ? <FEBackstage onBack={onBack} />
              : top.type === "map"
                ? <FEMap themeBtn={themeBtn} onBack={onBack} />
                : top.type === "partner"
                  ? <FEPartnerDetail id={top.id} onBack={onBack} />
                  : <FEPersonDetail id={top.id} onBack={onBack} onOpen={onOpenSession} />
        ) : tab === "home" ? (
          <>
            <FETopBar
              left={themeBtn}
              sub="May 1—3, 2026 · Portugal"
              title={<span>The <em>FiVth</em></span>}
              right={<button className="fe-iconbtn" onClick={() => setStack(s => [...s, { type: "map" }])} aria-label="Open map" title="Field map"><FEIcon name="map" size={16} /></button>}
            />
            <FEHome savedSet={savedSet} onToggle={onToggle} onOpen={onOpenSession} onOpenPerson={onOpenPerson} onOpenPartner={onOpenPartner} variant={variant} setTab={setTab} />
          </>
        ) : tab === "schedule" ? (
          <FESchedule savedSet={savedSet} onToggle={onToggle} onOpen={onOpenSession} variant={variant} themeBtn={themeBtn} />
        ) : tab === "saved" ? (
          <FESaved savedSet={savedSet} onToggle={onToggle} onOpen={onOpenSession} themeBtn={themeBtn} />
        ) : tab === "speakers" ? (
          <FESpeakers onOpenPerson={onOpenPerson} themeBtn={themeBtn} />
        ) : (
          <FEPartners onOpenPartner={onOpenPartner} themeBtn={themeBtn} />
        )}
      </div>
      {!top && <FETabBar tab={tab} onChange={setTab} />}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#050403", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <FEApp variant="A" theme="midnight" typePair="default" />
    </div>
  );
}
