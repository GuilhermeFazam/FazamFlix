import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Videos: React.FC = () => {
    return (
        <Container>
            <h1>Nova Video</h1>
            <Link to="/cadastro/categoria">Nova Categoria</Link>
        </Container>
    );
};

export default Videos;
