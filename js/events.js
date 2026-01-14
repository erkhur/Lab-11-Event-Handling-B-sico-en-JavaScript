import { parseMarkdown } from "./parser.js";
import { countText } from "./utils.js";

export function initEvents() {
  const input = document.getElementById("markdownInput");
  const preview = document.getElementById("preview");
  const counter = document.getElementById("counter");
  const clearBtn = document.getElementById("clearBtn");
  const themeSelect = document.getElementById("themeSelect");

  // 🟢 HU1: Preview en tiempo real
  input.addEventListener("input", () => {
    const text = input.value;
    preview.innerHTML = parseMarkdown(text);

    const { words, characters } = countText(text);
    counter.innerText = `Palabras: ${words} | Caracteres: ${characters}`;
  });

  // 🟢 HU2: Limpiar editor
  clearBtn.addEventListener("click", () => {
    input.value = "";
    preview.innerHTML = "";
    counter.innerText = "Palabras: 0 | Caracteres: 0";
  });

  // 🌟 Logro adicional: selector de tema
  themeSelect.addEventListener("change", () => {
    if (themeSelect.value === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}
