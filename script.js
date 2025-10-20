// Fade-in ao rolar
const fadeElements = document.querySelectorAll(
  ".card, .feature, .camera-box, .resultado, .hero-content, .hero-image"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach((el) => observer.observe(el));

// Alternância de abas
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach((el) => el.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add("active");
}

// Hover com escala nos cards e features
document.querySelectorAll(".card, .feature").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.03)";
    el.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    el.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1)";
    el.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
  });
});

// Botões com animação de clique
document.querySelectorAll(".btn-accent, .btn-outline, .btn-capture").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 300);
  });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check for user's preferred mode in localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === "dark-mode") {
    darkModeToggle.classList.remove("fa-moon");
    darkModeToggle.classList.add("fa-sun");
  } else {
    darkModeToggle.classList.remove("fa-sun");
    darkModeToggle.classList.add("fa-moon");
  }
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
    darkModeToggle.classList.remove("fa-moon");
    darkModeToggle.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light-mode");
    darkModeToggle.classList.remove("fa-sun");
    darkModeToggle.classList.add("fa-moon");
  }
});

