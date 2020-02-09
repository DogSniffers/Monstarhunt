import React, { Component } from 'react';
import Header from './components/Header'
// import Killlog from './components/Killlog'
import Locale from './components/Locale'
// import Hunter from './components/Hunter'


import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      log: [],
      captured: []
    }
  }

  renameCreature(){
    
  }
  releaseCreature(){

  }
  render(){
    return (
      <div>
        <Header/>
        {/* <Hunter/> */}
        <Locale/>
      </div>
    )
  }
}

export default App;
