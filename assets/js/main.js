(function(){
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.site-nav ul');
  if (toggle && navList){
    toggle.addEventListener('click', ()=>{
      const open = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if (href && href.endsWith(current)) a.classList.add('active');
  });
})();
