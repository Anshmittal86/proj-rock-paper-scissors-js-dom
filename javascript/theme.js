document.addEventListener("DOMContentLoaded", () => {
  const lightModeButton = document.getElementById("light-mode");
  const darkModeButton = document.getElementById("dark-mode");
  const systemModeButton = document.getElementById("system-mode");

  const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
      applySystemPreference();
    }
  };

  const applySystemPreference = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "";
    }
  };

  lightModeButton.addEventListener("click", () => setTheme(""));
  darkModeButton.addEventListener("click", () => setTheme("dark"));
  systemModeButton.addEventListener("click", () => {
    setTheme("system");
    applySystemPreference();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySystemPreference);

  loadTheme();
});
