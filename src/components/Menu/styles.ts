import styled from 'styled-components';

export const Container = styled.header``;

export const Nav = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    background: var(--black);
    border-bottom: 2px solid var(--primary);

    img {
        height: 40px;
        max-width: 168px;
    }

    .ButtonLink {
        color: var(--white);
        border: 1px solid var(--white);
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 24px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity 0.3s;
    }

    .ButtonLink:hover,
    .ButtonLink:focus {
        opacity: 0.5;
    }

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
        a.ButtonLink {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--primary);
            border-radius: 0;
            border: 0;
            text-align: center;
        }
    }
`;
