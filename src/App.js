import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import drawHMI from './draw';

class App extends Component {
    componentDidMount() {
        console.log(this.refs.theInput);
        drawHMI(this.refs.theInput);
        console.log('im alive');
    }


  render() {
        const myStyle = {
            position: 'absolute',
            left: '100px',
            top: '100px',
            height: '50px',
            width: '50px',
            backgroundColor: 'Green'
        };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div ref="theInput" id="elem" style={myStyle}> </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save  reload.
        </p>
      </div>
    );
  }
}

export default App;
