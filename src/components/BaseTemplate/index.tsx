import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

const BaseTemplate: React.FC = ({ children }) => {
    return (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    );
};

export default BaseTemplate;
