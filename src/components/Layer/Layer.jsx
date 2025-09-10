import React, { useState } from "react";
import "./Layer.css";
import { protocolsData } from "../../data/protocolsData";
import TooltipPortal from "../TooltipPortal/TooltipPortal";

const Layer = ({ layer, darkMode, modelo }) => {
  const protocolos = protocolsData?.[modelo]?.[`capa${layer.capa}`] || [];
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, protocolo) => {
    const rect = event.target.getBoundingClientRect();
    setTooltipContent(
      <>
        <strong>{protocolo.nombre}</strong>
        <p>{protocolo.info}</p>
      </>
    );

    // Calculamos posición inicial por defecto (centro arriba del chip)
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 12
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div className={"layer expanded"}>
      <div className="bento-grid">
        {/* Cabecera */}
        <div className="bento-header" style={{ backgroundColor: layer.color }}>
          <span className="layer-number">Capa {layer.capa}</span>
          <h2 className="layer-name">{layer.nombre}</h2>
        </div>

        {/* Descripción */}
        <div className="bento-item bento-descripcion">
          <h3>Descripción</h3>
          <p>{layer.descripcion}</p>
        </div>

        {/* Protocolos con tooltip */}
        <div className="bento-item bento-protocolos">
          <h3>Protocolos</h3>
          <div className="chips-container">
            {protocolos.length > 0 ? (
              protocolos.map((protocolo, index) => (
                <span
                  key={index}
                  className="chip"
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  onMouseEnter={(e) => handleMouseEnter(e, protocolo)}
                  onMouseLeave={handleMouseLeave}
                >
                  {protocolo.siglas}
                </span>
              ))
            ) : (
              <p className="no-data">No hay protocolos disponibles.</p>
            )}
          </div>
        </div>

        {/* Dispositivos */}
        <div className="bento-item bento-dispositivos">
          <h3>Dispositivos / Tecnologías</h3>
          <div className="chips-container">
            {layer.dispositivos.map((dispositivo, index) => (
              <span
                key={index}
                className="chip chip-blue"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                {dispositivo}
              </span>
            ))}
          </div>
        </div>

        {/* Conceptos clave */}
        <div className="bento-item bento-conceptos">
          <h3>Conceptos Clave</h3>
          <div className="chips-container">
            {layer.conceptosClave.map((concepto, index) => (
              <span
                key={index}
                className="chip chip-key"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                {concepto}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip Portal */}
      {tooltipContent && (
        <TooltipPortal x={tooltipPos.x} y={tooltipPos.y}>
          {tooltipContent}
        </TooltipPortal>
      )}
    </div>
  );
};

export default Layer;
