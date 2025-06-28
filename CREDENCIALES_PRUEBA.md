# Credenciales de Prueba — Joyería El Dorado

Este documento describe el funcionamiento y las credenciales válidas para el sistema de Login Universal de la Joyería El Dorado. Aquí se explica cómo probar los diferentes roles y qué mensajes de error esperar según la lógica actual implementada en el frontend.

---

## ¿Cómo funciona el Login Universal?

-   El sistema permite simular el acceso de **administrador**, **vendedor** y **cliente** usando un único formulario de login.
-   El **rol** se asigna automáticamente según el correo electrónico ingresado.
-   La **contraseña** es la misma para todos los roles de prueba (`password123`).
-   Si el correo o la contraseña no coinciden con los valores definidos, se muestran mensajes de error claros.

---

## Tabla de Credenciales de Prueba

| Rol           | Correo electrónico        | Contraseña   | Resultado esperado                |
|---------------|---------------------------|--------------|-----------------------------------|
| Administrador | `admin@joyeria.com`       | `password123`| Acceso como administrador         |
| Vendedor      | `vendedor@joyeria.com`    | `password123`| Acceso como vendedor              |
| Cliente       | `cliente@joyeria.com`     | `password123`| Acceso como cliente               |
| Otro correo   | `cualquier_otro@ejemplo.com` | `cualquier`  | "El usuario no existe"            |
| Cualquier rol | correo válido             | incorrecta   | "Contraseña incorrecta"           |

---

## Detalles de la Lógica de Login

-   **Correo electrónico:**
    -   Si es `admin@joyeria.com`, el usuario será **administrador**.
    -   Si es `vendedor@joyeria.com`, el usuario será **vendedor**.
    -   Si es `cliente@joyeria.com`, el usuario será **cliente**.
    -   Cualquier otro correo mostrará el mensaje: `El usuario no existe.`

-   **Contraseña:**
    -   Debe ser exactamente `password123` para todos los roles válidos.
    -   Si la contraseña es incorrecta (no es `password123`), se muestra el mensaje: `Contraseña incorrecta.`

-   **Mensajes de éxito:**
    -   Al iniciar sesión correctamente, se muestra: `Inicio de sesión exitoso como [rol]. Redirigiendo...`

-   **Mensajes de error:**
    -   Si el correo no es uno de los válidos: `El usuario no existe.`
    -   Si la contraseña es incorrecta para un correo válido: `Contraseña incorrecta.`
    -   Si algún campo está vacío: `Por favor, ingresa tu correo electrónico.` o `Por favor, ingresa tu contraseña.` (antes de intentar validar credenciales).

---

## Flujo de Recuperación de Contraseña (Simulado)

-   **Paso 1: Solicitud de Correo:** Ingresar un correo y presionar "Recuperar Contraseña". Se simula el envío de un código.
-   **Paso 2: Validación de Código:** Ingresar el código `123456` (código de prueba) y presionar "Validar Código". Cualquier otro código dará error.
-   **Paso 3: Nueva Contraseña:** Ingresar una nueva contraseña (mínimo 8 caracteres) y confirmarla. Si coinciden y cumplen la longitud, se simula el restablecimiento.
-   Todos los pasos tienen mensajes de error si la entrada es inválida.

---

## Ejemplo de Uso

1.  Ingresa `admin@joyeria.com` y `password123` → Acceso como administrador.
2.  Ingresa `vendedor@joyeria.com` y `password123` → Acceso como vendedor.
3.  Ingresa `cliente@joyeria.com` y `password123` → Acceso como cliente.
4.  Ingresa `cualquier_otro@ejemplo.com` y `cualquier` → Verás el mensaje de error "El usuario no existe".
5.  Ingresa `admin@joyeria.com` y `contrasena_incorrecta` → Verás el mensaje de error "Contraseña incorrecta".

---

## Códigos de Prueba para Recuperación de Contraseña

-   **Código válido:** `123456`
-   **Cualquier otro código:** Mostrará "Código incorrecto. Intenta de nuevo."
-   **Validación de nueva contraseña:** Mínimo 8 caracteres y debe coincidir con la confirmación.

---

## Comportamiento del Sistema

### Validación de Campos
- Los campos se validan en tiempo real
- Los mensajes de error aparecen debajo de cada campo
- Los mensajes se limpian automáticamente al intentar un nuevo login

### Persistencia de Sesión
- El rol del usuario se guarda en `localStorage`
- La sesión persiste durante la navegación
- Se puede cerrar sesión limpiando el `localStorage`

### Redirección
- Después del login exitoso, se redirige automáticamente a `dashboard.html`
- El dashboard se adapta según el rol del usuario

---

**Nota Importante:**
-   Este sistema es solo para pruebas y simulación en el frontend. **No hay validación de credenciales real en el backend.**
-   La visibilidad de las opciones del menú y la interfaz del dashboard cambiarán automáticamente según el rol asignado después del login, gracias a la clase `role-[rol]` que se añade al `<body>`.
-   En un entorno de producción real, todas las validaciones deberían realizarse en el backend con medidas de seguridad apropiadas. 