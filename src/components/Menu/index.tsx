import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

import Logo from '../../assets/image/logo.png';

const Menu: React.FC = () => {
    return (
        <Container>
            <Nav>
                <Link to="/">
                    <img src={Logo} alt="FazamFlix" />
                </Link>
                <Link className="ButtonLink" to="/cadastro/video">
                    Novo Video
                </Link>
            </Nav>
        </Container>
    );
};

export default Menu;
