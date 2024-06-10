// src/componentes/reusables/Noticia.jsx
import React from 'react';
import '../styles.css';

const Noticia = ({ titulo, subtitulo, texto, foto, categoria }) => {
    return (
        <div className={`noticia ${categoria}`}>
            <div className="texto">
                <h2 className='titutloNotica'>{titulo}</h2>
                <h3 className='subtituloNotica'>{subtitulo}</h3>
                <p className='cuerpoNoticia'>{texto}</p>
            </div>
            <div className="imagen">
                <img className='imgNoticia' src={foto} alt={titulo} />
            </div>
        </div>
    );
}

export default Noticia;
