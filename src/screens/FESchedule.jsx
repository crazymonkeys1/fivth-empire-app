import React from 'react';
import { FEIcon } from '../icons.jsx';
import { FETopBar } from '../parts.jsx';
import { FESessionCard } from '../parts.jsx';
import {
  FE_VENUES, FE_TRACKS, FE_DAYS, FE_SESSIONS, FE_PEOPLE_BY_ID,
  FE_toMinutes, FE_dayOf,
} from '../data.js';
import { useClock } from '../ClockContext.jsx';

const FEScheduleToolbar = ({ query, setQuery, venue, setVenue, track, setTrack, status, setStatus, sort, setSort }) => {
  const [openMenu, setOpenMenu] = React.useState(null);
  const activeCount = (venue ? 1 : 0) + (track ? 1 : 0) + (status ? 1 : 0) + (query ? 1 : 0);
  const clearAll = () => { setVenue(null); setTrack(null); setStatus(null); setQuery(""); };

  const Pop = ({ items, value, onPick, onClose }) => (
    <div className="fe-tb-pop" onClick={(e) => e.stopPropagation()}>
      {items.map(it => (
        <button key={it.value ?? "all"} className={"fe-tb-pop-item " + (value === it.value ? "active" : "")} onClick={() => { onPick(it.value); onClose(); }}>
          {it.glyph && <span className="g">{it.glyph}</span>}
          <span>{it.label}</span>
          {value === it.value && <span className="check">✓</span>}
        </button>
      ))}
    </div>
  );

  const venueItems = [{ value: null, label: "All stages" }, ...Object.values(FE_VENUES).map(v => ({ value: v.id, label: v.name }))];
  const trackItems = [{ value: null, label: "All categories" }, ...Object.values(FE_TRACKS).map(t => ({ value: t.id, label: t.name, glyph: t.glyph }))];
  const statusItems = [{ value: null, label: "All sessions" }, { value: "saved", label: "Saved only" }, { value: "upcoming", label: "Not done yet" }, { value: "done", label: "Already done" }];
  const sortItems = [{ value: "time", label: "By time" }, { value: "venue", label: "By stage" }, { value: "track", label: "By category" }];
  const close = () => setOpenMenu(null);

  return (
    <div className="fe-tb-wrap" onClick={close}>
      <div className="fe-tb">
        <div className="fe-tb-search">
          <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
          <input className="fe-tb-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
          {query && <button className="fe-tb-x" onClick={() => setQuery("")} aria-label="Clear search">✕</button>}
        </div>
        <span className="fe-tb-divider" />
        <div className="fe-tb-cluster" onClick={(e) => e.stopPropagation()}>
          <button className={"fe-tb-pill " + (venue ? "on" : "")} onClick={() => setOpenMenu(openMenu === "venue" ? null : "venue")}>
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M8 1.5l5.5 3v6L8 14l-5.5-3.5v-6z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
            <span>Stage</span>
            {venue && <span className="dot" style={{ background: `var(--fe-venue-${FE_VENUES[venue].color})` }} />}
          </button>
          {openMenu === "venue" && <Pop items={venueItems} value={venue} onPick={setVenue} onClose={close} />}
        </div>
        <div className="fe-tb-cluster" onClick={(e) => e.stopPropagation()}>
          <button className={"fe-tb-pill " + (track ? "on" : "")} onClick={() => setOpenMenu(openMenu === "track" ? null : "track")}>
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M2.5 4h11M4 8h8M5.5 12h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
            <span>Category{track ? ` · ${FE_TRACKS[track].glyph}` : ""}</span>
          </button>
          {openMenu === "track" && <Pop items={trackItems} value={track} onPick={setTrack} onClose={close} />}
        </div>
        <div className="fe-tb-cluster" onClick={(e) => e.stopPropagation()}>
          <button className={"fe-tb-btn " + (status ? "on" : "")} onClick={() => setOpenMenu(openMenu === "status" ? null : "status")} aria-label="Filter by status">
            {status === "saved" ? (
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M4 2h8v12l-4-2.5L4 14V2z" fill="currentColor"/></svg>
            ) : status === "done" ? (
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/></svg>
            )}
          </button>
          {openMenu === "status" && <Pop items={statusItems} value={status} onPick={setStatus} onClose={close} />}
        </div>
        <div className="fe-tb-cluster" onClick={(e) => e.stopPropagation()}>
          <button className={"fe-tb-btn " + (sort !== "time" ? "on" : "")} onClick={() => setOpenMenu(openMenu === "sort" ? null : "sort")} aria-label="Sort">
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M4.5 3v10M2.5 11l2 2 2-2M11.5 13V3M9.5 5l2-2 2 2" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {openMenu === "sort" && <Pop items={sortItems} value={sort} onPick={setSort} onClose={close} />}
        </div>
        {activeCount > 0 && (
          <button className="fe-tb-clear" onClick={clearAll} aria-label="Clear all filters">
            <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span>Clear</span>
          </button>
        )}
      </div>
    </div>
  );
};

export const FESchedule = ({ savedSet, onToggle, onOpen, variant, themeBtn }) => {
  const now = useClock();
  const [day, setDayRaw] = React.useState(now.day);
  const [query, setQuery] = React.useState("");
  const [fVenue, setFVenue] = React.useState(null);
  const [fTrack, setFTrack] = React.useState(null);
  const [fStatus, setFStatus] = React.useState(null);
  const [sort, setSort] = React.useState("time");
  const setDay = (n) => { setDayRaw(n); setQuery(""); setFVenue(null); setFTrack(null); setFStatus(null); };
  const dayObj = FE_dayOf(day);
  const nowMin = FE_toMinutes(now.time);

  const q = query.trim().toLowerCase();
  let sessions = FE_SESSIONS.filter(s => s.day === day);
  if (fVenue)  sessions = sessions.filter(s => s.venue === fVenue);
  if (fTrack)  sessions = sessions.filter(s => s.track === fTrack);
  if (fStatus === "saved")    sessions = sessions.filter(s => savedSet.has(s.id));
  if (fStatus === "done")     sessions = sessions.filter(s => day < now.day || (day === now.day && FE_toMinutes(s.end) <= nowMin));
  if (fStatus === "upcoming") sessions = sessions.filter(s => day > now.day || (day === now.day && FE_toMinutes(s.end) > nowMin));
  if (q) {
    sessions = sessions.filter(s => {
      const speakerNames = (s.speakers || []).map(id => FE_PEOPLE_BY_ID[id]?.name || "").join(" ");
      const haystack = `${s.title} ${s.desc || ""} ${FE_VENUES[s.venue]?.name || ""} ${FE_TRACKS[s.track]?.name || ""} ${speakerNames}`.toLowerCase();
      return haystack.includes(q);
    });
  }

  const groups = {};
  sessions.forEach(s => {
    if (!groups[s.start]) groups[s.start] = [];
    groups[s.start].push(s);
  });
  const times = Object.keys(groups).sort();

  const DayTabs = () => (
    <div className="fe-day-tabs">
      {FE_DAYS.map(d => (
        <button key={d.n} className={"fe-day-tab " + (day === d.n ? "active" : "")} onClick={() => setDay(d.n)}>
          <span className="n">{String(d.n).padStart(2, "0")}</span>
          <span className="lbl">{d.label} · {d.date.replace("May ", "")}</span>
        </button>
      ))}
    </div>
  );

  if (variant === "B") {
    const byVenue = {};
    sessions.forEach(s => { if (!byVenue[s.venue]) byVenue[s.venue] = []; byVenue[s.venue].push(s); });
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <FETopBar left={themeBtn} sub="Schedule" title={<span>By <em>Venue</em></span>} />
        <DayTabs />
        <div className="fe-day-header">
          <div className="title">{dayObj.title}</div>
          <div className="sub">By Venue</div>
        </div>
        <div className="fe-scroll" style={{ padding: "0 22px 24px" }}>
          {Object.keys(byVenue).map(vid => (
            <div key={vid} style={{ marginTop: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--fe-line)", marginBottom: 12 }}>
                <span style={{ width: 10, height: 10, background: `var(--fe-venue-${FE_VENUES[vid].color})` }} />
                <div style={{ fontFamily: "var(--fe-display)", fontSize: 18 }}>{FE_VENUES[vid].name}</div>
                <div style={{ marginLeft: "auto", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fe-fg-3)" }}>{FE_VENUES[vid].subtitle}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {byVenue[vid].map(s => (
                  <FESessionCard key={s.id} session={s} savedSet={savedSet} onToggle={onToggle} onOpen={onOpen}
                    isLive={day === now.day && FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <FETopBar left={themeBtn} sub="Schedule" title={<span>The <em>Programme</em></span>} />
      <DayTabs />
      <FEScheduleToolbar query={query} setQuery={setQuery} venue={fVenue} setVenue={setFVenue} track={fTrack} setTrack={setFTrack} status={fStatus} setStatus={setFStatus} sort={sort} setSort={setSort} />
      <div className="fe-scroll">
        {sessions.length === 0 && (
          <div className="fe-empty-state">
            <span className="g">∅</span>
            <p>No sessions match your filters.<br/><button className="fe-empty-clear" onClick={() => { setQuery(""); setFVenue(null); setFTrack(null); setFStatus(null); }}>Clear filters</button></p>
          </div>
        )}
        {sort === "venue" ? (
          <div style={{ padding: "0 22px 30px" }}>
            {Object.values(FE_VENUES).filter(v => sessions.some(s => s.venue === v.id)).map(v => (
              <div key={v.id} style={{ marginTop: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--fe-line)", marginBottom: 12 }}>
                  <span style={{ width: 10, height: 10, background: `var(--fe-venue-${v.color})` }} />
                  <div style={{ fontFamily: "var(--fe-display)", fontSize: 18 }}>{v.name}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {sessions.filter(s => s.venue === v.id).sort((a,b) => a.start.localeCompare(b.start)).map(s => (
                    <FESessionCard key={s.id} session={s} savedSet={savedSet} onToggle={onToggle} onOpen={onOpen}
                      isLive={day === now.day && FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : sort === "track" ? (
          <div style={{ padding: "0 22px 30px" }}>
            {Object.values(FE_TRACKS).filter(t => sessions.some(s => s.track === t.id)).map(t => (
              <div key={t.id} style={{ marginTop: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid var(--fe-line)", marginBottom: 12 }}>
                  <span style={{ color: "var(--fe-gold)", fontSize: 14 }}>{t.glyph}</span>
                  <div style={{ fontFamily: "var(--fe-display)", fontSize: 18 }}>{t.name}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {sessions.filter(s => s.track === t.id).sort((a,b) => a.start.localeCompare(b.start)).map(s => (
                    <FESessionCard key={s.id} session={s} savedSet={savedSet} onToggle={onToggle} onOpen={onOpen}
                      isLive={day === now.day && FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fe-timeline">
            {times.map(t => {
              const [h] = t.split(":").map(Number);
              const partOfDay = h < 12 ? "Morning" : h < 17 ? "Afternoon" : h < 21 ? "Evening" : "Night";
              const isLiveSlot = day === now.day && FE_toMinutes(t) <= nowMin && groups[t].some(s => FE_toMinutes(s.end) > nowMin);
              return (
                <div key={t} className="fe-time-block">
                  <div className="fe-time-rail">
                    {t}
                    <small>{partOfDay}</small>
                    {isLiveSlot && <div className="now">NOW</div>}
                  </div>
                  <div className="fe-time-content">
                    {groups[t].map(s => (
                      <FESessionCard key={s.id} session={s} savedSet={savedSet} onToggle={onToggle} onOpen={onOpen}
                        isLive={day === now.day && FE_toMinutes(s.start) <= nowMin && FE_toMinutes(s.end) > nowMin} />
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
