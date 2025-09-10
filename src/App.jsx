import React, { useState, useEffect } from 'react'
import './App.css'
import ModelToggle from './components/ModelToggle/ModelToggle'
import InteractivePanel from './components/InteractivePanel/InteractivePanel'
import Layer from './components/Layer/Layer'
import { modelsData } from './data/modelsData'

function App() {
  const [selectedModel, setSelectedModel] = useState('modeloOSI')
  const [darkMode, setDarkMode] = useState(false)

  // Capas según el modelo seleccionado
  const layers = modelsData[selectedModel] ? modelsData[selectedModel].slice().reverse() : []

  // Detectar preferencia del sistema para modo oscuro
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true)
    }
  }, [])

  // Aplicar clase de modo oscuro al body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Encabezado */}
      <header>
        <div className="header-content">
          <h1>Modelos de Red</h1>
          <h2>Estándares de internet</h2>
          <div className="controls">
            <ModelToggle
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
            />
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Alternar modo oscuro"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main>
        {selectedModel === 'interactivo' ? (
          <InteractivePanel darkMode={darkMode} />
        ) : (
          <div className="layers-container">
            {layers.map((layer) => (
              <Layer
                key={layer.capa}
                layer={layer}
                darkMode={darkMode}
                modelo={selectedModel}
              />
            ))}
          </div>
        )}
      </main>

      {/* Pie de página */}
      <footer>
        <b>
          Diseñado por{' '}
          <a
            href="https://github.com/Pabl0l"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pabl0l
          </a>
          *
        </b>
      </footer>
    </div>
  )
}

export default App
