/*Multimedia.jsx*/
import '../styles.css'
import TitlePages from '../reusables/TitlePages'
import BotonHome from '../reusables/BotonHome';
import ReproductorAudio from '../reusables/ReproductorAudio';

const Multimedia = () => {
    return (
        <html className='fondoPaginas'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="MULTIMEDIA" /></div>
            </div>
            <ReproductorAudio text="HIMNO UD PARC" />
            <div>
                <video autoplay controls loop muted preload="auto" src="/video/resumen_ia_canbu.mp4" poster="/img/portadaVideos/resumenCanBu.jpeg" width="670" height="300">
                    VIDEO NO SOPORTADO
                </video>
            </div>
        </html >
    );
}

export default Multimedia;
