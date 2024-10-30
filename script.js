document.getElementById('collectiveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const preferences = document.getElementById('preferences').value;
    const availability = document.getElementById('availability').value;

    // Expresiones regulares para validación
    const namePattern = /^[A-Za-zÀ-ÿ\s]+$/;
    const phonePattern = /^(6|7)[0-9]{8}$/;

    // Validación de Nombre
    if (!namePattern.test(name)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    // Validación de Teléfono
    if (!phonePattern.test(phone)) {
        alert("Por favor, introduce un número de móvil español válido de 9 dígitos.");
        return;
    }

    // Validación de Edad
    if (age < 10 || age > 99) {
        alert("La edad debe ser un número de dos dígitos.");
        return;
    }

    // Validación de Correo Electrónico
    if (email === "") {
        alert("El correo electrónico es obligatorio.");
        return;
    }

    // Validación de Preferencias
    if (!preferences) {
        alert("Por favor, selecciona al menos una preferencia de taller.");
        return;
    }

    // Validación de Disponibilidad
    if (!availability) {
        alert("Por favor, selecciona una disponibilidad.");
        return;
    }

    // Si pasa todas las validaciones, se envía el formulario
    alert("¡Gracias por unirte a May Green Collective! Nos pondremos en contacto pronto.");
    window.location.href = "https://instagram.com/maygreencollective";
});
