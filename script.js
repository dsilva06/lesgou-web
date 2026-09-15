(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const languageToggle = document.querySelector('.language-toggle');
  const translations = {
    'Saltar al contenido': 'Skip to content', 'Abrir menú': 'Open menu', 'Cerrar menú': 'Close menu',
    'Navegación principal': 'Main navigation', 'Para viajeros': 'For travelers', 'Cómo funciona': 'How it works',
    'Para proveedores': 'For providers', 'Conoce Lesgou': 'Discover Lesgou', 'VENEZUELA, DE PRINCIPIO A FIN': 'VENEZUELA, FROM START TO FINISH',
    'Menos vueltas.': 'Less hassle.', 'Más ': 'More ', 'Ese viaje que tienes en mente, con todo lo que necesitas para vivirlo. Hospedaje, transporte y experiencias, conectados en un solo lugar.': 'That trip you have in mind, with everything you need to experience it. Lodging, transportation, and experiences, all connected in one place.',
    'Así será tu próximo viaje': 'This is your next trip', 'Tengo un servicio turístico': 'I offer a travel service',
    'Una nueva forma de viajar. Próximamente.': 'A new way to travel. Coming soon.', 'EL VIAJE EMPIEZA AQUÍ': 'THE JOURNEY STARTS HERE',
    'Lo difícil debería ser elegir': 'The hard part should be choosing', 'el destino. ': 'the destination. ', 'No organizar el viaje.': 'Not organizing the trip.',
    'Un chat para el hospedaje, otro para el traslado y las actividades por tu cuenta. Lesgou nace para unir esas piezas y devolverte lo que importa: las ganas de ir.': 'One chat for lodging, another for transportation, and activities on your own. Lesgou brings those pieces together and gives you back what matters: the desire to go.',
    'Armar mi viaje': 'Build my trip', 'Algo puntual': 'Something specific', 'Un destino o varios. El viaje sigue siendo tuyo.': 'One destination or several. The trip is still yours.',
    'SOBRAN RAZONES PARA SALIR': 'PLENTY OF REASONS TO GO', 'Dos razones para ir.': 'Two reasons to go.',
    '¿Qué tienes para ofrecer?': 'What do you offer?', 'ENCUENTRA TU LUGAR': 'FIND YOUR PLACE',
    'ANTES DE HACER LAS MALETAS': 'BEFORE PACKING YOUR BAGS', 'Seguro te': 'You are probably', 'preguntas...': 'wondering...',
    'Lo esencial para conocer Lesgou, viajar con nosotros o formar parte como proveedor.': 'The essentials for getting to know Lesgou, traveling with us, or joining as a provider.',
    'HECHO AQUÍ. PARA VIVIRLO TODO.': 'MADE HERE. MADE TO EXPERIENCE IT ALL.', 'Quiero conocer la experiencia': 'I want to discover the experience',
    'PRÓXIMAMENTE EN VENEZUELA': 'COMING SOON TO VENEZUELA', 'Volver arriba': 'Back to top', 'Preguntas frecuentes': 'Frequently asked questions'
  };
  const originalText = new WeakMap();
  function setLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'es';
    document.documentElement.dataset.language = language;
    document.querySelectorAll('[aria-label]').forEach(element => {
      if (!originalText.has(element)) originalText.set(element, element.getAttribute('aria-label'));
      if (english) element.setAttribute('aria-label', translations[originalText.get(element)] || originalText.get(element));
      else element.setAttribute('aria-label', originalText.get(element));
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      if (!trimmed) continue;
      const translated = translations[trimmed];
      if (english && translated) node.nodeValue = source.replace(trimmed, translated);
      else if (!english) node.nodeValue = source;
    }
    if (languageToggle) {
      languageToggle.setAttribute('aria-label', english ? 'Switch language to Spanish' : 'Cambiar idioma a inglés');
      languageToggle.setAttribute('aria-pressed', String(english));
      languageToggle.querySelectorAll('.language-option').forEach((option, index) => option.classList.toggle('is-active', english ? index === 1 : index === 0));
    }
    localStorage.setItem('lesgou-language', language);
  }
  if (languageToggle) {
    languageToggle.addEventListener('click', () => setLanguage(languageToggle.getAttribute('aria-pressed') === 'true' ? 'es' : 'en'));
    setLanguage(localStorage.getItem('lesgou-language') || 'es');
  }
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('#main-navigation');
  function closeMenu(returnFocus = false) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
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
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
