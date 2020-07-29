import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroVideo from '../pages/Cadastro/Video';
import CadastroCategory from '../pages/Cadastro/Categoria';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategory} />
    </Switch>
);

export default Routes;
