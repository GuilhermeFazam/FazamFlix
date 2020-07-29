import React from 'react';

import { Container } from './styles';

interface ButtonProps {
    className: string;
    href: string;
}

const ButtonLink: React.FC<ButtonProps> = ({ className, href, children }) => {
    return (
        <Container className={className} href={href}>
            {children}
        </Container>
    );
};

export default ButtonLink;
