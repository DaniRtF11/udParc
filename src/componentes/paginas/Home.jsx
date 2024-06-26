/*Home.jsx*/
import '../styles.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Title from '../reusables/Title';
import Escudo from './componentes_Home/Escudo';
import Boton from '../reusables/Boton';
import SocialMedia from './componentes_Home/SocialMedia'



const Home = () => {
    const [imageIndex, setImageIndex] = useState(1);
    const totalImages = 7; // imágenes en la carpeta
    const imageFiles = Array.from({ length: totalImages }, (_, index) => `/img/fondo/fondo${index + 1}.jpg`);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex % totalImages) + 1);
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [totalImages]); // Asegúrate de que el efecto se ejecute cuando cambie totalImages

    return (
        <div className="fondo" style={{ backgroundImage: `url(${imageFiles[imageIndex - 1]})` }}>
            <div>
                <div className='compTitulo'>
                    <Title text="UD PARC" />
                </div>
                <div className="compTitulo botonesHome">
                    <Link to="/noticias"><Boton text="NOTICIAS" /></Link>
                    <Link to="/equipos"><Boton text="EQUIPOS" /></Link>
                    <Link to="/multimedia"><Boton text="MULTIMEDIA" /></Link>
                    <Link to="/contacto"><Boton text="CONTACTO" /></Link>
                </div>
                <div className='compTitulo'>
                    <Escudo />
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}

export default Home;

