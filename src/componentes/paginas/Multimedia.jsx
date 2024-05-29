/*Multimedia.jsx*/
import '../styles.css'
import TitlePages from '../reusables/TitlePages'
import BotonHome from '../reusables/BotonHome';
import ReproductorAudio from '../reusables/ReproductorAudio';
import VideoPlayer from '../reusables/VideoPlayer';

const Multimedia = () => {
    return (
        <div className='fondoPaginas2'>
            <div className='componenteTitlePaginas'>
                <BotonHome />
                <div className='margenTitulo'><TitlePages text="MULTIMEDIA" /></div>
            </div>
            <ReproductorAudio text="HIMNO UD PARC" />
            <VideoPlayer />
        </div >
    );
}

export default Multimedia;
