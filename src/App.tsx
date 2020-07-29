import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseTemplate from './components/BaseTemplate';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <BaseTemplate>
            <main>
                <Routes />
            </main>
        </BaseTemplate>
        <GlobalStyle />
    </Router>
);

export default App;
