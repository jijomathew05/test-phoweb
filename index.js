// You can add interactivity here later.
// For example: opening a full-screen preview when clicking on a photo.

document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', () => {
      alert(`You clicked on: ${img.alt}`);
    });
  });
  