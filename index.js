
document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("header nav a");

  navbarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Obtiene el id de destino desde el atributo href (eliminando el #)
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // Si la sección objetivo existe, realiza el desplazamiento suave
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
      }
    });
  });
});




// Si no esta completo el gmail y el nombre aparece un msj para rellenar
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity('Por favor, ingresa un correo válido.');
  } else {
    emailInput.setCustomValidity('');
  }
});