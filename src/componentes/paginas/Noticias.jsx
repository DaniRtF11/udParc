import React, { useState } from 'react';
import '../styles.css';
import TitlePages from '../reusables/TitlePages';
import BotonHome from '../reusables/BotonHome';
import Footer from '../reusables/Footer';
import useFullHeight from '../../hooks/useFullHeight';
import Noticia from '../reusables/Noticia';
import noticias from '../../assets/data/noticias.json';

const Noticias = () => {
    const isFullHeight = useFullHeight();
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

    const handleCategoriaChange = (e) => {
        setCategoriaSeleccionada(e.target.value);
    };

    const noticiasFiltradas = categoriaSeleccionada === 'Todas'
        ? noticias
        : noticias.filter(noticia => noticia.categoria === categoriaSeleccionada);

    return (
        <div className={`fondoPaginas ${isFullHeight ? 'fondoPaginasScreen' : 'fondoPaginasAuto'}`}>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="NOTICIAS" /></div>
            </div>
            <div className="filtroCategoria">
                <label htmlFor="categoria">Filtrar por categoría: </label>
                <select id="categoria" value={categoriaSeleccionada} onChange={handleCategoriaChange}>
                    <option value="Todas">Todas</option>
                    <option value="Club">Club</option>
                    <option value="Primer equipo">Primer equipo</option>
                    <option value="Futbol Base">Futbol Base</option>
                </select>
            </div>
            <div className="contenedorNoticias">
                {noticiasFiltradas.map((noticia, index) => (
                    <Noticia
                        key={index}
                        titulo={noticia.titulo}
                        subtitulo={noticia.subtitulo}
                        texto={noticia.texto}
                        foto={noticia.foto}
                        categoria={noticia.categoria}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Noticias;
