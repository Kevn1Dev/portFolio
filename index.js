
// Si no esta completo el gmail y el nombre aparece un msj para rellenar
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity('Por favor, ingresa un correo válido.');
  } else {
    emailInput.setCustomValidity('');
  }
});