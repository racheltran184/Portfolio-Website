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