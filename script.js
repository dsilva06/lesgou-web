(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isNarrow = () => matchMedia('(max-width: 980px)').matches;

  // Supabase settings come from /config.js. Without them the provider form
  // falls back to opening WhatsApp with the details already written.
  const supa = window.LESGOU_SUPABASE || {};
  const supaReady = Boolean(supa.url && supa.anonKey);
  function supaInsert(table, row) {
    const headers = { apikey: supa.anonKey, 'Content-Type': 'application/json', Prefer: 'return=minimal' };
    if (supa.anonKey.startsWith('eyJ')) headers.Authorization = `Bearer ${supa.anonKey}`; // legacy JWT anon key
    return fetch(`${supa.url.replace(/\/$/, '')}/rest/v1/${table}`, { method: 'POST', headers, body: JSON.stringify(row) })
      .then(r => { if (!r.ok) throw new Error(String(r.status)); });
  }
  const PROVIDER_WHATSAPP = '584244500211';
  const WAITLIST_KEY = 'lesgou-waitlist';

  /* ---------------- i18n ----------------
     Body copy carries its English in data-en / data-en-aria / data-en-alt /
     data-en-placeholder. Strings built by script live here. */
  const strings = {
    es: {
      title: 'Lesgou — Que lo difícil sea volver.',
      description: 'Lesgou conecta todo tu viaje por Venezuela y está hecho para viajar en grupo: quién va, qué hace cada uno y cuánto paga, desde su teléfono. Para viajeros y prestadores de servicios turísticos.',
      ogTitle: 'Lesgou — Que lo difícil sea volver.',
      ogDescription: 'Todo el viaje, con tu gente. Cada quien elige lo suyo y paga su parte desde su teléfono.',
      locale: 'es_VE', toggle: 'EN', toggleLabel: 'Cambiar idioma a inglés', num: 'es-VE',
      joined: '✓ Tu lugar está reservado',
      errType: 'Elige al menos un tipo de servicio.',
      errFields: 'Completa los campos para que podamos contactarte.',
      errEmail: 'Revisa el correo, parece que le falta algo.',
      errSend: 'No pudimos enviarlo. Inténtalo de nuevo o escríbenos por WhatsApp.',
      okTitle: name => `Recibido, ${name}.`,
      okText: (biz, via) => `${biz} ya está en nuestra lista. Te contactamos pronto por ${via}.`,
      via: { WhatsApp: 'WhatsApp', llamada: 'llamada', correo: 'correo' },
      waIntro: 'Hola Lesgou, quiero sumar mi servicio:'
    },
    en: {
      title: 'Lesgou — Let the hard part be coming home.',
      description: 'Lesgou connects your whole trip around Venezuela and is built for group travel: who is going, what each person does and what they pay, from their own phone. For travelers and tourism providers.',
      ogTitle: 'Lesgou — Let the hard part be coming home.',
      ogDescription: 'The whole trip, with your people. Everyone picks what they want and pays their share from their own phone.',
      locale: 'en_US', toggle: 'ES', toggleLabel: 'Switch language to Spanish', num: 'en-US',
      joined: '✓ Your spot is reserved',
      errType: 'Pick at least one type of service.',
      errFields: 'Fill in the fields so we can reach you.',
      errEmail: 'Check the email, something seems to be missing.',
      errSend: "We couldn't send it. Try again or message us on WhatsApp.",
      okTitle: name => `Got it, ${name}.`,
      okText: (biz, via) => `${biz} is on our list. We'll reach out soon by ${via}.`,
      via: { WhatsApp: 'WhatsApp', llamada: 'phone call', correo: 'email' },
      waIntro: 'Hi Lesgou, I want to add my service:'
    }
  };
  let lang = 'es';
  const t = key => strings[lang][key];
  const originals = { html: new WeakMap(), aria: new WeakMap(), alt: new WeakMap(), ph: new WeakMap() };
  function swap(el, map, attr, en, english) {
    if (!map.has(el)) map.set(el, attr ? el.getAttribute(attr) : el.innerHTML);
    const v = english ? en : map.get(el);
    if (attr) el.setAttribute(attr, v); else el.innerHTML = v;
  }
  const setMeta = (sel, v) => { const m = document.head.querySelector(sel); if (m) m.setAttribute('content', v); };
  const langListeners = [];
  function setLanguage(next) {
    lang = next === 'en' ? 'en' : 'es';
    const en = lang === 'en';
    root.lang = lang;
    document.querySelectorAll('[data-en]').forEach(el => swap(el, originals.html, null, el.dataset.en, en));
    document.querySelectorAll('[data-en-aria]').forEach(el => swap(el, originals.aria, 'aria-label', el.dataset.enAria, en));
    document.querySelectorAll('[data-en-alt]').forEach(el => swap(el, originals.alt, 'alt', el.dataset.enAlt, en));
    document.querySelectorAll('[data-en-placeholder]').forEach(el => swap(el, originals.ph, 'placeholder', el.dataset.enPlaceholder, en));
    document.title = t('title');
    setMeta('meta[name="description"]', t('description'));
    setMeta('meta[property="og:title"]', t('ogTitle'));
    setMeta('meta[property="og:description"]', t('ogDescription'));
    setMeta('meta[property="og:locale"]', t('locale'));
    const toggle = document.querySelector('.language-toggle');
    if (toggle) { toggle.textContent = t('toggle'); toggle.setAttribute('aria-label', t('toggleLabel')); toggle.setAttribute('aria-pressed', String(en)); }
    const year = document.getElementById('year'); if (year) year.textContent = String(new Date().getFullYear());
    try { localStorage.setItem('lesgou-language', lang); } catch (e) { /* private mode */ }
    langListeners.forEach(fn => fn());
  }

  /* ---------------- header ---------------- */
  const bar = document.querySelector('.bar');
  const onScroll = () => bar && bar.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------------- fidget controls ---------------- */
  const buzz = ms => { if (navigator.vibrate) navigator.vibrate(ms); };
  document.querySelectorAll('.fx').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      b.style.setProperty('--px', x + 'px'); b.style.setProperty('--py', y + 'px');
      if (!reduce && e.pointerType === 'mouse') { b.style.setProperty('--mx', ((x / r.width) - .5) * 8 + 'px'); b.style.setProperty('--my', ((y / r.height) - .5) * 6 + 'px'); }
    });
    b.addEventListener('pointerleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    // Touch has no hover: light the sheen where the finger lands and press the button.
    b.addEventListener('pointerdown', e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--px', e.clientX - r.left + 'px'); b.style.setProperty('--py', e.clientY - r.top + 'px');
      b.classList.add('is-pressed'); buzz(8);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => b.addEventListener(t, () => b.classList.remove('is-pressed')));
  });
  // iOS Safari only applies :active styles when a touch listener exists.
  document.addEventListener('touchstart', () => {}, { passive: true });
  document.addEventListener('click', e => {
    const s = e.target.closest('.sw'); if (!s) return;
    const on = s.getAttribute('aria-checked') !== 'true'; s.setAttribute('aria-checked', String(on)); buzz(6);
    s.dispatchEvent(new CustomEvent('toggle', { bubbles: true, detail: on }));
  });
  function initSeg(seg) {
    const pill = seg.querySelector('.pill'), btns = [...seg.querySelectorAll('button')];
    const place = b => { if (!b || !b.offsetWidth) return; pill.style.width = b.offsetWidth + 'px'; pill.style.transform = `translateX(${b.offsetLeft - 4}px)`; };
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(o => o.setAttribute('aria-pressed', String(o === b))); place(b);
      seg.dispatchEvent(new CustomEvent('change', { detail: b.dataset.v }));
    }));
    const placeCurrent = () => place(seg.querySelector('[aria-pressed=true]') || btns[0]);
    requestAnimationFrame(placeCurrent);
    addEventListener('resize', placeCurrent); langListeners.push(() => requestAnimationFrame(placeCurrent));
    if ('ResizeObserver' in window) new ResizeObserver(placeCurrent).observe(seg);
  }
  document.querySelectorAll('.seg').forEach(initSeg);

  const fmt = (v, dec = 0) => v.toLocaleString(t('num'), { minimumFractionDigits: dec, maximumFractionDigits: dec });
  function countTo(el, to, dec = 0) {
    const from = parseFloat(el.dataset.v || '0'), t0 = performance.now(), d = reduce ? 1 : 700;
    el.dataset.v = to; el.dataset.dec = dec;
    (function tick(now) {
      const k = Math.min(1, (now - t0) / d), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(from + (to - from) * e, dec);
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  }
  const bump = el => { el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); };

  /* ---------------- reveal ---------------- */
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.rv').forEach(el => io.observe(el));
  } else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));

  /* ---------------- hero: trip bill (illustrative numbers) ---------------- */
  const items = [{ pp: 160 }, { shared: 60 }, { shared: 432 }, { shared: 90 }, { shared: 160 }];
  const people = ['D', 'A', 'L', 'C', 'S', 'M', 'J', 'R'], colours = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let N = 4;
  function paintBill(first) {
    const total = items.reduce((a, it) => a + (it.pp ? it.pp * N : it.shared), 0);
    countTo(document.getElementById('tot'), total);
    countTo(document.getElementById('pp'), total / N, 2);
    document.querySelectorAll('#items [data-i]').forEach(el => { const it = items[el.dataset.i]; el.textContent = 'USD ' + fmt(it.pp ? it.pp * N : it.shared); });
    document.getElementById('prog').style.width = Math.round(100 / N) + '%';
    syncAvatars(first);
    const n = document.getElementById('n'); n.textContent = N; if (!first) bump(n);
  }
  /* Same spring as the traveler guides: people hop in along an arc and shrink away when they leave. */
  const av = document.getElementById('avas'), AV_STEP = 26;
  function avatarPose(node) {
    const p = node._m.position, x = -24 * (1 - p) ** 2, y = -48 * p * (1 - p);
    node.style.transform = p === 1 ? 'none' : `translate3d(${x}px,${y}px,0) scale(${.58 + .42 * p})`;
    node.style.zIndex = p < .46 ? '0' : String(Number(node.dataset.avatar) + 2);
    node.style.setProperty('--glow', (.14 + .18 * p).toFixed(3));
  }
  function tickAvatars(now) {
    av._frame = null;
    const dt = av._time ? Math.max(0, (now - av._time) / 1000) : 1 / 60; av._time = now;
    const f = 20, decay = Math.exp(-f * dt); let moving = false;
    av.querySelectorAll('[data-avatar]').forEach(node => {
      const m = node._m;
      if (reduce) { m.position = m.target; m.velocity = 0; }
      else {
        const d = m.position - m.target, blend = m.velocity + f * d;
        m.position = m.target + (d + blend * dt) * decay;
        m.velocity = (m.velocity - f * blend * dt) * decay;
        if (Math.abs(m.position - m.target) < .002 && Math.abs(m.velocity) < .025) { m.position = m.target; m.velocity = 0; }
      }
      avatarPose(node);
      if (m.position === 0 && m.target === 0) { node.remove(); return; }
      if (m.position !== m.target || m.velocity !== 0) moving = true;
    });
    if (moving) av._frame = requestAnimationFrame(tickAvatars); else av._time = null;
  }
  function syncAvatars(first) {
    av.style.width = (34 + AV_STEP * (N - 1)) + 'px';
    av.querySelectorAll('[data-avatar]').forEach(node => { node._m.target = Number(node.dataset.avatar) < N ? 1 : 0; });
    for (let i = 0; i < N; i++) {
      let node = av.querySelector(`[data-avatar="${i}"]`);
      if (!node) {
        node = document.createElement('span'); node.className = 'ava ' + colours[i]; node.dataset.avatar = i;
        node.textContent = people[i]; node.setAttribute('aria-hidden', 'true');
        node._m = { position: first || reduce ? 1 : .18, velocity: first || reduce ? 0 : 7.5, target: 1 };
        node.style.left = (i * AV_STEP) + 'px';
        av.appendChild(node);
      }
      node._m.target = 1; avatarPose(node);
    }
    if (av._frame == null) av._frame = requestAnimationFrame(tickAvatars);
  }
  document.getElementById('plus').addEventListener('click', () => { if (N < 8) { N++; paintBill(); } });
  document.getElementById('minus').addEventListener('click', () => { if (N > 2) { N--; paintBill(); } });
  paintBill(true);

  /* ---------------- chat bubbles ---------------- */
  const thread = document.getElementById('thread');
  thread.querySelectorAll('.msg').forEach((m, i) => { m.style.transitionDelay = (i * .22) + 's'; });
  if ('IntersectionObserver' in window && !reduce) {
    new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { thread.classList.add('in'); o.disconnect(); } }), { threshold: .35 }).observe(thread);
  } else thread.classList.add('in');

  /* ---------------- how it works ---------------- */
  const steps = [...document.querySelectorAll('.stp')], screens = [...document.querySelectorAll('.screen')];
  const payScr = document.getElementById('payScr');
  const pay = () => { payScr.classList.remove('paid'); void payScr.offsetWidth; setTimeout(() => payScr.classList.add('paid'), 300); };
  const joinAnim = () => document.querySelectorAll('#joiners .row').forEach((r, i) => { r.classList.remove('in'); setTimeout(() => r.classList.add('in'), 150 + i * 260); });
  function showStep(i) {
    steps.forEach(s => s.classList.toggle('on', s.dataset.s === i));
    screens.forEach(s => s.classList.toggle('on', s.dataset.s === i));
    if (i === '0') joinAnim();
    if (i === '4') pay();
  }
  if (isNarrow()) {
    // Phones: each app screen sits under its own step.
    screens.forEach(sc => steps.find(s => s.dataset.s === sc.dataset.s).appendChild(sc));
    setTimeout(() => dispatchEvent(new Event('resize')), 50);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) showStep(e.target.dataset.s); }), { rootMargin: isNarrow() ? '-30% 0px -30% 0px' : '-45% 0px -45% 0px' });
    steps.forEach(s => io.observe(s));
  }
  showStep('0');
  document.getElementById('wa').addEventListener('click', joinAnim);
  document.getElementById('payAgain').addEventListener('click', pay);

  const luisBox = document.getElementById('luisItems');
  const luis = () => { let s = 0; luisBox.querySelectorAll('.sw').forEach(sw => { if (sw.getAttribute('aria-checked') === 'true') s += parseFloat(sw.dataset.v); }); countTo(document.getElementById('luis'), s, 2); };
  luisBox.addEventListener('toggle', luis); luis();

  document.getElementById('forSeg').addEventListener('change', e => {
    const other = e.detail === 'other';
    document.getElementById('sofi').classList.toggle('hide', !other);
    document.getElementById('sofiNote').hidden = !other;
  });

  /* ---------------- waitlist entry points remember the visitor ---------------- */
  let joined = null;
  try { joined = JSON.parse(localStorage.getItem(WAITLIST_KEY)); } catch (e) { /* private mode */ }
  function paintJoined() {
    if (!joined) return;
    document.querySelectorAll('[data-waitlist]').forEach(a => {
      a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true');
      a.classList.remove('fx-teal'); a.classList.add('fx-joined');
      a.textContent = t('joined');
    });
  }

  /* ---------------- providers form ---------------- */
  const pf = document.getElementById('pform'), pinner = document.getElementById('pinner'), ptoggle = document.getElementById('ptoggle');
  let via = 'WhatsApp';
  function openForm(open) {
    pf.classList.toggle('open', open); pinner.inert = !open;
    ptoggle.setAttribute('aria-expanded', String(open));
    if (open) setTimeout(() => dispatchEvent(new Event('resize')), 450);
  }
  openForm(false);
  ptoggle.addEventListener('click', () => { buzz(8); openForm(!pf.classList.contains('open')); });
  document.getElementById('pVia').addEventListener('change', e => { via = e.detail; });
  pf.addEventListener('change', e => {
    if (e.target.name === 'tipo') { buzz(6); document.getElementById('potherRow').hidden = !pf.querySelector('input[value="Otro"]').checked; }
  });
  pf.addEventListener('submit', e => {
    e.preventDefault();
    if (pf.classList.contains('busy') || pf.classList.contains('paid')) return;
    const v = id => document.getElementById(id).value.trim(), err = document.getElementById('perr');
    const types = [...pf.querySelectorAll('input[name=tipo]:checked')].map(i => i.value === 'Otro' && v('pOt') ? v('pOt') : i.value);
    if (!types.length) { err.textContent = t('errType'); return; }
    if (!v('pBiz') || !v('pName') || !v('pLoc') || !v('pEm') || !v('pPh')) { err.textContent = t('errFields'); return; }
    if (!/^\S+@\S+\.\S+$/.test(v('pEm'))) { err.textContent = t('errEmail'); return; }
    err.textContent = '';
    const data = { servicios: types.join(', '), negocio: v('pBiz'), nombre: v('pName'), ubicacion: v('pLoc'), correo: v('pEm'), telefono: v('pPp') + ' ' + v('pPh'), web: v('pWeb'), mensaje: v('pMsg'), contacto: via, idioma: lang };

    let sending;
    if (supaReady) {
      sending = supaInsert('provider_leads', {
        services: data.servicios, business_name: data.negocio, contact_name: data.nombre, location: data.ubicacion,
        email: data.correo, phone: data.telefono, website: data.web || null, message: data.mensaje || null,
        contact_via: via, language: lang
      });
    } else {
      // No form service yet: hand the details to WhatsApp, already written.
      const text = [t('waIntro'), ...Object.entries(data).filter(([, x]) => x).map(([k, x]) => `${k}: ${x}`)].join('\n');
      window.open(`https://wa.me/${PROVIDER_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
      sending = Promise.resolve();
    }
    pf.classList.add('busy');
    Promise.all([sending, new Promise(r => setTimeout(r, 1100))]).then(() => {
      document.getElementById('pOk').textContent = t('okTitle')(data.nombre.split(' ')[0]);
      document.getElementById('pOkT').textContent = t('okText')(data.negocio, t('via')[via]);
      pf.classList.remove('busy'); pf.classList.add('paid'); buzz(12);
    }).catch(() => { pf.classList.remove('busy'); err.textContent = t('errSend'); });
  });
  document.getElementById('pAgain').addEventListener('click', () => {
    pf.reset(); pf.classList.remove('paid'); document.getElementById('potherRow').hidden = true; openForm(false);
  });

  /* ---------------- language ---------------- */
  langListeners.push(paintJoined, () => paintBill(true), luis);
  document.querySelector('.language-toggle').addEventListener('click', () => setLanguage(lang === 'en' ? 'es' : 'en'));
  let stored = null;
  try { stored = localStorage.getItem('lesgou-language'); } catch (e) { /* private mode */ }
  setLanguage(stored || 'es');
})();
