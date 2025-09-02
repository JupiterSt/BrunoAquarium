// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav ul');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
