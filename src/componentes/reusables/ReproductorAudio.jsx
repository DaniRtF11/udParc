/* ReproductorAudio.jsx */
import '../../componentes/styles.css';

const ReproductorAudio = ({ text }) => {
    return (
        <div className='repAudioContainer'>
            <h1 className='tituloAudio'>{text}</h1>
            <div className='repAudio'>
                <audio controls className='reproductor'>
                    <source src="/audio/himno.mp3" type="audio/mpeg" />
                    AUDIO NO SOPORTADO
                </audio>
            </div>
        </div>
    );
}

export default ReproductorAudio;
