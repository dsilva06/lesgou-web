// Owner-requested promotional baseline. Actual signups remain separate in Supabase.
export const DISPLAY_BASE = 250;

export function createWaitlistCounter({ readCount, present, unavailable = () => {}, base = DISPLAY_BASE }) {
  let count = null, version = 0;
  present(base, { initial: true });

  async function refresh() {
    const request = ++version;
    try {
      const next = await readCount();
      if (!Number.isSafeInteger(next) || next < 0 || next > Number.MAX_SAFE_INTEGER - base) throw new Error('Invalid count');
      if (request !== version) return null;
      count = next;
      present(base + count, { confirmed: true });
      return count;
    } catch {
      if (request === version) unavailable(count !== null);
      return null;
    }
  }

  function confirmSignup(created) {
    // Invalidate any count request that started before this successful insert.
    ++version;
    if (created) {
      count = (count ?? 0) + 1;
      present(base + count, { confirmed: true });
    }
    return refresh();
  }

  return { refresh, confirmSignup, get total() { return base + (count ?? 0); } };
}

export function mountWaitlistCounter(element, { config = window.LESGOU_SUPABASE || {}, fetchImpl = fetch } = {}) {
  const visual = element.querySelector('[data-count-visual]');
  const status = element.querySelector('[data-count-status]');
  const fallback = element.querySelector('[data-count-fallback]');
  const line = element.querySelector('[data-count-line]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let total = DISPLAY_BASE, columns = [], failed = false;

  function paint(next, { initial = false, confirmed = false } = {}) {
    if (confirmed) failed = false;
    const increasing = next >= total;
    total = next;
    const lang = element.ownerDocument.documentElement.lang === 'en' ? 'en' : 'es';
    const formatted = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-VE').format(next);
    const previous = [...columns].reverse();
    columns = [...formatted].reverse().map((char, index) => {
      const old = previous[index];
      if (!/\d/.test(char)) {
        if (old?.separator === char) return old;
        const node = document.createElement('span');
        node.className = 'wl-count-separator'; node.textContent = char;
        return { node, separator: char };
      }
      const digit = Number(char);
      if (!old || old.separator) {
        const node = document.createElement('span'), strip = document.createElement('span');
        node.className = 'wl-count-digit'; strip.className = 'wl-count-strip';
        for (let i = 0; i < 20; i++) {
          const cell = document.createElement('span'); cell.textContent = String(i % 10); strip.append(cell);
        }
        strip.style.setProperty('--digit', String(digit)); node.append(strip);
        return { node, strip, digit, position: digit };
      }
      if (old.digit === digit) return old;
      if (old.position >= 10) {
        old.strip.style.transition = 'none';
        old.strip.style.setProperty('--digit', String(old.digit));
        void old.strip.offsetHeight;
        old.strip.style.transition = '';
      }
      old.position = digit + (increasing && digit < old.digit && !reduce.matches ? 10 : 0);
      old.strip.style.setProperty('--digit', String(old.position));
      old.digit = digit;
      return old;
    }).reverse();
    // Keep existing columns connected so their rolling transitions stay continuous.
    const desired = columns.map(column => column.node);
    if (!visual.children.length) visual.textContent = '';
    desired.forEach((node, index) => {
      if (visual.children[index] !== node) visual.insertBefore(node, visual.children[index] || null);
    });
    [...visual.children].forEach(node => { if (!desired.includes(node)) node.remove(); });
    status.textContent = failed ? '' : lang === 'en' ? `${formatted} people on the waitlist.` : `${formatted} personas en la lista.`;
    line.hidden = failed; fallback.hidden = !failed;
    if (!initial && confirmed) element.setAttribute('aria-busy', 'false');
  }

  const counter = createWaitlistCounter({
    present: paint,
    unavailable: hasCount => {
      element.setAttribute('aria-busy', 'false');
      if (!hasCount) { failed = true; line.hidden = true; fallback.hidden = false; status.textContent = ''; }
    },
    readCount: async () => {
      if (!config.url || !config.anonKey) throw new Error('Count unavailable');
      const response = await fetchImpl(`${config.url.replace(/\/$/, '')}/functions/v1/waitlist-count`, {
        headers: { apikey: config.anonKey }, cache: 'no-store', signal: AbortSignal.timeout(7000),
      });
      if (!response.ok) throw new Error('Count unavailable');
      return (await response.json()).count;
    },
  });

  const language = new MutationObserver(() => paint(total));
  language.observe(element.ownerDocument.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const interval = setInterval(() => { if (!document.hidden) counter.refresh(); }, 30000);
  const visible = () => { if (!document.hidden) counter.refresh(); };
  document.addEventListener('visibilitychange', visible);
  counter.refresh();
  counter.dispose = () => { clearInterval(interval); language.disconnect(); document.removeEventListener('visibilitychange', visible); };
  return counter;
}

if (typeof document !== 'undefined') {
  const element = document.querySelector('[data-waitlist-counter]');
  if (element) window.LESGOU_WAITLIST_COUNT = mountWaitlistCounter(element);
}
