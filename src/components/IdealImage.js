// src/components/IdealImage.js

import React from 'react';
import '../css/custom.css'; // Asegúrate de que esta ruta es correcta

function IdealImage({ src, alt, caption, className }) {
  return (
    <div className="custom-img-container">
      <img src={src} alt={alt} className={`custom-img ${className}`} />
      {caption && <div className="custom-caption">{caption}</div>}
    </div>
  );
}

export default IdealImage;
