// ===== Mobile nav toggle =====
const burger = document.querySelector('.burger');
const navList = document.querySelector('nav ul');
if(burger && navList){
  burger.addEventListener('click', ()=>{
    navList.classList.toggle('open');
    burger.textContent = navList.classList.contains('open') ? '✕' : '☰';
  });
  navList.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      navList.classList.remove('open');
      burger.textContent = '☰';
    });
  });
}

// ===== Header background on scroll =====
const header = document.querySelector('header');
if(header){
  window.addEventListener('scroll', ()=>{
    header.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// ===== Active nav link based on current page =====
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[href]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();

// ===== Scroll-reveal for sections =====
document.querySelectorAll(
  '.section-head, .model-card, .feature-cell, .faq-item, .contact-info, form, .page-hero, .compare-wrap'
).forEach(el => el.classList.add('reveal'));

document.querySelectorAll('.features-grid, .model-grid').forEach(el => el.classList.add('reveal-stagger'));

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// ===== Animated stat counters (hero) =====
function animateCount(el, target, suffix, prefix, decimals) {
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = (prefix || '') + value.toFixed(decimals || 0) + (suffix || '');
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = (prefix || '') + target.toFixed(decimals || 0) + (suffix || '');
  }
  requestAnimationFrame(tick);
}

const heroStats = document.querySelectorAll('.hero-stats > div');
if (heroStats.length) {
  const statConfig = [
    { target: 151, suffix: ' km', decimals: 0 },
    { target: 0.18, prefix: '₹', decimals: 2 },
    { target: 3, decimals: 0 }
  ];
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroStats.forEach((stat, i) => {
          const numEl = stat.querySelector('div');
          if (numEl && statConfig[i]) {
            const cfg = statConfig[i];
            animateCount(numEl, cfg.target, cfg.suffix, cfg.prefix, cfg.decimals);
          }
        });
        statIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  statIO.observe(heroStats[0].closest('.hero-stats'));
}

// ===== Range ring animation on scroll into view =====
document.querySelectorAll('.model-card').forEach(card=>{
  const circle = card.querySelector('.range-ring .fg');
  if(!circle) return;
  const target = circle.getAttribute('stroke-dashoffset');
  circle.style.strokeDashoffset = 214;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>{ circle.style.strokeDashoffset = target; }, 150);
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.4});
  io.observe(card);
});

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach(item=>{
  item.addEventListener('click', ()=>{
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

// ===== Contact form (front-end only, no backend) =====
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMsg').style.display = 'block';
    this.reset();
  });
}
