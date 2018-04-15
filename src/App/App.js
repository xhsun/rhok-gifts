import React, { Component } from 'react';
import './App.css';
import Header        from '../Header/header.js';
import {Row, Input} from 'react-materialize';
import Donor from '../Form/Donor'

class App extends Component {
  constructor(){
        super();
    }

  render() {
    return (
      <div className="App">
       <Header />
       <Donor />
      </div>
    );
  }
}

export default App;
