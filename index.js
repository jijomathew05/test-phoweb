// Update footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Simple click interaction on gallery images
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked: ${img.alt}`);
  });
});

// Contact form submission (dummy)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
});
