// ── Theme toggle (runs immediately, before page renders to avoid flash)
(function() {
  var btn  = document.getElementById('themeToggle');
  var root = document.documentElement;
  var moon = document.getElementById('icon-moon');
  var sun  = document.getElementById('icon-sun');

  // Check saved preference, fallback to system preference
  var saved = localStorage.getItem('theme');
  var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var d = saved ? saved : (sysDark ? 'dark' : 'light');

  function set(v) {
    d = v;
    root.setAttribute('data-theme', v);
    localStorage.setItem('theme', v);
    if (v === 'dark') {
      if (moon) moon.style.display = 'none';
      if (sun)  sun.style.display  = '';
      if (btn)  btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      if (sun)  sun.style.display  = 'none';
      if (moon) moon.style.display = '';
      if (btn)  btn.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  // Apply theme immediately on load
  set(d);

  // Toggle on button click
  if (btn) {
    btn.addEventListener('click', function() {
      set(d === 'dark' ? 'light' : 'dark');
    });
  }
})();
