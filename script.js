// Loader exit
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    setTimeout(() => loader.style.display = 'none', 800);
  }, 1800);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));