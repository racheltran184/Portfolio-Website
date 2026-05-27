// ── Experience / Education tabs
document.querySelectorAll('.exp-tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Deactivate all tabs and panels
    document.querySelectorAll('.exp-tab-btn').forEach(function(b) {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.exp-tab-panel').forEach(function(p) {
      p.classList.remove('active');
    });

    // Activate clicked tab and its panel
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    var target = document.getElementById(btn.getAttribute('aria-controls'));
    if (target) target.classList.add('active');
  });
});

// ── Set first tab active on load (in case no tab has active class in HTML)
var firstBtn = document.querySelector('.exp-tab-btn');
var firstPanel = firstBtn && document.getElementById(firstBtn.getAttribute('aria-controls'));
if (firstBtn && !document.querySelector('.exp-tab-btn.active')) {
  firstBtn.classList.add('active');
  firstBtn.setAttribute('aria-selected', 'true');
  if (firstPanel) firstPanel.classList.add('active');
}
