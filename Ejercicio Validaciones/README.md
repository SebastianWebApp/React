# Ejercicio Básico con React y TypeScript

Este proyecto es un ejercicio básico desarrollado con React y TypeScript. La aplicación permite validar el nombre y la contraseña (puedes adaptar para apellido) en un formulario, asegurando que el nombre solo contenga letras y la contraseña solo letras y números.

## Características

- Validación de nombre: solo se permiten letras y espacios.
- Validación de contraseña: solo se permiten letras y números.
- Interfaz sencilla con Bootstrap.

## Instalación

1. Clona el repositorio:

   ```sh
   git clone <url-del-repositorio>
   cd Ejercicio\ Validaciones
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso

- Inicia el servidor de desarrollo:
  ```sh
  npm run dev
  ```

## Estructura principal

- [`src/components/Formulario.tsx`](Ejercicio Validaciones/src/components/Formulario.tsx): Formulario con validación de nombre y contraseña.
- [`src/utils/Validaciones.tsx`](Ejercicio Validaciones/src/utils/Validaciones.tsx): Funciones de validación.
- [`src/App.tsx`](Ejercicio Validaciones/src/App.tsx): Componente principal.

## Tecnologías

- React
- TypeScript
- Vite
- Bootstrap

## Licencia

MIT
