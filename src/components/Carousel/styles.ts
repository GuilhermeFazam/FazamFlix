import styled from 'styled-components';

export const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        transform: initial;
        &:before {
            font-size: 30px;
        }
    }

    .slick-prev {
        left: 0;
    }
    .slick-next {
        right: 16px;
    }
`;

export const Title = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 1;
    margin-bottom: 16px;
    display: inline-block;
    padding: 20px;
    background: red;
    line-height: 1;
    border-radius: 4px;

    @media (max-width: 800px) {
        font-size: 18px;
        padding: 10px;
    }
`;

export const ExtraLink = styled.a`
    margin-left: 16px;
    text-decoration: none;
    transition: opacity 0.3s;
    &:hover,
    &:focus {
        opacity: 0.5;
    }
    @media (max-width: 800px) {
        display: block;
        margin-bottom: 16px;
        margin-left: 0;
    }
`;

export const VideoCardList = styled.ul`
    margin: 0;
    padding-left: 0;
    padding-bottom: 32px;
    list-style: none;
    display: flex;
    overflow-x: auto;
    flex-direction: row;

    li {
        margin-right: 16px;
    }
`;

export const VideoCardGroupContainer = styled.section`
    color: white;
    min-height: 197px;
    margin-left: 5%;
    margin-bottom: 16px;
`;

export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`;
