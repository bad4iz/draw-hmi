import React, { Component } from 'react';
import './App.css';

import HMI from "./layout/HMI";

class App extends Component {
    componentDidMount() {
    }

  render() {
    return (
      <div className="App">
        <HMI/>
      </div>
    );
  }
}

export default App;
