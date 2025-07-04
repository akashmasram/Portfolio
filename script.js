// Typed.js Initialization
new Typed("#typing", {
  strings: ["Frontend Developer", "JavaScript Enthusiast", "Full Stack MERN Developer"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Theme Toggle Logic
const themeToggle = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("themeIcon");

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.classList.toggle("fa-moon", !isDark);
  themeIcon.classList.toggle("fa-sun", isDark);
};

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// EmailJS Integration
(function () {
  emailjs.init("QLTEMn8nVbFFeEe2J");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("service_1wf5zfb", "service_1wf5zfb", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Try again!");
      console.error(error);
    });
});

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    const workItems = document.querySelectorAll('#work .work-item');

    workItems.forEach((item) => {
      if (item.getAttribute("data-aos") === "fade-left") {
        item.setAttribute("data-aos", "fade-up");
      }
    });
  }

  AOS.init(); // reinitialize AOS after changes
});