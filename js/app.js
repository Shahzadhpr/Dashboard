// Theme Mode
document.addEventListener("DOMContentLoaded", () => {
  const lightBtn = document.querySelector("#lightModeBtn");
  const darkBtn = document.querySelector("#darkModeBtn");

  function setTheme(mode) {
    document.documentElement.setAttribute("data-bs-theme", mode);
    localStorage.setItem("themeMode", mode);

    if (mode === "dark") {
      darkBtn.classList.add("active");
      lightBtn.classList.remove("active");
    } else {
      lightBtn.classList.add("active");
      darkBtn.classList.remove("active");
    }
  }

  lightBtn.addEventListener("click", () => setTheme("light"));
  darkBtn.addEventListener("click", () => setTheme("dark"));

  const savedTheme = localStorage.getItem("themeMode") || "light";
  setTheme(savedTheme);
});