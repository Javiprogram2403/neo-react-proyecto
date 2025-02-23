# Web concesionario

## 1. Requisitos Funcionales
### Autenticación y Login
- Pantalla de Login: La aplicación debe iniciar con una pantalla de autenticación donde los usuarios ingresen sus credenciales.
- Validación y manejo de errores: Se debe realizar la validación de los datos en el formulario y manejar errores de autenticación.
- Comunicación con el Backend: El login debe enviar las credenciales al backend y, de recibir una respuesta exitosa (por ejemplo, un token), proceder a almacenar la información necesaria.
- Persistencia del Estado: Una vez autenticado, el token o la información de sesión deberá almacenarse en el localStorage para mantener la sesión activa en recargas de página.
### Routing y Rutas Protegidas
- React Router: Utilizar React Router (preferiblemente la versión 6) para definir y gestionar la navegación entre diferentes vistas de la aplicación.
- Rutas Protegidas: Implementar rutas que solo sean accesibles para usuarios autenticados. Por ejemplo, mediante un componente ProtectedRoute que verifique el estado de autenticación antes de renderizar la ruta.
- Navegación Dinámica: Asegurarse de que la navegación se actualice de acuerdo al estado de la aplicación (por ejemplo, mostrar menús o enlaces condicionalmente).

### Gestión del Estado entre componentes
- Context API: Crear uno o más contextos para compartir información global (como la información del usuario autenticado, temas de la aplicación, etc.) sin necesidad de prop-drilling.
- Reducers: Utilizar useReducer (o una solución similar) para manejar estados complejos y acciones, como la actualización del estado de autenticación, manejo de errores o estados de carga.

### Custom Hooks
- Abstracción de Lógica: Desarrollar al menos un custom hook para encapsular y reutilizar lógica común. Ejemplos:
- useForm: para gestionar formularios, validaciones y manejo de datos.
- useFetch o useApi: para centralizar la lógica de las peticiones al backend, manejo de loading, errores, etc.
### LocalStorage
- Persistencia de Datos: Emplear localStorage para almacenar información relevante que deba persistir entre sesiones, como tokens de autenticación, preferencias del usuario u otros datos críticos.
### Comunicación con el Backend
- API REST: La aplicación debe interactuar con el backend mediante peticiones HTTP (fetch, axios u otra librería de tu preferencia). Se deben implementar las siguientes operaciones:
GET: Para obtener y mostrar información desde la base de datos.
POST, PUT/PATCH, DELETE: Para crear, actualizar y eliminar registros, respectivamente.
### CRUDs Mínimos (3 Módulos)
- El proyecto debe soportar, al menos, tres módulos CRUD. Cada módulo debe incluir:
- Listado de registros: Una vista que muestre los datos obtenidos de la base de datos.
- Crear nuevo registro: Formulario para la inserción de nuevos datos.
- Editar registro existente: Funcionalidad para actualizar la información de un registro.
- Eliminar registro: Opción para eliminar registros con confirmación previa.

Ejemplos de módulos CRUD:
Usuarios: Gestión de perfiles o datos de usuarios.
Productos: Catálogo de productos o servicios.
Pedidos/Transacciones: Gestión de órdenes o transacciones realizadas.
## 2. Requisitos Técnicos y Buenas Prácticas
### Estructuración y Organización del Proyecto
Carpetas y Componentes: Organizar el código en carpetas lógicas (por ejemplo, components, hooks, contexts, reducers, services).
Componentes Reutilizables: Diseñar componentes que puedan reutilizarse en diferentes partes de la aplicación (por ejemplo, botones, formularios, modales).
### Deployment (ESTO LO HACEMOS JUNTOS CUANDO ACABEIS)
Despliegue en Producción: El proyecto debe estar desplegado en un entorno accesible públicamente (por ejemplo, Vercel, Netlify o similar) para poder ser evaluado en vivo.

Documentación: Incluir un README claro que explique cómo instalar, ejecutar y probar la aplicación, además de detallar las decisiones técnicas tomadas.
## 3. Flujo SUGERIDO de la Aplicación ( NO ES OBLIGATORIA LA ESTRUCTURA )
Pantalla de Login:
El usuario ingresa sus credenciales.
Se realiza la petición al backend para autenticar al usuario.
Si la autenticación es exitosa, se almacena la sesión en localStorage y se actualiza el estado global.
Dashboard y Navegación Principal:
Una vez autenticado, el usuario es redirigido a un dashboard o página principal.
Desde aquí, se accede a los diferentes módulos CRUD mediante la navegación proporcionada por React Router.
Módulos CRUD:
Cada módulo (por ejemplo, Usuarios, Productos, Pedidos) permite listar, crear, editar y eliminar registros.
Las operaciones se realizan a través de peticiones al backend, actualizando la UI según los resultados.
Gestión del Estado y Persistencia:
La información de autenticación y otros estados globales se manejan mediante Context API y Reducers.
Los datos sensibles se persisten en localStorage para mantener la sesión activa.
Desconexión y Seguridad:
Implementar la funcionalidad de logout que limpie el estado global y el localStorage, redirigiendo al usuario a la pantalla de login.
(editado)
