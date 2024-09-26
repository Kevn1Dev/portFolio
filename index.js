// Obtener elementos del DOM
const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

// Función para mostrar/ocultar el menú desplegable
dropdownButton.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(e) {
  if (!e.target.matches('#dropdown-button')) {
      if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
      }
  }
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