import React, { useState } from 'react';
import '../styles.css';

const GaleriaFotos = () => {
  // Genera la lista de nombres de las imágenes
  const imageNames = Array.from({ length: 12 }, (_, i) => `foto${i + 1}.jpg`);

  // Estado para almacenar el índice de la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para manejar el clic en una imagen
  const handleClick = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  return (
    <div className="galeria">
      {imageNames.map((imageName, index) => (
        <img
          key={index}
          src={`/img/galery/${imageName}`}
          alt={`Image ${index}`}
          className={`imgGalery ${selectedImage === index ? 'imgGalery--large' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
      {selectedImage !== null && (
        <div
          className="bigImage"
          onClick={() => setSelectedImage(null)}
        ></div>
      )}
    </div>
  );
};

export default GaleriaFotos;
