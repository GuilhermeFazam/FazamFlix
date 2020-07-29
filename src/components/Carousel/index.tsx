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
// import Slider from '../Slider';

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
            <Container>
                <SlickSlider
                    {...{
                        dots: false,
                        infinite: false,
                        speed: 300,
                        centerMode: false,
                        variableWidth: true,
                        adaptiveHeight: true,
                    }}
                >
                    {videos.map(
                        (
                            video: { titulo: string; url: string },
                            index: number,
                        ) => {
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
                        },
                    )}
                </SlickSlider>
            </Container>
        </VideoCardGroupContainer>
    );
};

export default Carousel;
