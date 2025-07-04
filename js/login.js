/*
 * Archivo: login.js
 * Propósito/Descripción General: Este archivo maneja el proceso de inicio de sesión en la Joyería El Dorado.
 * Implementa la lógica de "Credenciales Mágicas" para simular diferentes roles de usuario,
 * validación de formularios con mensajes dinámicos, y el flujo de recuperación de contraseña.
 * Contiene: Validación de formulario de login, lógica de asignación de roles, mensajes de error/éxito,
 * flujo de recuperación de contraseña, redirección post-login
 * Relacionado con: login.html, dashboard.html, menu.js
 * Última Modificación: Diciembre 2024 - Implementación de Credenciales Mágicas
 */

// --- Función Principal: Inicialización del Formulario de Login ---
// Esta función se ejecuta cuando la página de login termina de cargar y configura
// el comportamiento del formulario de inicio de sesión con validación dinámica.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elementos del DOM para el formulario de login ---
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailErrorSpan = document.getElementById('email-error');
    const passwordErrorSpan = document.getElementById('password-error');
    const loginSuccessMessage = document.getElementById('login-success-message');

    // --- Función para limpiar todos los mensajes de feedback ---
    // Esta función elimina todos los mensajes de error y éxito para empezar limpio
    function clearMessages() {
        if (emailErrorSpan) emailErrorSpan.textContent = '';
        if (passwordErrorSpan) passwordErrorSpan.textContent = '';
        if (loginSuccessMessage) {
            loginSuccessMessage.textContent = '';
            loginSuccessMessage.style.color = ''; // Limpiar color si se aplicó
        }
    }

    // --- Configuración del Event Listener del Formulario de Login ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Detenemos el envío del formulario para manejarlo con JS
            clearMessages(); // Limpiamos mensajes anteriores

            // --- Obtención de Datos del Formulario ---
            const email = emailInput.value.toLowerCase();
            const password = passwordInput.value;

            // --- 1. Validación de Campos Vacíos ---
            // Verificamos que el usuario haya completado todos los campos requeridos
            if (!email) {
                if (emailErrorSpan) emailErrorSpan.textContent = 'Por favor, ingresa tu correo electrónico.';
                return; // Detenemos la ejecución si el correo está vacío
            }
            if (!password) {
                if (passwordErrorSpan) passwordErrorSpan.textContent = 'Por favor, ingresa tu contraseña.';
                return; // Detenemos la ejecución si la contraseña está vacía
            }

            // --- Variables para el Resultado del Login ---
            let userRole = 'invitado'; // Por defecto, si no se valida, es invitado
            let loginValid = false; // Bandera para saber si el login fue exitoso

            // --- 2. Lógica de Credenciales Mágicas (Simulación de Backend) ---
            // La contraseña para todos los roles válidos es 'password123'
            const VALID_PASSWORD = 'password123';

            // --- Validación de Credenciales por Rol ---
            // Verificamos cada correo predefinido y su contraseña correspondiente
            
            if (email === 'admin@joyeria.com') {
                if (password === VALID_PASSWORD) {
                    userRole = 'admin';
                    loginValid = true;
                } else {
                    if (passwordErrorSpan) passwordErrorSpan.textContent = 'Contraseña incorrecta.';
                }
            } else if (email === 'vendedor@joyeria.com') {
                if (password === VALID_PASSWORD) {
                    userRole = 'vendedor';
                    loginValid = true;
                } else {
                    if (passwordErrorSpan) passwordErrorSpan.textContent = 'Contraseña incorrecta.';
                }
            } else if (email === 'cliente@joyeria.com') {
                if (password === VALID_PASSWORD) {
                    userRole = 'cliente';
                    loginValid = true;
                } else {
                    if (passwordErrorSpan) passwordErrorSpan.textContent = 'Contraseña incorrecta.';
                }
            } else {
                // Si el correo no es ninguno de los predefinidos
                if (emailErrorSpan) emailErrorSpan.textContent = 'El usuario no existe.';
            }

            // --- 3. Resultado del Login y Redirección ---
            if (loginValid) {
                // --- Almacenamiento del Rol del Usuario ---
                localStorage.setItem('userRole', userRole); // Guardamos el rol en el navegador
                
                // --- Mensaje de Éxito ---
                if (loginSuccessMessage) {
                    loginSuccessMessage.textContent = `Inicio de sesión exitoso como ${userRole}. Redirigiendo...`;
                    loginSuccessMessage.style.color = '#28a745'; // Color verde para éxito
                }
                
                // --- Redirección con Retardo ---
                // Esperamos un momento para que el usuario vea el mensaje y luego redirigimos
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000); // 1 segundo
            }
        });
    }

    // --- 4. Flujo de Recuperación de Contraseña ---
    // Elementos del flujo de restablecimiento de contraseña
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const loginFormElement = document.getElementById('login-form'); // El formulario real de login
    const resetPasswordStep1 = document.getElementById('reset-password-step1');
    const resetPasswordStep2 = document.getElementById('reset-password-step2');
    const resetPasswordStep3 = document.getElementById('reset-password-step3');

    const recoverPasswordBtn = document.getElementById('recover-password-btn');
    const validateCodeBtn = document.getElementById('validate-code-btn');
    const resetPasswordFinalBtn = document.getElementById('reset-password-final-btn');

    // Botones "Volver al inicio de sesión"
    const backToLoginLinks = document.querySelectorAll('[id^="back-to-login-link-"]');

    // --- Función para mostrar solo un paso del flujo de reset ---
    // Esta función controla qué formulario se muestra y cuál se oculta
    function showResetStep(stepToShow) {
        loginFormElement.style.display = 'none';
        if (resetPasswordStep1) resetPasswordStep1.style.display = 'none';
        if (resetPasswordStep2) resetPasswordStep2.style.display = 'none';
        if (resetPasswordStep3) resetPasswordStep3.style.display = 'none';

        if (stepToShow === 'login') {
            loginFormElement.style.display = 'block';
            clearMessages(); // Limpiar mensajes al volver al login
        } else if (stepToShow === 1 && resetPasswordStep1) {
            resetPasswordStep1.style.display = 'block';
        } else if (stepToShow === 2 && resetPasswordStep2) {
            resetPasswordStep2.style.display = 'block';
        } else if (stepToShow === 3 && resetPasswordStep3) {
            resetPasswordStep3.style.display = 'block';
        }
    }

    // --- Event Listener para el enlace "¿Olvidaste tu contraseña?" ---
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            showResetStep(1); // Muestra el primer paso del restablecimiento
        });
    }

    // --- Lógica para el botón "Recuperar Contraseña" (Paso 1) ---
    if (recoverPasswordBtn) {
        recoverPasswordBtn.addEventListener('click', () => {
            const resetEmail = document.getElementById('reset-email').value;
            const resetEmailError = document.getElementById('reset-email-error');
            resetEmailError.textContent = ''; // Limpiar error previo

            if (resetEmail && resetEmail.includes('@') && resetEmail.includes('.')) {
                alert(`Simulando envío de código a ${resetEmail}.`);
                showResetStep(2); // Avanza al paso del código
            } else {
                resetEmailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
            }
        });
    }

    // --- Lógica para el botón "Validar Código" (Paso 2) ---
    if (validateCodeBtn) {
        validateCodeBtn.addEventListener('click', () => {
            const confirmationCode = document.getElementById('confirmation-code').value;
            const codeError = document.getElementById('code-error');
            codeError.textContent = ''; // Limpiar error previo

            // Simulación de validación de código
            if (confirmationCode === '123456') { // Código mágico de prueba
                alert('Código validado con éxito.');
                showResetStep(3); // Avanza al paso de nueva contraseña
            } else {
                codeError.textContent = 'Código incorrecto. Intenta de nuevo.';
            }
        });
    }

    // --- Lógica para el botón "Restablecer Contraseña" (Paso 3) ---
    if (resetPasswordFinalBtn) {
        resetPasswordFinalBtn.addEventListener('click', () => {
            const newPassword = document.getElementById('new-password').value;
            const confirmNewPassword = document.getElementById('confirm-new-password').value;
            const newPasswordError = document.getElementById('new-password-error');
            const confirmPasswordError = document.getElementById('confirm-password-error');

            newPasswordError.textContent = '';
            confirmPasswordError.textContent = '';

            if (newPassword.length < 8) {
                newPasswordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
                return;
            }
            if (newPassword !== confirmNewPassword) {
                confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
                return;
            }

            alert('¡Contraseña restablecida con éxito! Serás redirigido al login.');
            showResetStep('login'); // Vuelve a la página de login
            // Opcional: limpiar los campos de contraseña
            document.getElementById('new-password').value = '';
            document.getElementById('confirm-new-password').value = '';
        });
    }

    // --- Event Listeners para los enlaces "Volver al inicio de sesión" ---
    backToLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showResetStep('login');
        });
    });
});
