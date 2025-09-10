// Sidebar toggle y animación de secciones
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector(".menu-btn");
  const mainContent = document.getElementById("main-content");
  const secciones = document.querySelectorAll(".seccion");

  // Toggle sidebar
  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("closed");
    if (sidebar.classList.contains("closed")) {
      mainContent.style.marginLeft = "60px";
    } else {
      mainContent.style.marginLeft = "250px";
    }
  });

  // Mostrar sección con animación
  window.mostrarSeccion = function (seccionId) {
    secciones.forEach(s => {
      s.classList.remove("active");
      s.style.display = "none";
    });
    const target = document.getElementById(seccionId);
    if (target) {
      target.style.display = "block";
      setTimeout(() => target.classList.add("active"), 10);
    }
  };

  // Mostrar inicio por defecto
  mostrarSeccion("inicio");
});
