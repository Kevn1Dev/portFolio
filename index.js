// Obtener elementos del DOM
const spanishOption = document.getElementById('spanish-option');
const englishOption = document.getElementById('english-option');
const greeting = document.getElementById('greeting');
const description = document.getElementById('description');

// Función para cambiar al idioma español
spanishOption.addEventListener('click', function() {
    greeting.textContent = 'Hola, bienvenido a mi portafolio';
    description.textContent = 'Soy Diograzia Kevin Nicolás, un desarrollador Back-End. ¡Explora mis proyectos!';
    toggleActiveLanguage(spanishOption, englishOption);
});

// Función para cambiar al idioma inglés
englishOption.addEventListener('click', function() {
    greeting.textContent = 'Hello, welcome to my portfolio';
    description.textContent = 'I am Diograzia Kevin Nicolás, a Back-End developer. Explore my projects!';
    toggleActiveLanguage(englishOption, spanishOption);
});

// Función para alternar la clase activa en los botones de idioma
function toggleActiveLanguage(activeOption, inactiveOption) {
    activeOption.classList.add('active');
    inactiveOption.classList.remove('active');
}

// Si no esta completo el gmail y el nombre aparece un msj para rellenar
const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.setCustomValidity('Por favor, ingresa un correo válido.');
  } else {
    emailInput.setCustomValidity('');
  }
});