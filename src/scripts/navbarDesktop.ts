//Apparition de la ligne blanche quand la page est sélectionnée
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  const linkNav = document.querySelectorAll(".nav-link-desktop");

  linkNav.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
