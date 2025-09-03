// ================================
// Bruno's Aquariums - Main Script
// v10 - Mobile nav + Footer year
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.site-nav ul');
  const yearEl = document.getElementById('year');

  // Footer year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile Nav Toggle
  if (toggle && navList) {
    const openMenu = () => {
      navList.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    };
    const closeMenu = () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    };
    const toggleMenu = () => navList.classList.contains('open') ? closeMenu() : openMenu();

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking a link
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navList.classList.contains('open')) return;
      const insideNav = e.target.closest('.site-nav') || e.target.closest('.nav-toggle');
      if (!insideNav) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }
});
