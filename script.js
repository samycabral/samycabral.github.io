/* =====================================================
   PORTFÓLIO SAMYLLA CABRAL
   Menu responsivo: abrir, fechar e atualizar acessibilidade.
===================================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  function closeMenu() {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.innerHTML = '<span aria-hidden="true">☰</span>';
  }

  function toggleMenu() {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
    menuButton.innerHTML = isOpen
      ? '<span aria-hidden="true">×</span>'
      : '<span aria-hidden="true">☰</span>';
  }

  menuButton.addEventListener("click", toggleMenu);

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fecha o menu com a tecla Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  // Se a janela voltar ao desktop, remove o estado do menu móvel.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}
