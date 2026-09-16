(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const languageToggle = document.querySelector('.language-toggle');

  // Head metadata per language. Everything inside <body> carries its own
  // translation in data-en / data-en-aria / data-en-alt, so copy and
  // translation are edited in the same place and cannot drift apart.
  const strings = {
    es: {
      title: 'Lesgou — Que lo difícil sea volver.',
      description: 'Conoce Lesgou: una nueva forma de organizar tus viajes por Venezuela. Hospedaje, vuelos, transporte, actividades y restaurantes. Un espacio para viajeros y proveedores turísticos.',
      ogTitle: 'Lesgou — Que lo difícil sea volver.',
      ogDescription: 'Tu próximo viaje y las personas que lo hacen posible, conectados en un solo lugar.',
      locale: 'es_VE',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      toggleLabel: 'Cambiar idioma a inglés'
    },
    en: {
      title: 'Lesgou — Let the hard part be coming home.',
      description: 'Meet Lesgou: a new way to organize your trips around Venezuela. Lodging, flights, transportation, activities and restaurants. A place for travelers and tourism providers.',
      ogTitle: 'Lesgou — Let the hard part be coming home.',
      ogDescription: 'Your next trip and the people who make it possible, connected in one place.',
      locale: 'en_US',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      toggleLabel: 'Switch language to Spanish'
    }
  };

  let language = 'es';
  const t = key => strings[language][key];

  const originalHtml = new WeakMap();
  const originalAria = new WeakMap();
  const originalAlt = new WeakMap();

  function restoreOrTranslate(element, map, attribute, englishValue, english) {
    if (!map.has(element)) {
      map.set(element, attribute ? element.getAttribute(attribute) : element.innerHTML);
    }
    const value = english ? englishValue : map.get(element);
    if (attribute) element.setAttribute(attribute, value);
    else element.innerHTML = value;
  }

  function setMeta(selector, value) {
    const tag = document.head.querySelector(selector);
    if (tag) tag.setAttribute('content', value);
  }

  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'es';
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'es';
    document.documentElement.dataset.language = language;

    document.querySelectorAll('[data-en]').forEach(element => {
      restoreOrTranslate(element, originalHtml, null, element.dataset.en, english);
    });
    document.querySelectorAll('[data-en-aria]').forEach(element => {
      restoreOrTranslate(element, originalAria, 'aria-label', element.dataset.enAria, english);
    });
    document.querySelectorAll('[data-en-alt]').forEach(element => {
      restoreOrTranslate(element, originalAlt, 'alt', element.dataset.enAlt, english);
    });

    document.title = t('title');
    setMeta('meta[name="description"]', t('description'));
    setMeta('meta[property="og:title"]', t('ogTitle'));
    setMeta('meta[property="og:description"]', t('ogDescription'));
    setMeta('meta[property="og:locale"]', t('locale'));

    if (menuButton) {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', open ? t('menuClose') : t('menuOpen'));
    }
    if (languageToggle) {
      languageToggle.setAttribute('aria-label', t('toggleLabel'));
      languageToggle.setAttribute('aria-pressed', String(english));
      languageToggle.querySelectorAll('.language-option').forEach((option, index) =>
        option.classList.toggle('is-active', english ? index === 1 : index === 0));
    }
    // The year is injected by script, so it is rewritten after any innerHTML swap.
    stampYear();
    try { localStorage.setItem('lesgou-language', language); } catch (error) { /* modo privado */ }
  }

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('#main-navigation');
  function closeMenu(returnFocus = false) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('menuOpen'));
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? t('menuClose') : t('menuOpen'));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header')) closeMenu();
  });
  const narrowScreen = window.matchMedia('(max-width: 800px)');
  if (narrowScreen.addEventListener) narrowScreen.addEventListener('change', () => closeMenu());

  function stampYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', () =>
      setLanguage(languageToggle.getAttribute('aria-pressed') === 'true' ? 'es' : 'en'));
  }
  let stored = null;
  try { stored = localStorage.getItem('lesgou-language'); } catch (error) { /* modo privado */ }
  setLanguage(stored || 'es');

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function selectTab(tab, focus = false) {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      else if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
      else if (event.key === 'Home') next = tabs[0];
      else if (event.key === 'End') next = tabs[tabs.length - 1];
      if (next) { event.preventDefault(); selectTab(next, true); }
    });
  });
  document.querySelectorAll('.provider-type').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      document.querySelectorAll('.provider-type[open]').forEach(other => {
        if (other !== detail) other.open = false;
      });
    });
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    document.documentElement.classList.add('motion-ready');
    window.addEventListener('beforeprint', () => document.documentElement.classList.remove('motion-ready'));
  }
})();
