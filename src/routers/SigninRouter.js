import React from 'react';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import { Inicio } from "../components/ulfix/Inicio";
import { Usuarios } from "../components/ulfix/Usuarios";

import { AppBar } from '../components/ulfix/AppBar';

export const SigninRouter = () => {
    return (
        <div className="notes__main-content">
            <Router>
                <AppBar />
                <Switch>
                    <Route path="/" exact component={Inicio}/>
                    <Route path="/users" exact component={Usuarios}/>
                </Switch>
            </Router>  
        </div>
    )
}
