// ================= LIGHTBOX FOR PROJECT IMAGES =================

// Select elements
const images = document.querySelectorAll(".project-gallery img");

// Create lightbox elements
const lightbox = document.createElement("div");
const lightboxImg = document.createElement("img");
const closeBtn = document.createElement("span");

// Add classes
lightbox.className = "lightbox";
lightboxImg.className = "lightbox-img";
closeBtn.className = "lightbox-close";

// Close button symbol
closeBtn.innerHTML = "&times;";

// Append elements
lightbox.appendChild(closeBtn);
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Open lightbox
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

// Close functions
function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
  document.body.style.overflow = "auto";
}

// Close on button click
closeBtn.addEventListener("click", closeLightbox);

// Close on background click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
