import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import drawHMI from './draw';
import HMI from "./layout/HMI";

class App extends Component {
    componentDidMount() {
        console.log(this.refs.theInput);
        // drawHMI(this.refs.theInput);
        console.log('im alive');
    }

  render() {
        const myStyle = {
            position: 'absolute',
            left: '50%',
            top: '50%',
            height: '50px',
            width: '50px',
            backgroundColor: 'Green'
        };

    return (
      <div className="App">
          <div ref="theInput" id="elem" style={myStyle}> </div>
        <HMI/>
      </div>
    );
  }
}

export default App;
