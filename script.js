/* ── MOBILE MENU ── */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

/* ── FAQ ACCORDION ── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 60);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

/* ── STAGGER WHY CARDS ── */
const whyCards = document.querySelectorAll('.why-card.reveal');
whyCards.forEach((card, i) => {
  card.style.transitionDelay = (i * 0.07) + 's';
});
const processSteps = document.querySelectorAll('.process-step.reveal');
processSteps.forEach((step, i) => {
  step.style.transitionDelay = (i * 0.1) + 's';
});

/* ── FORM SUBMIT ── */
function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const biz = document.getElementById('f-biz').value.trim();
  const service = document.getElementById('f-service').value;
  const details = document.getElementById('f-details').value.trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  const msg = `Hi Plumix! 👋\n\n*Name:* ${name}\n*Business:* ${biz || 'N/A'}\n*Service:* ${service || 'Not specified'}\n*Details:* ${details || 'N/A'}`;
  const waUrl = `https://wa.me/923454105434?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

/* ── NAV SCROLL SHADOW ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 24px rgba(0,0,0,0.07)';
  } else {
    nav.style.boxShadow = 'none';
  }
});