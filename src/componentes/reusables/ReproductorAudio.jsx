/*ReproductorAudio.jsx*/
import '../../componentes/styles.css'

const ReproductorAudio = ({ text }) => {
    return (
        <div className='repAudio'>
            <h1 className='tituloAudio'>{text}</h1>
            <audio controls className='reproductor'>
                <source src="/audio/himno.mp3" type="audio/mpeg" />
                AUDIO NO SOPORTADO
            </audio>
        </div>
    );
}

export default ReproductorAudio;
