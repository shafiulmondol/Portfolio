const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Mobile navigation menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Apply dark or light theme
function applyTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light-mode", isLight);

  if (themeIcon) {
    themeIcon.textContent = isLight ? "☾" : "☀";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode",
    );

    themeToggle.title = isLight
      ? "Switch to dark mode"
      : "Switch to light mode";
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("shafiul-portfolio-theme") || "dark";

applyTheme(savedTheme);

// Switch between dark and light modes
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode")
      ? "dark"
      : "light";

    localStorage.setItem("shafiul-portfolio-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

// Automatically update copyright year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
