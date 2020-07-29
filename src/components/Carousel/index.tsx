import React from 'react';
import {
    VideoCardGroupContainer,
    VideoCardList,
    Title,
    ExtraLink,
} from './styles';
import VideoCard from '../VideoCard';

interface CarouselProps {
    ignoreFirstVideo?: boolean;
    category: any;
}

interface CategoryProps {
    titulo: string;
    cor: string;
    link_extra: {
        url: string;
        text: string;
    };
    videos: any[];
}

const Carousel: React.FC<CarouselProps> = ({ ignoreFirstVideo, category }) => {
    const { videos, titulo, cor, link_extra } = category;
    return (
        <VideoCardGroupContainer>
            {titulo && (
                <>
                    <Title style={{ backgroundColor: cor || 'red' }}>
                        {titulo}
                    </Title>
                    {link_extra && (
                        <ExtraLink href={link_extra.url} target="_blank">
                            {link_extra.text}
                        </ExtraLink>
                    )}
                </>
            )}
            <VideoCardList>
                {videos.map(
                    (video: { titulo: string; url: string }, index: number) => {
                        if (ignoreFirstVideo && index === 0) {
                            return null;
                        }

                        return (
                            <li key={video.titulo}>
                                <VideoCard
                                    videoTitle={video.titulo}
                                    videoURL={video.url}
                                    categoryColor={cor}
                                />
                            </li>
                        );
                    },
                )}
            </VideoCardList>
        </VideoCardGroupContainer>
    );
};

export default Carousel;
