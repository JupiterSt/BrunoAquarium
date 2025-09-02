// ================================
// Bruno's Aquariums - Main Script
// v7 - Nav + Footer year
// ================================

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav ul');
  const yearEl = document.getElementById('year');

  // Mobile Nav Toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Optional: close nav when a link is clicked (mobile UX)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
