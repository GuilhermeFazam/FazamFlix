import React from 'react';
import VideoIframeResponsive from '../VideoIframeResponsive';
import {
    BannerMainContainer,
    ContentAreaContainer,
    WatchButton,
    Item,
    Title,
    Description,
} from './styles';

interface BannerMainProps {
    videoTitle: string;
    videoDescription: string;
    url: string;
}

function getYouTubeId(youtubeURL: string): string {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

const BannerMain: React.FC<BannerMainProps> = ({
    videoTitle,
    videoDescription,
    url,
}) => {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <Item>
                    <Title>{videoTitle}</Title>

                    <Description>{videoDescription}</Description>
                </Item>

                <Item>
                    <VideoIframeResponsive youtubeID={youTubeID} />
                    <WatchButton>Assistir</WatchButton>
                </Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    );
};

export default BannerMain;
