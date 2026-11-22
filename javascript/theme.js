document.addEventListener("DOMContentLoaded", () => {
  const lightModeButton = document.getElementById("light-mode");
  const darkModeButton = document.getElementById("dark-mode");
  const systemModeButton = document.getElementById("system-mode");

  const setTheme = (theme) => {
    if (theme === "system") {
      applySystemPreference();
    } else {
      document.documentElement.className = theme;
    }
    localStorage.setItem("theme", theme);
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }
  };

  const applySystemPreference = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    document.documentElement.className = prefersDarkScheme.matches ? "dark" : "";
  };

  lightModeButton.addEventListener("click", () => setTheme(""));
  darkModeButton.addEventListener("click", () => setTheme("dark"));
  systemModeButton.addEventListener("click", () => setTheme("system"));

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme") === "system") {
      applySystemPreference();
    }
  });

  loadTheme();
});
