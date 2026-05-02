// Maps real Lisbon time to a festival { day, time, isLive } object.
// Falls back to demo mode outside May 1-3 2026.

const FESTIVAL_DATES = {
  '2026-05-01': 1,
  '2026-05-02': 2,
  '2026-05-03': 3,
};

const DEMO = { day: 2, time: '14:25', isLive: false };

export const getLisbonNow = () => {
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Lisbon',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(now);

    const get = (type) => parts.find(p => p.type === type)?.value ?? '';
    const dateKey = `${get('year')}-${get('month')}-${get('day')}`;
    const hour = get('hour') === '24' ? '00' : get('hour'); // midnight edge case
    const time = `${hour}:${get('minute')}`;
    const day = FESTIVAL_DATES[dateKey];

    if (day) return { day, time, isLive: true };
  } catch {}
  return DEMO;
};
