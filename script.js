// Animation beim Scrollen (fadeSlideIn)
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

// Hermanos Löschen (funktioniert nur auf hermanos.html)
function deleteMember(button) {
  const memberBox = button.closest('.member-box');
  if (memberBox) {
    memberBox.remove();
  }
}

// Beispiel: Wenn du Hermanos über JS nachladen möchtest, kannst du hier erweitern
