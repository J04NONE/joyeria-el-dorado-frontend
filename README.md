# Joyería El Dorado - Desarrollo Frontend



## 1. Introducción al Proyecto



Este documento presenta el desarrollo frontend del proyecto **"Joyería El Dorado"**, una plataforma web diseñada para la comercialización de joyas. Este módulo frontend constituye la interfaz de usuario principal del sistema, permitiendo a los usuarios navegar por el catálogo de productos, interactuar con los elementos de la tienda y, en el caso de los clientes registrados, gestionar sus pedidos y realizar transacciones de compra. El diseño se ha centrado en proporcionar una experiencia de usuario intuitiva y visualmente atractiva.



---



## 2. Tecnologías y Herramientas Utilizadas



Para la construcción de este frontend, se han empleado las siguientes tecnologías y herramientas, seleccionadas por su robustez, flexibilidad y alineación con las mejores prácticas de desarrollo web modernas:



* **HTML5:** Se utilizó como el lenguaje fundamental para la estructuración semántica del contenido de todas las páginas web. Su elección garantiza la creación de una base sólida y accesible para la interfaz de usuario.

* **CSS3:** Empleado para la definición de los estilos visuales y la presentación de la aplicación. Se hizo uso extensivo de módulos clave como `Flexbox` y `CSS Grid` para la implementación de layouts responsivos, asegurando una visualización óptima en diversos dispositivos (escritorio, tabletas, móviles). La aplicación de variables CSS (`Custom Properties`) facilitó la gestión centralizada de la paleta de colores de la marca y las constantes de espaciado, mejorando la consistencia y mantenibilidad del diseño.

* **JavaScript (ES6+):** Constituye el componente lógico que dota de interactividad a la aplicación. Se utilizó para la manipulación dinámica del DOM, la gestión del flujo de autenticación, la implementación de la lógica del carrito de compras, la validación de formularios y la adaptación de la interfaz según el rol del usuario. Su versión ES6+ permite el uso de características modernas que mejoran la eficiencia y claridad del código.

* **`localStorage`:** Se empleó para la persistencia de datos del lado del cliente, simulando la gestión de la sesión de usuario y el almacenamiento del estado del carrito de compras. Cabe destacar que esta es una implementación a nivel de frontend, no una solución de persistencia de datos a nivel de servidor.

* **Iconos SVG (Scalable Vector Graphics):** Integrados para la representación gráfica de iconos (ej., carrito, búsqueda). Los SVG garantizan una escalabilidad sin pérdida de calidad y una apariencia nítida en cualquier resolución de pantalla, contribuyendo a una estética profesional.



---



## 3. Visión General y Funcionalidades Implementadas



El proyecto frontend abarca las siguientes funcionalidades clave, estructuradas para ofrecer un flujo de usuario coherente y adaptativo:



### 3.1. Gestión de Autenticación y Registro



* **Login Universal (`login.html`):** Se implementó un formulario de inicio de sesión unificado y profesional. Para propósitos demostrativos, la asignación de roles de usuario (Administrador, Vendedor, Cliente) se simula mediante la introducción de correos electrónicos predefinidos (`admin@joyeria.com`, `vendedor@joyeria.com`, `cliente@joyeria.com`).

* **Flujo de Recuperación de Contraseña:** Se desarrolló un flujo simulado en múltiples pasos para la recuperación de contraseñas, que incluye la solicitud de correo, validación de código y establecimiento de una nueva contraseña, con mensajes de feedback claros.

* **Registro de Clientes (`registro_de_cliente.html`):** Se diseñó una interfaz de registro de alta calidad, presentando un formulario con estructura en dos columnas, validación de campos y un checkbox para la aceptación de términos y condiciones.

* **Diseño Enfocado:** Ambas páginas de autenticación (`login.html` y `registro_de_cliente.html`) presentan un diseño minimalista y enfocado, eliminando la navegación principal para minimizar distracciones y mejorar la tasa de conversión de la tarea principal del usuario.

* **Mensajes Dinámicos:** La implementación incluye la visualización de mensajes de error específicos (ej., "Usuario no existe", "Contraseña incorrecta") y mensajes de éxito, que aparecen y desaparecen dinámicamente según la interacción del usuario.



### 3.2. Navegación y Visualización de Productos



* **Navegación General:** El sistema cuenta con un header global que permite la navegación a las secciones principales del sitio, adaptándose dinámicamente según el rol del usuario autenticado o si es un invitado.

* **Catálogo de Productos (`lista_de_productos.html`):** Presenta una interfaz para explorar el surtido de joyas, permitiendo la visualización de una colección diversa de productos.

* **Página de Detalle de Producto (`detalle_de_producto.html`):** Ofrece una vista ampliada y detallada de cada producto seleccionado, incluyendo imágenes, descripciones y precios.

* **Acceso Restringido (Muro de Login):** Las acciones que requieren autenticación, como añadir productos al carrito, redirigen al usuario invitado a la página de login con un mensaje explicativo, fomentando el registro o inicio de sesión.



### 3.3. Carrito de Compras



* **Indicador Visual:** Un icono de carrito con un contador numérico se integra en el header, visible exclusivamente para el rol de "Cliente", reflejando el número de ítems en el carrito.

* **Gestión del Carrito (`carrito.html`):** Una página dedicada permite al cliente revisar los productos seleccionados, modificar cantidades, eliminar ítems y visualizar el subtotal/total de su compra.

* **Lógica de Persistencia:** El estado del carrito se gestiona y persiste mediante `localStorage`, simulando la funcionalidad de un carrito en una aplicación real.

* **Control de Acceso:** La funcionalidad completa del carrito está restringida al rol "Cliente".



### 3.4. Gestión Administrativa y de Ventas



* **Dashboard Adaptativo (`dashboard.html`):** La página principal se adapta dinámicamente al rol del usuario. Los clientes visualizan un carrusel de productos destacados, mientras que los administradores y vendedores acceden a secciones relevantes para sus tareas (ej., estadísticas de ventas simuladas).

* **Gestión de Usuarios (`administracion_de_usuarios.html` y `actualizar_datos_usuario.html`):**

    * `administracion_de_usuarios.html` presenta una tabla para visualizar y buscar usuarios existentes.

    * Al seleccionar un usuario para edición, se redirige a `actualizar_datos_usuario.html`, una nueva página con un formulario dedicado a la actualización de datos específicos del cliente. Esta funcionalidad está protegida y es accesible solo para el rol "Administrador".

* **Gestión de Productos (`gestion_de_productos.html`):** Esta página unificada permite a los administradores y vendedores:

    * Buscar productos existentes por referencia.

    * Modificar la cantidad en stock de un producto específico.

    * Eliminar productos (con un flujo de confirmación y mensajes sobre ventas asociadas).

    * Registrar nuevos productos (heredando la funcionalidad inicial de registro).

    * Esta funcionalidad está accesible para los roles "Administrador" y "Vendedor".

* **Historial de Órdenes (`historial_ordenes.html`):** Se ha establecido la estructura básica para una página donde los clientes pueden visualizar su historial de compras.



---



## 4. Estructura del Proyecto



El proyecto está organizado en una estructura de directorios modular y coherente, facilitando la navegación, el mantenimiento y la escalabilidad del código.



```

frontend/

├── html-pages/                 # Contiene todos los archivos HTML de las diferentes páginas de la aplicación.

│   ├── dashboard.html          # Página principal del usuario, con contenido que se adapta a su rol.

│   ├── login.html              # Interfaz de inicio de sesión, diseñada para ser universal y profesional.

│   ├── registro_de_cliente.html # Formulario para el registro de nuevas cuentas de clientes.

│   ├── lista_de_productos.html # Página del catálogo, donde se exhiben todas las joyas disponibles.

│   ├── detalle_de_producto.html # Muestra la información detallada de una joya específica.

│   ├── carrito.html            # Página dedicada al cliente para revisar y gestionar los productos seleccionados para compra.

│   ├── historial_ordenes.html  # Interfaz donde los clientes pueden consultar su historial de pedidos.

│   ├── administracion_de_usuarios.html # (Para Administradores) Página para visualizar la lista de usuarios.

│   ├── actualizar_datos_usuario.html # (Para Administradores) Formulario para editar los datos de un usuario existente.

│   └── gestion_de_productos.html # (Para Administradores y Vendedores) Interfaz unificada para registrar, buscar, actualizar y eliminar productos.

├── css/                        # Almacena todas las hojas de estilo CSS del proyecto.

│   ├── main.css                # Hoja de estilos principal que contiene reglas globales y de reinicio.

│   ├── base/                   # Estilos fundamentales que definen la base visual.

│   │   ├── typography.css      # Reglas para fuentes, tamaños de texto y estilos de tipografía.

│   │   ├── variables.css       # Definición de variables CSS para colores de marca y espaciados.

│   │   └── reset.css           # Reseteo de estilos predeterminados del navegador para consistencia.

│   ├── layout/                 # Estilos para la estructura global de las páginas.

│   │   ├── header.css          # Estilos para el encabezado de navegación de la aplicación.

│   │   ├── footer.css          # Estilos para el pie de página de la aplicación.

│   │   └── grid.css            # Clases para implementar diseños de cuadrícula (grid) y flexbox.

│   ├── components/             # Estilos reutilizables para componentes UI específicos.

│   │   ├── buttons.css         # Definición de estilos para todos los tipos de botones.

│   │   ├── forms.css           # Estilos para elementos de formulario como inputs y labels.

│   │   ├── product-card.css    # Estilos para la presentación visual de las tarjetas de producto.

│   ├── pages/                  # Estilos específicos para cada página individual del proyecto.

│   │   ├── dashboard.css       # Estilos particulares para la página del dashboard.

│   │   ├── login.css           # Estilos para las páginas de login y registro de usuario.

│   │   ├── catalogo.css        # Estilos específicos para la página de listado de productos.

│   │   ├── detalle_producto.css # Estilos para la página de detalle de un producto específico.

│   │   ├── carrito.css         # Estilos para la página del carrito de compras.

│   │   ├── administracion_de_usuarios.css # Estilos para la página de administración de usuarios.

│   └── gestion_de_productos.css # Estilos para la página consolidada de gestión de productos.

├── js/                         # Contiene todos los archivos JavaScript que proporcionan interactividad.

│   ├── menu.js                 # Controla la navegación del menú y gestiona las clases de rol en el <body>.

│   ├── login.js                # Lógica para el formulario de inicio de sesión, incluyendo la simulación de roles y mensajes.

│   ├── catalogo.js             # Implementa funcionalidades interactivas en la página del catálogo (ej., añadir al carrito).

│   ├── detalle_producto.js     # Lógica específica para la página de detalle de un producto.

│   ├── carrito.js              # Módulo central que gestiona la lógica del carrito de compras (añadir, eliminar, actualizar).

│   ├── pagina_carrito.js       # Controla la renderización y la interactividad de la página carrito.html.

│   ├── actualizar_datos_usuario.js # Lógica para la búsqueda y actualización de datos de usuarios por el administrador.

│   └── gestion_de_productos.js # Lógica para la búsqueda, modificación de cantidad, registro y eliminación de productos.

├── assets/                     # Almacena todos los recursos multimedia del proyecto.

│   ├── logo.jpg                # Logo principal de la Joyería El Dorado.

│   ├── hero-banner.png         # Imagen de fondo para la sección principal de la página.

│   └── (otras imágenes de productos, iconos, etc.) # Otros recursos gráficos utilizados en la aplicación.

└── CREDENCIALES_PRUEBA.md      # Documento que detalla las credenciales de prueba y la lógica de login simulada.

```



---



## 5. Conclusiones y Lecciones Aprendidas



La construcción de este frontend ha representado un proceso de aprendizaje significativo. Las principales conclusiones y lecciones aprendidas son las siguientes:



* **Dominio de JavaScript para la Interactividad:** Se reafirmó la importancia crítica de JavaScript para dotar de dinamismo y reactividad a la interfaz de usuario. Los desafíos asociados al manejo de mensajes de feedback (errores, éxitos) y a la persistencia de datos del lado del cliente mediante `localStorage` (para el carrito y la simulación de sesión) fueron superados, destacando la versatilidad de este lenguaje para crear experiencias de usuario complejas y fluidas.

* **Gestión de Vistas por Roles: Un Enfoque Eficiente:** Una lección fundamental fue la implementación de un sistema de gestión de vistas por roles en el frontend. Se evitó la práctica ineficiente y no escalable de duplicar páginas HTML por cada rol. En su lugar, se adoptó una estrategia donde JavaScript asigna dinámicamente una clase (`role-admin`, `role-cliente`, etc.) al elemento `<body>` del documento tras la autenticación. Posteriormente, las reglas CSS utilizan estas clases para controlar la visibilidad de elementos específicos de la interfaz. Este enfoque garantiza una experiencia de usuario adaptada y es altamente eficiente en términos de mantenibilidad y escalabilidad del código.

* **Importancia de la Coherencia y la Calidad Técnica:** Se evidenció que la atención a los detalles técnicos, como la correcta codificación de caracteres (`UTF-8`) para la visualización de acentos y caracteres especiales, y el centrado preciso de los elementos en la interfaz de usuario, son cruciales para la percepción profesional del producto final. Asimismo, la disciplina en la organización del código (separación de responsabilidades) y la exhaustiva documentación interna (comentarios detallados) resultan vitales para la futura colaboración y mantenimiento del proyecto.



En síntesis, este proyecto frontend ha sido diseñado y desarrollado adhiriéndose a las mejores prácticas de la industria, resultando en una base sólida, profesional y visualmente impactante para la Joyería El Dorado.



---



## 6. Instrucciones de Despliegue y Visualización Local



Para visualizar y probar el frontend de Joyería El Dorado en un entorno local, siga los siguientes pasos:



1. **Descarga o clona el repositorio** en tu equipo.

2. **Ubícate en la carpeta `frontend/`** del proyecto.

3. **Opciones para visualizar:**

   - **Abrir directamente los archivos HTML:** Puedes abrir cualquier archivo `.html` con doble clic o desde tu navegador preferido. Sin embargo, para funcionalidades que requieren rutas relativas o simulación de login, se recomienda usar un servidor local.

   - **Usar un servidor local simple:**

     - Si tienes Python instalado, puedes ejecutar:

       - Para Python 3:

         ```bash

         python -m http.server 8000

         ```

       - Para Python 2:

         ```bash

         python -m SimpleHTTPServer 8000

         ```

     - O puedes usar extensiones como "Live Server" en VS Code.

   - Accede a `http://localhost:8000` en tu navegador y navega por las páginas del frontend.

4. **Credenciales de prueba:** Consulta el archivo `CREDENCIALES_PRUEBA.md` para conocer los correos y contraseñas de ejemplo para cada tipo de usuario.



---