export const FEIcon = ({ name, size = 18 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    bookmark: <path d="M6 3h12v18l-6-4-6 4z"/>,
    bookmarkFilled: <path d="M6 3h12v18l-6-4-6 4z" fill="currentColor"/>,
    map: <><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2z"/><path d="M9 3v16M15 5v16"/></>,
    home: <><path d="M3 11 12 3l9 8"/><path d="M5 10v11h14V10"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="0"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    grid: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    arrowL: <><path d="M19 12H5M11 6 5 12l6 6"/></>,
    chevron: <path d="m9 6 6 6-6 6"/>,
    chevronD: <path d="m6 9 6 6 6-6"/>,
    pin: <><path d="M12 2c-3.3 0-6 2.7-6 6 0 4.5 6 13 6 13s6-8.5 6-13c0-3.3-2.7-6-6-6z"/><circle cx="12" cy="8" r="2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    share: <><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></>,
    walk: <><circle cx="13" cy="4" r="2"/><path d="m9 21 2-7-3-3 1-5 5 3 3 3M11 14l-3 4"/></>,
    sound: <><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2.1-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2.1 1.2L5 5.9l-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-.9c.6.5 1.3.9 2.1 1.2L10 21h4l.5-2.6a7 7 0 0 0 2.1-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/></>,
    close: <path d="M6 6 18 18M18 6 6 18"/>,
    wifi: <><path d="M2 8.8a16 16 0 0 1 20 0"/><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r=".5" fill="currentColor"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>,
    partners: <><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
};
