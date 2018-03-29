import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './Clock';
import { Background } from './Background';

class App extends Component {
    render() {
        return (
            <div className="App">
                {<Header />}

                <Background image={require('./assets/night-sky.jpg')} />
                <Clock />
                <Clock format={'MMM DD, YYYY'} className="display-4" />
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
