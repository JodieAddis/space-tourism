document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById("hamburger-icon");
  const close = document.getElementById("close-icon");
  const menu = document.getElementById("mobile-navbar");

  if (open) {
    open.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
      menu?.classList.toggle("flex");
      open.classList.toggle("hidden");
    });
  } else {
    console.error("Bouton ou menu introuvable.");
  }

  if (close) {
    close.addEventListener("click", () => {
      menu?.classList.toggle("hidden");
      open?.classList.toggle("hidden");
      open?.classList.toggle("flex");
    });
  }
});
