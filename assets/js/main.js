// ================================
// Bruno's Aquariums - Main Script
// v10  • nav toggle + active link + footer year
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');     // toggle class on the NAV, not the <ul>
  const links = nav ? nav.querySelectorAll('a') : [];
  const yearEl = document.getElementById('year');

  // -------- Footer year --------
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Mark active nav link by filename --------
  if (links && links.length) {
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    links.forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === here) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  // -------- Mobile nav toggle --------
  if (toggle && nav) {
    const openNav = () => {
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      // focus first link for a11y
      const firstLink = nav.querySelector('a');
      firstLink && firstLink.focus({ preventScroll: true });
    };

    const closeNav = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus({ preventScroll: true });
    };

    const toggleNav = () => {
      nav.classList.contains('open') ? closeNav() : openNav();
    };

    toggle.addEventListener('click', toggleNav);

    // Close when clicking a nav link (better mobile UX)
    links.forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) closeNav();
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        e.preventDefault();
        closeNav();
      }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('open')) return;
      const clickInsideNav = nav.contains(e.target);
      const clickToggle = toggle.contains(e.target);
      if (!clickInsideNav && !clickToggle) closeNav();
    });
  }

  // -------- Optional: header shadow on scroll (add .scrolled style if you like) --------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 8) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -------- Respect reduced motion (optional hook) --------
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduce-motion');
  }
});
