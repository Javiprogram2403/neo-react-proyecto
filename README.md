# Web concesionario
# Instrucciones para ejecutar el proyecto

Este proyecto está dividido en dos partes: el **backend** y el **frontend**. Para ejecutar el proyecto localmente, sigue los pasos que se describen a continuación.

## Paso 1: Crear los archivos `.env`

### Crear el archivo `.env` en la carpeta `/backend`

1. Navega a la carpeta `backend` dentro de tu proyecto.
2. Crea un archivo llamado `.env` en esa carpeta.
3. Copia el contenido que te haya enviado por correo electrónico para configurar las credenciales y otras configuraciones necesarias.

### Crear el archivo `.env` en la carpeta principal del proyecto

1. Navega a la carpeta principal del proyecto (donde se encuentra el archivo `package.json` del frontend).
2. Crea un archivo llamado `.env` en esa carpeta.
3. Copia el contenido que te haya enviado por correo electrónico para configurar las credenciales y otras configuraciones necesarias para el frontend.

## Paso 2: Instalación de dependencias y ejecución del backend

1. Abre una terminal y navega hasta la carpeta `backend` del proyecto:
  
Instala las dependencias del backend ejecutando el siguiente comando:

```bash
npm install
```
Después de que las dependencias se hayan instalado correctamente, ejecuta el servidor del backend con el siguiente comando:

```bash
node src/index.js
```

El servidor debería estar ahora ejecutándose y esperando solicitudes en el puerto que hayas configurado en el archivo .env (normalmente, algo como http://localhost:3000).

## Paso 3: Ejecución del frontend
Abre una nueva terminal y navega a la carpeta principal del proyecto (donde está el archivo package.json del frontend).

Instala las dependencias del frontend ejecutando el siguiente comando:

```bash
npm install
```
Luego, ejecuta el servidor de desarrollo para el frontend con:

```bash
npm run dev
```
El frontend debería estar ahora ejecutándose y accesible en http://localhost:5173 (o en otro puerto si se ha configurado de manera diferente).

## Paso 4: Acceder al proyecto
Backend: Una vez que el servidor backend esté en funcionamiento, debería estar disponible en el puerto que hayas configurado (por ejemplo, http://localhost:3000).

Frontend: El servidor de desarrollo de Vite estará disponible en http://localhost:5173 (o el puerto que hayas configurado).
