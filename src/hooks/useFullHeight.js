// useFullHeight.js
import { useState, useEffect } from 'react';

const useFullHeight = () => {
    const [isFullHeight, setIsFullHeight] = useState(false);

    // Función para comprobar la altura del contenido
    const checkHeight = () => {
        const bodyHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        setIsFullHeight(bodyHeight <= windowHeight);
    };

    useEffect(() => {
        // Comprobar la altura en el montaje y en cada actualización
        checkHeight();

        // Comprobar la altura en cada redimensionamiento de ventana
        const handleResize = () => {
            checkHeight();
        };
        window.addEventListener('resize', handleResize);

        // Limpieza del event listener
        return () => window.removeEventListener('resize', handleResize);
    }); // No es necesario añadir dependencias aquí

    return isFullHeight;
};

export default useFullHeight;
