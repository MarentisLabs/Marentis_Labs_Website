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

  /* ── Cookie consent ──────────────────────────────────────── */
  const CONSENT_KEY = 'ml_cookie_consent';
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  function hideBanner() {
    if (banner) {
      banner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(100%)';
      setTimeout(function () { banner.remove(); }, 320);
    }
  }

  if (banner) {
    // Check stored consent
    if (localStorage.getItem(CONSENT_KEY)) {
      hideBanner();
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        hideBanner();
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        localStorage.setItem(CONSENT_KEY, 'rejected');
        hideBanner();
        // Disable GA if present
        if (window['ga-disable-G-VB6Q21MBY5']) {
          window['ga-disable-G-VB6Q21MBY5'] = true;
        }
      });
    }
  }

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
