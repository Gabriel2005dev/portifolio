const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");
const overlay = document.getElementById("nav-overlay");

// Scroll effect
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


// Mobile menu
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

// Iniciar no ativo
window.addEventListener("load", () => {
  const active = document.querySelector(".nav-link.active");
  if (active) moveIndicator(active);
});

  const track = document.querySelector(".skills-track");
  const group = document.querySelector(".skills-group");
  const clone = group.cloneNode(true);
  track.appendChild(clone);
track.appendChild(clone);



  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);







