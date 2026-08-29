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
