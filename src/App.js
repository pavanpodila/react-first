import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './core/components/Background';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClockPage } from './pages/ClockPage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Background src={require('./assets/night-sky.jpg')} />

                <BrowserRouter>
                    <Fragment>
                        <Header />
                        <Switch>
                            <Route path={'/'} exact component={LandingPage} />
                            <Route
                                path={'/clock'}
                                exact
                                component={ClockPage}
                            />
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={'/'}>
                <h1 className="App-title">Welcome to React</h1>
            </Link>
        </header>
    );
}

export default App;
