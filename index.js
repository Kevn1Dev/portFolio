document.getElementById('spanish').addEventListener('click', function() {
    localStorage.setItem('language', 'spanish');
});
document.getElementById('english').addEventListener('click', function() {
    localStorage.setItem('language', 'english');
});

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('language') || 'spanish';
    // Cambia el contenido al cargar según el idioma
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity('Por favor, ingresa un correo válido.');
  } else {
    emailInput.setCustomValidity('');
  }
});