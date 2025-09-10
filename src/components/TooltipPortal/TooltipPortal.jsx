import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./TooltipPortal.css";

const TooltipPortal = ({ children, x, y }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: y, left: x });

  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      const { offsetWidth, offsetHeight } = tooltip;
      const { innerWidth, innerHeight } = window;

      let newX = x;
      let newY = y;

      // Si se sale por la derecha → lo movemos hacia la izquierda
      if (x + offsetWidth / 2 > innerWidth) {
        newX = innerWidth - offsetWidth / 2 - 10;
      }

      // Si se sale por la izquierda → lo movemos un poco hacia adentro
      if (x - offsetWidth / 2 < 0) {
        newX = offsetWidth / 2 + 10;
      }

      // Si no hay espacio arriba → lo mostramos debajo del chip
      if (y - offsetHeight < 0) {
        newY = y + offsetHeight + 20;
      }

      // Si no hay espacio abajo → lo dejamos arriba
      if (y + offsetHeight > innerHeight) {
        newY = y - offsetHeight - 20;
      }

      setPosition({ top: newY, left: newX });
    }
  }, [x, y]);

  return ReactDOM.createPortal(
    <div
      ref={tooltipRef}
      className="tooltip-portal"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translate(-50%, -100%)"
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default TooltipPortal;
