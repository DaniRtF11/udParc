/* Multimedia.jsx */
import React, { useState, useEffect } from 'react';
import '../styles.css';
import TitlePages from '../reusables/TitlePages';
import BotonHome from '../reusables/BotonHome';
import ReproductorAudio from '../reusables/ReproductorAudio';
import VideoPlayer from '../reusables/VideoPlayer';
import videos from '../../assets/data/videos.json';
import Footer from '../reusables/Footer';
import useFullHeight from '../../hooks/useFullHeight';
import SelectMultimedia from '../reusables/SelectMultimedia';
import GaleriaFotos from '../reusables/GaleriaFotos';

const Multimedia = () => {
    const [activeSection, setActiveSection] = useState('images'); // Estado para controlar la sección activa
    const isFullHeight = useFullHeight();

    // Recalcular la altura cuando la sección activa cambie
    useEffect(() => {
        const checkHeight = () => {
            const bodyHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            if (bodyHeight <= windowHeight !== isFullHeight) {
                setActiveSection(prev => prev);
            }
        };

        checkHeight();
    }, [activeSection, isFullHeight]);

    return (
        <div className={`fondoPaginas ${isFullHeight ? 'fondoPaginasScreen' : 'fondoPaginasAuto'}`}>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'>
                    <TitlePages text="MULTIMEDIA" />
                </div>
            </div>
            <SelectMultimedia setActiveSection={setActiveSection} />
            <div className='iconosMulimedia'>
                {activeSection === 'images' && <GaleriaFotos />}
                {activeSection === 'videos' && <VideoPlayer videos={videos} />}
                {activeSection === 'audio' && <ReproductorAudio text="HIMNO UD PARC" />}
            </div>
            <Footer />
        </div>
    );
}

export default Multimedia;
