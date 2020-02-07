import React, { Component } from 'react';
import Header from './components/Header'
// import Killlog from './components/Killlog'
// import Local from './components/Local'


import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      log: [],
      captured: []
    }
  }
  render(){
    return (
      <div>
        <Header/>
      </div>
    )
  }
}

export default App;
