document.addEventListener("DOMContentLoaded", () => {
  const printButton = document.querySelector("#print-cv");
  const yearElement = document.querySelector("#year");

  // Botón de imprimir
  printButton?.addEventListener("click", () => window.print());
  printButton?.addEventListener("touchstart", (e) => {
    e.preventDefault();
    window.print();
  });

  // Año dinámico
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  // Selector de idioma
  const langEs = document.querySelector("#lang-es");
  const langEn = document.querySelector("#lang-en");
  if (langEs && langEn) {
    const current = window.location.pathname.split("/").pop() || "index.html";
    if (current.includes("-en.") || current === "cv-mauricio-sustentabilidad-en.html") {
      langEn.classList.add("active");
    } else {
      langEs.classList.add("active");
    }
  }
});
