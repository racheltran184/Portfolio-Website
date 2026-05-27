// Main interactions: nav, filters, modal, scroll animations
// ── Theme toggle
(function(){
  var btn = document.getElementById('themeToggle');
  var root = document.documentElement;
  var moon = document.getElementById('icon-moon');
  var sun  = document.getElementById('icon-sun');
  var d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  function set(v) {
    d = v;
    root.setAttribute('data-theme', v);
    if (v === 'dark') { moon.style.display = 'none'; sun.style.display = ''; btn.setAttribute('aria-label','Switch to light mode'); }
    else              { sun.style.display  = 'none'; moon.style.display = ''; btn.setAttribute('aria-label','Switch to dark mode'); }
  }
  set(d);
  btn.addEventListener('click', function(){ set(d === 'dark' ? 'light' : 'dark'); });
})();

// ── Scroll reveal
var obs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });

// ── Active nav
var sections = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', function(){
  var cur = '';
  sections.forEach(function(s){ if(window.scrollY >= s.offsetTop - 80) cur = s.id; });
  navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#'+cur); });
});

// ── Experience / Education tabs
document.querySelectorAll('.exp-tab-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.exp-tab-btn').forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.exp-tab-panel').forEach(function(p){ p.classList.remove('active'); });
    btn.classList.add('active'); btn.setAttribute('aria-selected','true');
    var target = document.getElementById(btn.getAttribute('aria-controls'));
    if(target) target.classList.add('active');
  });
});

// ── Project filter
document.querySelectorAll('.filter-btn').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(function(c){
      c.style.display = (f === 'all' || c.dataset.tags.includes(f)) ? 'flex' : 'none';
    });
  });
});

// ── Hide profile placeholder once image loads
var img = document.querySelector('.profile-box img');
var fb  = document.getElementById('profileFallback');
if(img){ img.addEventListener('load', function(){ if(fb) fb.style.display='none'; }); }