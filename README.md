# 🌌 3D Interactive Portfolio

Un portafolio web inmersivo y moderno construido con **React**, **Three.js** y **Vite**. Este proyecto visualiza la experiencia profesional y los repositorios de GitHub como un sistema solar interactivo, donde cada planeta representa un proyecto y el sol ilumina la trayectoria profesional.

![Project Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge) ![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react) ![Three.js](https://img.shields.io/badge/Three.js-r157-black?style=for-the-badge&logo=three.js)

## ✨ Características Principales

*   **Experiencia 3D Inmersiva**: Navegación orbital completa con controles de cámara personalizados para móviles y escritorio.
*   **Visualización de Datos**:
    *   🪐 **Planetas como Proyectos**: Los repositorios de GitHub se renderizan dinámicamente como cuerpos celestes.
    *   ☀️ **Sol como "Core"**: Representa la trayectoria profesional y el perfil del desarrollador.
    *   🛸 **Nave Interactiva**: Acceso rápido a redes sociales y contacto.
*   **Diseño Responsivo**: Sistema de adaptación de cámara y UI que detecta automáticamente dispositivos móviles, tablets y escritorio.
*   **Efectos Visuales**: Bloom, brillos atmosféricos, campos de estrellas y galaxias generadas proceduralmente.
*   **Integración API**: Consumo de APIs personalizadas para experiencias laborales y GitHub API para repositorios.

## 🛠️ Tech Stack

*   **Core**: React 18, Vite.
*   **3D Graphics**: Three.js, React Three Fiber (conceptos aplicados en vanilla Three.js dentro de React).
*   **Post-Processing**: `EffectComposer`, `UnrealBloomPass`, `FilmPass`.
*   **Routing**: React Router DOM v6.
*   **Estilos**: CSS Modules / Global CSS con diseño Glassmorphism.

## 🚀 Instalación y Despliegue

### Prerrequisitos

*   Node.js (v16 o superior recomendado)
*   npm o yarn

### Configuración Local

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/threejs-portfolio.git
    cd threejs-portfolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env.local` o `.env` en la raíz del proyecto basándote en `.env.example`:
    ```ini
    VITE_PORTFOLIO_API_BASE=https://api-porfolio.cagudelo.com
    VITE_PORTFOLIO_API_KEY=tu_api_key_opcional
    ```

4.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

### Construcción para Producción

1.  Generar el build optimizado:
    ```bash
    npm run build
    ```
    Esto creará una carpeta `dist` con los archivos estáticos listos para producción.

2.  Previsualizar el build:
    ```bash
    npm run preview
    ```

## 📂 Estructura del Proyecto

```bash
src/
├── assets/         # Recursos estáticos (imágenes, texturas)
├── components/     # Componentes React reutilizables
├── data/           # Datos estáticos o configuraciones
├── sections/       # Secciones de la página (si aplica)
├── services/       # Lógica de consumo de APIs (experiencesApi.js)
├── styles/         # Archivos CSS globales
├── three/          # Lógica específica de Three.js
│   ├── SolarSystem.js  # Generación procedural del sistema solar
│   └── githubApi.js    # Servicio para API de GitHub
├── App.jsx         # Componente principal y orquestador de la escena 3D
├── main.jsx        # Punto de entrada y configuración de Router
└── PrivacyPolicy.jsx # Página de políticas de privacidad
```

## 🎮 Controles de la Escena

*   **Click Izquierdo / Toque**: Rotar la cámara alrededor del objetivo.
*   **Click Derecho / Dos dedos**: Desplazar (Pan) la cámara (deshabilitado en móviles por defecto).
*   **Rueda / Pellizcar**: Zoom in/out.
*   **Click en Objeto**: Enfoca la cámara en el planeta, sol o nave seleccionada y despliega su panel de información.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

1.  Fork el proyecto
2.  Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3.  Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4.  Push a la rama (`git push origin feature/AmazingFeature`)
5.  Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ por [Camilo Agudelo](https://github.com/caagudelo)
