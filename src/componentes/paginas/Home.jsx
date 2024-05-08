/*Home.jsx*/

import '../styles.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import Title from '../reusables/Title';
import Escudo from './componentes_Home/Escudo';
import Boton from '../reusables/Boton';


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
                    <Title text="UD PARC"/>
                </div>
                <div className="flex flex-col compTitulo">
                    <Link to="/noticias"><Boton text="NOTICIAS"/></Link>
                    <Link to="/equipos"><Boton text="EQUIPOS"/></Link>
                    <Link to="/multimedia"><Boton text="MULTIMEDIA"/></Link>
                    <Link to="/contacto"><Boton text="CONTACTO"/></Link>
                </div>
                <div className='compTitulo'>
                    <Escudo />
                </div>
            </div>
        </div>
    );
}

export default Home;

