# NexToCode

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📖 Descripción

**NexToCode** es un blog de laboratorios de programación construido con **Astro**, diseñado con una arquitectura modular que permite agregar un nuevo laboratorio (en cualquier lenguaje) simplemente creando un archivo `.mdx` en la carpeta correcta, **sin tocar nunca el código fuente del proyecto**.

Cada laboratorio incluye:
- ✅ Explicación teórica del concepto
- ✅ Código con resaltado de sintaxis (Shiki)
- ✅ Entorno interactivo embebido (Compiler Explorer)
- ✅ Modo oscuro/claro con persistencia

## ✨ Características

- **Motor Modular**: Basado en Astro Content Collections con schema Zod estricto.
- **Filtros Dinámicos**: En la página de labs, filtra por lenguaje y dificultad sin recargar.
- **Ejecución en el Navegador**: Cada lab embebe Compiler Explorer (godbolt.org) para ejecutar código sin instalar nada.
- **Modo Oscuro/Claro**: Con persistencia en `localStorage`.
- **100% Estático**: Sin base de datos, sin servidor. Solo archivos Markdown.
- **SEO Listo**: Meta tags y descripciones en cada página.

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Contenido | MDX + Astro Content Collections |
| Sintaxis | [Shiki](https://shiki.matsu.io) (tema github-dark-dimmed) |
| Ejecución | [Compiler Explorer](https://godbolt.org) (iframe) |
| Validación | [Zod](https://zod.dev) |

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/TuUsuario/NexToCode.git
cd NexToCode

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre http://localhost:4321 en tu navegador.

## 📁 Estructura del Proyecto

```text
NexToCode/
├── src/
│   ├── components/
│   │   ├── LabCard.astro           # Tarjeta de vista previa de un lab
│   │   └── labs/
│   │       └── LabRunner.astro     # Iframe de Compiler Explorer
│   ├── content/
│   │   ├── config.ts               # Schemas Zod (metadatos obligatorios)
│   │   └── labs/
│   │       └── cpp/                # Laboratorios de C++
│   │           ├── l02-ecuaciones-cuadraticas.mdx
│   │           ├── l03-inicializacion-referencias.mdx
│   │           ├── l05-estructuras-de-datos-stl.mdx
│   │           ├── l09-templates-y-conceptos.mdx
│   │           ├── l13-semantica-de-movimiento.mdx
│   │           └── l16-analizador-datos-retail.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Layout principal (Header + Footer)
│   │   └── LabLayout.astro         # Layout de página de lab
│   ├── pages/
│   │   ├── index.astro             # Página de inicio
│   │   ├── about.astro             # Sobre mí
│   │   └── labs/
│   │       ├── index.astro         # Índice de labs con filtros
│   │       └── [lenguaje]/
│   │           └── [slug].astro    # Ruta dinámica (una página por lab)
│   └── styles/
│       └── global.css              # Variables CSS de tema
├── astro.config.mjs
├── package.json
└── README.md
```

## ➕ Agregar un Nuevo Laboratorio

1. Crea un archivo `.mdx` en `src/content/labs/<lenguaje>/`
2. Llena el frontmatter con los metadatos requeridos:

```yaml
---
titulo: "Título del Laboratorio"
descripcion: "Descripción breve del concepto."
lenguaje: "cpp"      # cpp | python | rust | javascript
dificultad: 3        # 1 (fácil) a 5 (avanzado)
etiquetas: ["tag1", "tag2"]
fecha: 2026-05-10
---
```

3. Escribe tu contenido en Markdown
4. Haz `git commit && git push` — el sitio se reconstruye automáticamente ✅

## 📋 Laboratorios Disponibles

| Lab | Título | Dificultad |
|-----|--------|-----------|
| L02 | Ecuaciones Cuadráticas | ★★☆☆☆ |
| L03 | Inicialización y Referencias | ★★★☆☆ |
| L05 | Estructuras de Datos STL | ★★★☆☆ |
| L09 | Templates y Conceptos | ★★★★☆ |
| L13 | Semántica de Movimiento | ★★★★★ |
| L16 | Analizador de Datos Retail | ★★★★☆ |

## 🛣️ Roadmap

- [ ] Fase 5: Buscador estático con Pagefind
- [ ] Fase 5: Open Graph y SEO avanzado
- [ ] Fase 5: Despliegue en Vercel / Cloudflare Pages
- [ ] Laboratorios de Python
- [ ] Laboratorios de Rust
