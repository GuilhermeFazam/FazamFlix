import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Caterory: React.FC = () => {
    return (
        <Container>
            <h1>Nova Categoria</h1>
            <Link to="/">Ir para Home</Link>
        </Container>
    );
};

export default Caterory;
