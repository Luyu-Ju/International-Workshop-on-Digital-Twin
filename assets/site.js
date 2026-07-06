const current = document.body.dataset.page;

document.querySelectorAll(".nav a").forEach((link) => {
  if (link.dataset.page === current) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
