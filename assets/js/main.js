/* ─────────────────────────────────────────────────────────────
   Marentis Labs — main.js
   Handles: mobile nav toggle, scroll-reveal, cookie consent
   No external dependencies.
   ───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Mobile navigation ──────────────────────────────────── */
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('block');
      mobileMenu.classList.toggle('hidden', isOpen);
      mobileMenu.classList.toggle('block', !isOpen);
      if (menuIconOpen)  menuIconOpen.classList.toggle('hidden', !isOpen);
      if (menuIconClose) menuIconClose.classList.toggle('hidden', isOpen);
    });
  }

  /* ── Scroll-reveal ──────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Cookie preferences ──────────────────────────────────── */
  const CONSENT_KEY = 'ml_cookie_consent';
  const GA_ID = 'G-VB6Q21MBY5';
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const essentialBtn = document.getElementById('cookie-essential');
  const rejectBtn = document.getElementById('cookie-reject');

  function hideBanner() {
    if (banner) {
      banner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(100%)';
      setTimeout(function () { banner.remove(); }, 320);
    }
  }

  // Stop analytics for the rest of this visit and remove any analytics cookies already set
  function disableAnalytics() {
    window['ga-disable-' + GA_ID] = true;
    var root = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (entry) {
      var name = entry.split('=')[0].trim();
      if (name === '_ga' || name === '_gid' || name.indexOf('_ga_') === 0) {
        ['', '; domain=' + location.hostname, '; domain=.' + root].forEach(function (scope) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + scope;
        });
      }
    });
  }

  function setPreference(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    if (value !== 'accepted') { disableAnalytics(); }
    hideBanner();
  }

  if (banner) {
    if (localStorage.getItem(CONSENT_KEY)) { hideBanner(); }
    if (acceptBtn)    acceptBtn.addEventListener('click', function () { setPreference('accepted'); });
    if (essentialBtn) essentialBtn.addEventListener('click', function () { setPreference('essential'); });
    if (rejectBtn)    rejectBtn.addEventListener('click', function () { setPreference('rejected'); });
  }

  /* ── Analytics events (first-party, statistical) ─────────── */
  function mlTrack(name, params) {
    if (typeof window.gtag === 'function') { window.gtag('event', name, params || {}); }
  }

  var mlPath = window.location.pathname.replace(/\/+$/, '');
  if (mlPath === '/contact/thank-you')     { mlTrack('generate_lead', { form: 'contact' }); }
  if (mlPath === '/white-paper/thank-you') { mlTrack('white_paper_download', { asset: 'sgaas-white-paper' }); }

  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href*="calendar.proton.me"]') : null;
    if (link) { mlTrack('book_meeting', { link_url: link.href }); }
  });

  /* ── Active nav link ──────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '');
    // Mark active: exact match, or current path starts with link path (for /services/)
    if (
      currentPath === linkPath ||
      (linkPath !== '/' && linkPath !== '' && currentPath.startsWith(linkPath))
    ) {
      link.classList.add('nav-link-active');
    }
  });

})();
