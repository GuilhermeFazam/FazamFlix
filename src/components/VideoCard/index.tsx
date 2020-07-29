import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL: string): string {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

interface VideoCardProps {
    videoTitle: string;
    videoURL: string;
    categoryColor: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
    videoTitle,
    videoURL,
    categoryColor,
}) => {
    const imageVideo = getYouTubeId(videoURL);
    return (
        <VideoCardContainer
            url={`https://img.youtube.com/vi/${imageVideo}/hqdefault.jpg`}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={videoTitle}
        />
    );
};

export default VideoCard;
