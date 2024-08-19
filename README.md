# Ccitec - Página Web

Este es el repositorio del proyecto de la página web para **Ccitec**, una empresa dedicada a ofrecer cursos especializados para ingenieros. El proyecto está desarrollado utilizando el framework **Astro** para garantizar una página web rápida, modular y eficiente.

## Tecnologías Utilizadas

- [Astro](https://astro.build) - Framework moderno para generar sitios estáticos rápidos.
- [Tailwind CSS](https://tailwindcss.com) - Framework de CSS para el diseño.
- [TypeScript](https://www.typescriptlang.org) - Para un código más robusto y con tipado estático.
- [Firebase](https://firebase.google.com) - Hosting de la página web.
- [Node.js](https://nodejs.org) - Entorno de ejecución para JavaScript en el servidor.

## Estructura del Proyecto

```bash
ccitec-website/
├── public/             # Archivos públicos (imágenes, fuentes, etc.)
├── src/
│   ├── components/     # Componentes reutilizables de la UI
│   ├── layouts/        # Plantillas de diseño para páginas
│   ├── pages/          # Páginas individuales del sitio
│   ├── styles/         # Archivos de estilos globales
│   └── utils/          # Utilidades y funciones auxiliares
├── astro.config.mjs    # Configuración de Astro
├── firebase.json       # Configuración de Firebase Hosting
├── package.json        # Dependencias y scripts del proyecto
└── tailwind.config.js  # Configuración de Tailwind CSS
