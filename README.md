🌐 Modelos de Red OSI/TCP-IP - Simulador Interactivo

Una aplicación web moderna y educativa que visualiza y explica los modelos de red OSI y TCP/IP con un simulador interactivo de encapsulación de datos.
** Hecho como material didáctico y practicar mis habilidades frontend.

✨ Características

    📊 Visualización de Modelos: Representación completa de las capas de los modelos OSI (7 capas) y TCP/IP (4 capas)

    🎮 Simulador Interactivo: Experiencia práctica de encapsulación/desencapsulación de datos a través de las capas

    🌙 Modo Oscuro/Claro: Interfaz adaptable con transiciones suaves

    📱 Diseño Responsive: Optimizado para desktop, tablet y móvil

    ℹ️ Tooltips Informativos: Información detallada sobre protocolos y tecnologías

    🎨 Animaciones Fluidas: Interfaz moderna con efectos visuales atractivos

🚀 Demo

Puedes ver una demostración en vivo del proyecto aquí (reemplazar con tu URL de GitHub Pages)
🛠️ Tecnologías Utilizadas

    Frontend: React 18.2.0 + Vite

    Estilos: CSS3 con variables personalizadas y animaciones

    Iconos: ICO personalizados

    Responsive: Media queries y diseño flexible

    Build Tool: Vite para desarrollo y construcción

📦 Instalación y Uso
Prerrequisitos

    Node.js (versión 14 o superior)

    npm o yarn

Pasos de instalación

    Clonar el repositorio
    bash

git clone https://github.com/tu-usuario/modelos-red-osi-tcpip.git
cd modelos-red-osi-tcpip

Instalar dependencias
bash

npm install

Ejecutar en modo desarrollo
bash

npm run dev

Abrir en el navegador
text

http://localhost:5173

Scripts disponibles

    npm run dev - Inicia el servidor de desarrollo

    npm run build - Construye la aplicación para producción

    npm run preview - Previsualiza la build de producción

🎯 Funcionalidades Principales
1. Selección de Modelos

    Cambio entre modelo OSI, TCP/IP y el simulador interactivo

    Interfaz intuitiva con botones de selección

2. Visualización de Capas

    Tarjetas bento-style para cada capa con:

        Número y nombre de capa

        Descripción detallada

        Protocolos asociados (con tooltips informativos)

        Dispositivos y tecnologías

        Conceptos clave

3. Simulador de Encapsulación

    Entrada de mensajes de usuario

    Visualización del proceso de encapsulación por capas

    Navegación entre capas (superior/inferior)

    Representación visual de datos encapsulados

    Información contextual por capa

4. Personalización de Interfaz

    Toggle de modo oscuro/claro

    Detección automática de preferencia del sistema

    Transiciones suaves entre modos

📁 Estructura del Proyecto
text

src/
├── components/
│   ├── InteractivePanel/      # Simulador de encapsulación
│   ├── Layer/                # Componente de capa individual
│   ├── ModelToggle/          # Selector de modelo
│   └── TooltipPortal/        # Sistema de tooltips
├── data/
│   ├── modelsData.js         # Datos de modelos y capas
│   └── protocolsData.js      # Información de protocolos
├── App.jsx                   # Componente principal
└── App.css                   # Estilos principales

🎨 Personalización
Modo Oscuro/Claro

La aplicación detecta automáticamente la preferencia del sistema y permite cambiar manualmente entre modos con el botón de luna/sol.
Añadir Nuevos Protocolos

Edita src/data/protocolsData.js para agregar o modificar información de protocolos.
Modificar Estilos

Los estilos principales están en src/App.css usando variables CSS para una personalización consistente.
🌐 Despliegue
GitHub Pages

    Construye el proyecto: npm run build

    Sube la carpeta dist a GitHub Pages

Netlify/Vercel

Conecta tu repositorio para despliegue automático con cada commit.
🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

    Haz fork del proyecto

    Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

    Commit tus cambios (git commit -m 'Add some AmazingFeature')

    Push a la rama (git push origin feature/AmazingFeature)

    Abre un Pull Request

📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
👨‍💻 Autor

Pabl0l - GitHub

    Inspirado en material educativo de redes de computadoras

⭐ Si este proyecto te resulta útil, por favor dale una estrella en GitHub!
