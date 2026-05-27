// ── Scroll reveal
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target); // stop watching once visible — better performance
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(function(el) {
  obs.observe(el);
});

// ── Active nav highlight
var sections = document.querySelectorAll('section[id]');
var navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  var cur = '';
  sections.forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 80) cur = s.id;
  });
  navLinks.forEach(function(a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}, { passive: true }); // passive:true tells browser scroll won't be blocked — smoother
