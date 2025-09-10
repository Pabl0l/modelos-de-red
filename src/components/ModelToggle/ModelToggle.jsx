import React from 'react'
import './ModelToggle.css'

const ModelToggle = ({ selectedModel, setSelectedModel }) => {
  return (
    <div className="model-toggle">
      <button 
        className={selectedModel === 'modeloOSI' ? 'active' : ''}
        onClick={() => setSelectedModel('modeloOSI')}
      >
        OSI
      </button>
      
      <button 
        className={selectedModel === 'modeloTCPIP' ? 'active' : ''}
        onClick={() => setSelectedModel('modeloTCPIP')}
      >
        TCP/IP
      </button>

      {/* Nuevo botón para el componente interactivo */}
      <button 
        className={selectedModel === 'interactivo' ? 'active' : ''}
        onClick={() => setSelectedModel('interactivo')}
      >
        Simulador
      </button>
    </div>
  )
}

export default ModelToggle
