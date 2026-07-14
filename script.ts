const menuButton = document.querySelector<HTMLButtonElement>("#menu-toggle");
const navigation = document.querySelector<HTMLElement>("#nav");
const themeButton = document.querySelector<HTMLButtonElement>("#theme-toggle");
const printButton = document.querySelector<HTMLButtonElement>("#print-cv");
const yearElement = document.querySelector<HTMLElement>("#year");

menuButton?.addEventListener("click", () => {
  const open = navigation?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll<HTMLAnchorElement>("nav a").forEach((link) =>
  link.addEventListener("click", () => navigation?.classList.remove("open"))
);

const savedTheme = localStorage.getItem("cv-theme");
if (savedTheme === "dark") document.body.classList.add("dark");

themeButton?.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  localStorage.setItem("cv-theme", dark ? "dark" : "light");
});

printButton?.addEventListener("click", () => window.print());

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
