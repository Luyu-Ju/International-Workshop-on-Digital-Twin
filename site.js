const current = document.body.dataset.page;

document.querySelectorAll(".nav a").forEach((link) => {
  if (link.dataset.page === current) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const homeHeader = document.querySelector(".home-header");

if (navToggle && homeHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = homeHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
