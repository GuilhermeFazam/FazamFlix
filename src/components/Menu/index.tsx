import React from 'react';

import { Container, Nav } from './styles';

import ButtonLink from '../ButtonLink';

import Logo from '../../assets/image/logo.png';

const Menu: React.FC = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src={Logo} alt="FazamFlix" />
                </a>
                <ButtonLink className="ButtonLink" href="/">
                    Novo Video
                </ButtonLink>
            </Nav>
        </Container>
    );
};

export default Menu;
