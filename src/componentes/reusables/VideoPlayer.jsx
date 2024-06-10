import React from 'react';
import ReactPlayer from 'react-player';
import '../styles.css';

const VideoPlayer = ({ videos }) => {
    return (
        <div className='repVideo'>
            <div className="containderVideos">
                {videos.map((videoData, index) => (
                    <div key={index}>
                        <h2 className='tituloVideo'>{videoData.titulo}</h2>
                        <div className="videoPlayer">
                            <ReactPlayer url={videoData.video} controls light={videoData.portada} playing />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoPlayer;
