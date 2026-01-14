import { initEvents } from "./events.js";

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeSelect").value = "dark";
  }

  initEvents();
});
