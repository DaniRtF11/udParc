/*Home.jsx*/

import './styles.css'
import React, { useEffect, useState } from 'react';
import Title from './Title';
import Menu from './Menu';
import Escudo from './Escudo';

const Home = () => {
    const [imageIndex, setImageIndex] = useState(1); // Comenzamos en 1
    const totalImages = 6; // Total de imágenes en la carpeta
    const imageFiles = Array.from({ length: totalImages }, (_, index) => `/img/fondo/fondo${index + 1}.jpg`);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Avanza al siguiente índice de imagen
            setImageIndex(prevIndex => (prevIndex % totalImages) + 1);
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [totalImages]); // Asegúrate de que el efecto se ejecute cuando cambie totalImages

    return (
        <div className="h-screen fondo" style={{ backgroundImage: `url(${imageFiles[imageIndex - 1]})` }}>
            <div className="flex flex-col">
                <div className='compTitulo'>
                    <Title />
                </div>
                <div>
                    <Menu />
                </div>
                <div className='compTitulo'>
                    <Escudo />
                </div>
            </div>
        </div>
    );
}

export default Home;

