import React, { useState } from "react";
import "./InteractivePanel.css";
import { modelsData } from "../../data/modelsData";

const InteractivePanel = ({ modelo = "modeloOSI" }) => {
  const capas = modelsData[modelo];
  const [mensaje, setMensaje] = useState("");
  const [capaActual, setCapaActual] = useState(0); // Comenzar desde capa 7 (índice 0)

  // Manejar cambio de mensaje
  const handleInputChange = (e) => setMensaje(e.target.value);

  // Navegar entre capas
  const subirCapa = () => {
    if (capaActual > 0) setCapaActual(capaActual - 1);
  };

  const bajarCapa = () => {
    if (capaActual < capas.length - 1) setCapaActual(capaActual + 1);
  };

  // Función para generar datos aleatorios de encapsulación
const generarDatosEncapsulados = (mensajeOriginal, nivelCapa) => {
  if (!mensajeOriginal) return "Escribe un mensaje para ver cómo se encapsula";
  
  const mensajeBase64 = btoa(unescape(encodeURIComponent(mensajeOriginal)));
  
  switch (nivelCapa) {
    case 7: // Aplicación - Datos
      return (
        <span>
          <span className="encapsulation-info">[Input] </span>
          <span className="encapsulated-data">{mensajeOriginal}</span>
        </span>
      );
      
    case 6: // Presentación - Datos (codificación)
      const simbolos = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "~", "`", "[", "]", "{", "}", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?"];
      const textoCodificado = mensajeOriginal.split('').map(() => {
        return simbolos[Math.floor(Math.random() * simbolos.length)];
      }).join('');
      
      return (
        <span>
          <span className="encapsulation-info">[Codificado] </span>
          <span className="encapsulated-data">{textoCodificado}</span>
        </span>
      );
      
    case 5: // Sesión - Datos
      const sessionId = Math.floor(Math.random() * 10000);
      return (
        <span>
          <span className="encapsulation-info">[Sesión:{sessionId}] </span>
          <span className="encapsulated-data">{mensajeBase64}</span>
        </span>
      );
      
    case 4: // Transporte - Segmentos
      const puerto = Math.floor(Math.random() * 65535);
      return (
        <span>
          <span className="encapsulation-info">[Puerto:{puerto}] </span>
          <span className="encapsulated-data">{mensajeBase64}</span>
        </span>
      );
      
    case 3: // Red - Paquetes
      const ipOrigen = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      const ipDestino = `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      return (
        <span>
          <span className="encapsulation-info">[IP Origen:{ipOrigen} → IP Destino:{ipDestino}] </span>
          <span className="encapsulated-data">{mensajeBase64}</span>
        </span>
      );
      
    case 2: // Enlace de datos - Tramas
      const generarMAC = () => {
        const hex = "0123456789ABCDEF";
        let mac = "";
        for (let i = 0; i < 6; i++) {
          mac += hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)];
          if (i < 5) mac += ":";
        }
        return mac;
      };
      return (
        <span>
          <span className="encapsulation-info">[MAC Origen:{generarMAC()} → MAC Destino:{generarMAC()}] </span>
          <span className="encapsulated-data">{mensajeBase64}</span>
        </span>
      );
      
    case 1: // Física - Bits
      return (
        <span>
          <span className="encapsulation-info">[Señal digital] </span>
          <span className="encapsulated-data">
            {mensajeBase64.split('').map(() => Math.random() > 0.5 ? '1' : '0').join('')}
          </span>
        </span>
      );
      
    default:
      return (
        <span>
          <span className="encapsulation-info">[Input] </span>
          <span className="encapsulated-data">{mensajeOriginal}</span>
        </span>
      );
  }
};

  // Obtener el número de capa correcto (7, 6, 5, ... 1)
  const numeroCapa = capas.length - capaActual;
  const datosEncapsulados = generarDatosEncapsulados(mensaje, numeroCapa);
  
  // Obtener la capa actual (corregido el orden)
  const capaActualData = capas[capas.length - 1 - capaActual];
  
  // Obtener color de la capa anterior (para resaltar datos encapsulados)
  const colorCapaAnterior = capaActual > 0 
    ? capas[capas.length - capaActual].color 
    : capas[capas.length - 1].color;

  return (
    <div className="interactive-panel expanded">
      <div className="bento-grid-int">

      {/* Cabecera estilo bento */}
      <div className="bento-header-int" style={{ backgroundColor: capaActualData.color }}>
        <span className="layer-number">Capa {numeroCapa}</span>
        <h2 className="layer-name">{capaActualData.nombre}</h2>
      </div>

      {/* Input para ingresar el mensaje */}
      <div className="bento-item-int input-container">
        <h3>Simulación de Encapsulación</h3>
        <label htmlFor="mensaje">Ingresa un mensaje:</label>
        <input
          id="mensaje"
          type="text"
          value={mensaje}
          onChange={handleInputChange}
          placeholder="Escribe aquí tu mensaje"
          className="message-input"
          />
      </div>

      {/* Mensaje encapsulado */}
        <div className="bento-item-int message-display">
          <h3>
            {numeroCapa >= 5 ? "Datos" : 
             numeroCapa === 4 ? "Segmentos" : 
             numeroCapa === 3 ? "Paquetes" : 
             numeroCapa === 2 ? "Tramas" : "Bits"}
          </h3>
          <div className="encapsulated-message" style={{ borderLeftColor: capaActualData.color }}>
            {datosEncapsulados}
          </div>
          <div className="encapsulation-info">
            {mensaje && `Nivel de encapsulación: Capa ${numeroCapa} (${capaActualData.nombre})`}
          </div>
        </div>

      {/* Información de la capa */}
      <div className="bento-item-int layer-info">
        <h3>Descripción</h3>
        <p>{capaActualData.info}</p>
      </div>

      {/* Botones de navegación */}
      <div className="bento-item-int navigation-container">
        <div className="navigation-buttons">
          {capaActual > 0 && (
            <button onClick={subirCapa} className="nav-button up" aria-label="Subir capa">
              ▲ Capa Superior (Capa {numeroCapa + 1})
            </button>
          )}
          {capaActual < capas.length - 1 && (
            <button onClick={bajarCapa} className="nav-button down" aria-label="Bajar capa">
              ▼ Capa Inferior (Capa {numeroCapa - 1})
            </button>
          )}
        </div>
        <div className="navigation-indicator">
          {numeroCapa} de {capas.length} (Capa {capaActualData.nombre})
        </div>
          </div>
      </div>
    </div>
  );
};

export default InteractivePanel;