const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Framer-like smooth reveal animations (vanilla JS)
const revealTargets = document.querySelectorAll(
  '.hero, .section, .card, .gallery-item, .before-after figure, .cta, .form-wrap'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => io.observe(el));
