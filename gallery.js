// IMAGE LIGHTBOX VIEWER
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.lightbox-close');

// Open lightbox
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

// Close on close button
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', e => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

// Close on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});
