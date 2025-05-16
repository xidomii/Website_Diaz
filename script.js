// Animationen beim Scrollen
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});

// Löschen von Mitgliedern aus der Liste
document.addEventListener('click', event => {
  if (event.target.classList.contains('delete-button')) {
    const memberCard = event.target.closest('.member-card');
    if (memberCard) {
      memberCard.remove();
    }
  }
});
