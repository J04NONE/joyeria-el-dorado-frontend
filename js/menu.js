/*
 * Archivo: menu.js
 * Propósito/Descripción General: Este archivo maneja toda la funcionalidad del menú de navegación
 * de la Joyería El Dorado. Controla el menú móvil (hamburguesa), la gestión de roles de usuario,
 * y el proceso de cerrar sesión.
 * Contiene: Lógica del menú móvil, gestión de roles de usuario, funcionalidad de logout
 * Relacionado con: Todos los archivos HTML del proyecto, header.css, base.css
 * Última Modificación: Diciembre 2024 - Auditoría de comentarios
 */

// --- Función Principal: Inicialización del Menú ---
// Esta función se ejecuta cuando la página termina de cargar y configura
// todo el comportamiento del menú de navegación.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sección: Menú Móvil (Hamburguesa) ---
    // En pantallas pequeñas, el menú se convierte en un botón hamburguesa
    // que se despliega verticalmente cuando se hace clic.
    
    // Buscamos el botón hamburguesa en la página
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    // Buscamos el menú de navegación principal
    const mainNav = document.querySelector('nav'); // Se ajustó el selector a 'nav' para mayor generalidad

    // Verificamos que ambos elementos existan antes de agregar funcionalidad
    if (mobileMenuButton && mainNav) {
        // Cuando se hace clic en el botón hamburguesa
        mobileMenuButton.addEventListener('click', () => {
            // Alternamos la clase 'active' - si está activo lo desactiva, si no está activo lo activa
            mainNav.classList.toggle('active');
        });
    }

    // --- Sección: Gestión de Roles de Usuario ---
    // Esta sección controla qué enlaces de navegación ve cada tipo de usuario
    // (invitado, cliente, vendedor, administrador) basándose en su rol.

    // 1. Obtenemos el rol del usuario desde el almacenamiento local del navegador
    // Si no hay rol guardado, asumimos que es un 'invitado' (usuario no logueado)
    const userRole = localStorage.getItem('userRole') || 'invitado';

    // 2. Limpiamos todas las clases de rol existentes en el body
    // Esto asegura que no haya conflictos entre diferentes roles
    document.body.className = ''; 

    // 3. Aplicamos la clase de rol correcta al body
    // Esto activa las reglas CSS que muestran/ocultan enlaces según el rol
    // Ejemplos: 'role-invitado', 'role-cliente', 'role-vendedor', 'role-admin'
    document.body.classList.add(`role-${userRole}`);
    
    // Mostramos en la consola qué rol tiene el usuario (solo para depuración)
    console.log(`Rol actual: ${userRole}`); // Para depuración

    // --- Sección: Funcionalidad de Cerrar Sesión ---
    // Cuando un usuario hace clic en "Cerrar Sesión", se elimina su rol
    // y se le redirige a la página de login.

    // Buscamos el enlace de "Cerrar Sesión" en la navegación
    const logoutLink = document.querySelector('.nav-logout-link a');
    
    // Verificamos que el enlace exista antes de agregar funcionalidad
    if (logoutLink) {
        // Cuando se hace clic en "Cerrar Sesión"
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault(); // Evitamos que el enlace funcione normalmente
            
            // Eliminamos el rol del usuario del almacenamiento local
            // Esto hace que el usuario vuelva a ser 'invitado'
            localStorage.removeItem('userRole'); // Limpiar el rol
            
            // Redirigimos al usuario a la página de login
            window.location.href = 'login.html'; // Redirigir al login
        });
    }

    // --- Sección: Restricción de Acceso por Rol ---
    // Esta sección verifica que el usuario tenga permisos para acceder a páginas específicas
    // y redirige a usuarios no autorizados a la página apropiada.
    
    // Verificar acceso a páginas de gestión (solo admin y vendedor)
    verificarAccesoGestion();
}); 

/*
 * Función para verificar el acceso a páginas de gestión.
 * Solo administradores y vendedores pueden acceder a estas páginas.
 */
function verificarAccesoGestion() {
    // Obtener la página actual
    const paginaActual = window.location.pathname.split('/').pop();
    
    // Lista de páginas que requieren permisos de administrador o vendedor
    const paginasGestion = [
        'gestion_de_productos.html',
        'actualizar_datos_usuario.html'
    ];
    
    // Verificar si estamos en una página de gestión
    if (paginasGestion.includes(paginaActual)) {
        // Obtener el rol del usuario
        const userRole = localStorage.getItem('userRole') || 'invitado';
        
        // Verificar si el usuario tiene permisos
        if (userRole !== 'admin' && userRole !== 'vendedor') {
            console.log('Usuario sin permisos intentando acceder a:', paginaActual);
            
            // Mostrar mensaje de error
            alert('No tienes permisos para acceder a esta página. Solo administradores y vendedores pueden acceder a las funciones de gestión.');
            
            // Redirigir al dashboard
            window.location.href = 'dashboard.html';
        } else {
            console.log('Usuario autorizado accediendo a:', paginaActual);
        }
    }
} 