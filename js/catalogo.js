document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad de filtros
    const aplicarFiltrosBtn = document.getElementById('apply-filters-btn');
    if (aplicarFiltrosBtn) {
        aplicarFiltrosBtn.addEventListener('click', () => {
            const categoria = document.getElementById('category-filter').value;
            const material = document.getElementById('material-filter').value;
            const precio = document.getElementById('price-filter').value;
            const orden = document.getElementById('sort-filter').value;
            
            console.log('Filtros aplicados:', {
                categoria,
                material,
                precio,
                orden
            });
            
            // Aquí se implementaría la lógica de filtrado
            // Por ahora solo mostramos un mensaje
            alert('Filtros aplicados correctamente. La funcionalidad de filtrado real se implementará más adelante.');
        });
    }
    
    // Funcionalidad de agregar al carrito con muro de login
    const addToCartButtons = document.querySelectorAll('.btn-agregar-carrito, .add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir cualquier acción por defecto del enlace o botón

            const userRole = localStorage.getItem('userRole') || 'invitado'; // Obtener el rol actual

            if (userRole === 'invitado') {
                // Si es un invitado, alertar y redirigir
                alert('Por favor, inicia sesión o crea una cuenta para añadir productos al carrito.');
                window.location.href = 'login.html'; // Redirigir a la página de login
            } else if (userRole === 'cliente') {
                // Lógica para AÑADIR AL CARRITO (Rol Cliente)
                // Debes asegurarte de que el botón o su padre contenga los datos del producto
                const productCard = button.closest('.producto'); // Ajusta según tu estructura HTML
                if (productCard) {
                    const producto = {
                        id: productCard.dataset.id || `prod-${Math.random().toString(36).substr(2, 9)}`, // Asegúrate de que el producto tenga un ID único, quizás en un data-attribute
                        nombre: productCard.querySelector('.producto-titulo').textContent,
                        precio: parseFloat(productCard.querySelector('.producto-precio').textContent.replace('$', '').replace('.', '').replace(',', '.')), // Limpiar el precio y convertir a número
                        imagen: productCard.querySelector('img').src,
                        cantidad: 1 // Por defecto, se añade 1 unidad
                    };
                    agregarAlCarrito(producto); // Llamada a la función global de carrito
                    
                    button.textContent = 'Añadido ✔';
                    button.classList.add('added');
                    setTimeout(() => {
                        button.textContent = 'Agregar al Carrito';
                        button.classList.remove('added');
                    }, 2000);
                } else {
                    console.error("No se pudo encontrar la información del producto para añadir al carrito.");
                }
            } else {
                // Si el rol es vendedor o admin, quizás un mensaje diferente o simplemente no se permite
                alert('Solo los clientes pueden añadir productos al carrito. Usa "Procesar Venta" para crear pedidos.');
            }
        });
    });
}); 