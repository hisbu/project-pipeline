import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from 'react-live-clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">selamat datang di website saya</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          test
        </p>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} />
        <h1>Terima kasih sudah mengunjungi website kami</h1>
      </div>
    );
  }
}

export default App;
