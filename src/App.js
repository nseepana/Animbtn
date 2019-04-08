import React, { Component } from 'react';
import AnimDropletButton from './component/AnimDropletButton';

import './App.css';

class App extends Component {

  handleClick= ()=>{
    
  }
  render() {
    return (
      <div className="App">
        <AnimDropletButton clickHandler={this.handleClick}/>
      </div>
    );
  }
}

export default App;
