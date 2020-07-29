import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

interface VideoProps {
    youtubeID: string;
}

const VideoIframeResponsive: React.FC<VideoProps> = youtubeID => {
    const urlIframe = `https://www.youtube.com/embed/${youtubeID.youtubeID}?autoplay=0&mute=1`;
    return (
        <VideoContainer>
            <ResponsiveIframe
                title="Titulo do Iframe"
                src={urlIframe}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    );
};

export default VideoIframeResponsive;
