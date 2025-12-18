// 1. Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 2. Sticky Navbar Effect (Glassmorphism stays, but shadow increases)
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.8)";
    navbar.style.boxShadow = "none";
  }
});

// 3. Scroll Reveal Animation (Animasi saat scroll ke bawah)
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
// Trigger once on load
revealOnScroll();

// 4. Modal Image Logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const triggers = document.querySelectorAll(".gallery-trigger");
const closeBtn = document.querySelector(".close");

triggers.forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
