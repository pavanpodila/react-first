import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClockPage } from './pages/ClockPage';
import { NoMatchPage } from './pages/NoMatchPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <BrowserRouter>
                    <Switch>
                        <Route
                            path={'/'}
                            exact={true}
                            component={LandingPage}
                        />
                        <Route path={'/clock'} component={ClockPage} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
    );
}

export default App;
