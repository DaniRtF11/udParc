/*VideoPlayer.jsx*/
import ReactPlayer from 'react-player'
import '../../componentes/styles.css'
const VideoPlayer = () => {
    return(
        <div>
            <ReactPlayer url="/video/resumen_ia_canbu.mp4" controls light="/img/portadaVideos/resumenCanBu.jpeg" playing/>
        </div>        
    );
}

export default VideoPlayer;
