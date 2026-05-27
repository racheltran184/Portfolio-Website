// ── Project filter
document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    var f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(function(c) {
      var tags = c.dataset.tags || '';
      c.style.display = (f === 'all' || tags.includes(f)) ? 'flex' : 'none';
    });
  });
});

// ── Hide profile placeholder once image loads
var img = document.querySelector('.profile-box img');
var fb  = document.getElementById('profileFallback');
if (img) {
  img.addEventListener('load', function() {
    if (fb) fb.style.display = 'none';
  });
  // Handle case where image is already cached and 'load' already fired
  if (img.complete && fb) fb.style.display = 'none';
}
