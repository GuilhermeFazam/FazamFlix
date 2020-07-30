import React from 'react';
import SlickSlider from 'react-slick';
import {
    Container,
    VideoCardGroupContainer,
    Title,
    ExtraLink,
    SliderItem,
} from './styles';
import VideoCard from '../VideoCard';

interface CarouselProps {
    ignoreFirstVideo?: boolean;
    category: CategoryProps;
}

interface CategoryProps {
    titulo: string;
    cor: string;
    link_extra?: LinkExtra;
    videos: Videos[];
}
interface LinkExtra {
    text: string;
    url: string;
}

interface Videos {
    titulo: string;
    url: string;
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
            <Container>
                <SlickSlider
                    {...{
                        dots: false,
                        infinite: true,
                        speed: 300,
                        centerMode: true,
                        variableWidth: true,
                        adaptiveHeight: true,
                    }}
                >
                    {videos.map((video, index) => {
                        if (ignoreFirstVideo && index === 0) {
                            return null;
                        }

                        return (
                            <SliderItem key={video.titulo}>
                                <VideoCard
                                    videoTitle={video.titulo}
                                    videoURL={video.url}
                                    categoryColor={cor}
                                />
                            </SliderItem>
                        );
                    })}
                </SlickSlider>
            </Container>
        </VideoCardGroupContainer>
    );
};

export default Carousel;
