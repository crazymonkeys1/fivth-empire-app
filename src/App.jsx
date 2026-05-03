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

const TAB_LABELS = { home: "Now", schedule: "Schedule", saved: "Saved", speakers: "Voices", partners: "Partners" };

const FEApp = ({ variant = "A", theme = "midnight", typePair = "default" }) => {
  const [tab, setTabState] = React.useState("home");
  const [stack, setStack] = React.useState([]);
  const [localTheme, setLocalTheme] = React.useState(null);
  const [tabHidden, setTabHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const activeTheme = localTheme ?? theme;
  const [savedSet, setSavedSet] = React.useState(() => {
    try {
      const raw = localStorage.getItem("fe-saved-" + variant);
      return new Set(raw ? JSON.parse(raw) : ["sa07", "sa11", "pe07"]);
    } catch { return new Set(["sa07", "sa11", "pe07"]); }
  });

  const setTab = (t) => { setTabState(t); setTabHidden(false); lastScrollY.current = 0; };

  const handleScroll = React.useCallback((e) => {
    const el = e.target;
    if (!el.classList?.contains('fe-scroll')) return;
    const y = el.scrollTop;
    const prev = lastScrollY.current;
    if (y > prev + 8) setTabHidden(true);
    else if (y < prev - 8 || y <= 0) setTabHidden(false);
    lastScrollY.current = y;
  }, []);

  const onBack = () => {
    setStack(s => s.slice(0, -1));
    setTabHidden(false);
    lastScrollY.current = 0;
  };

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
    else setStack(s => [...s, { type: "session", id, from: TAB_LABELS[tab] }]);
  };
  const onOpenPerson = (id) => setStack(s => [...s, { type: "person", id, from: TAB_LABELS[tab] }]);
  const onOpenPartner = (id) => setStack(s => [...s, { type: "partner", id, from: TAB_LABELS[tab] }]);

  const themeClass = activeTheme === "parchment" ? "theme-parchment" : "";
  const typeClass = typePair === "cormorant" ? "type-cormorant" : typePair === "system" ? "type-system" : "";
  const flipTheme = () => setLocalTheme(activeTheme === "parchment" ? "midnight" : "parchment");
  const themeBtn = (
    <button className="fe-iconbtn" onClick={flipTheme} aria-label="Toggle theme" title={activeTheme === "parchment" ? "Switch to Midnight" : "Switch to Parchment"}>
      <FEIcon name={activeTheme === "parchment" ? "moon" : "sun"} size={16} />
    </button>
  );

  const top = stack[stack.length - 1];

  const backBtn = (label) => (
    <button className="fe-back" onClick={onBack}>
      <FEIcon name="arrowL" size={16} />{label || "Back"}
    </button>
  );

  return (
    <div className={"fe-app " + themeClass + " " + typeClass} onScrollCapture={handleScroll}>
      <div className="fe-screen">
        {top ? (
          top.type === "session"
            ? <FEDetail id={top.id} savedSet={savedSet} onToggle={onToggle} onBack={onBack} onOpenPerson={onOpenPerson} backBtn={backBtn(top.from)} />
            : top.type === "backstage"
              ? <FEBackstage onBack={onBack} backBtn={backBtn()} />
              : top.type === "map"
                ? <FEMap themeBtn={themeBtn} onBack={onBack} backBtn={backBtn()} />
                : top.type === "partner"
                  ? <FEPartnerDetail id={top.id} onBack={onBack} backBtn={backBtn(top.from)} />
                  : <FEPersonDetail id={top.id} onBack={onBack} onOpen={onOpenSession} backBtn={backBtn(top.from)} />
        ) : tab === "home" ? (
          <>
            <FETopBar
              left={
                <button className="fe-iconbtn" onClick={() => setStack(s => [...s, { type: "backstage" }])} aria-label="Backstage" title="Backstage">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <rect x="3" y="6" width="18" height="12" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="7" y1="6" x2="7" y2="3" /><line x1="17" y1="6" x2="17" y2="3" />
                  </svg>
                </button>
              }
              sub="May 3—5, 2026 · Portugal"
              title={<span>The <em>FiVth</em></span>}
              right={
                <div style={{ display: "flex", alignItems: "center" }}>
                  {themeBtn}
                  <button className="fe-iconbtn" onClick={() => setStack(s => [...s, { type: "map" }])} aria-label="Open map" title="Field map"><FEIcon name="map" size={16} /></button>
                </div>
              }
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
      {!top && <FETabBar tab={tab} onChange={setTab} hidden={tabHidden} />}
    </div>
  );
};

export default function App() {
  return <FEApp variant="A" theme="midnight" typePair="default" />;
}
