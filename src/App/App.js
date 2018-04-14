import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../Form/Form.js'
import {Button, Modal} from 'react-materialize';

class App extends Component {
  constructor(){
        super();
        this.state = {showForm:false}
    }

    handleClick=()=>{

      this.setState({showForm: true});
    }

  render() {
    return (
      <div className="App">
        <Modal header='Donate' trigger={<Button>Donate</Button>}>
        
        </Modal>
      </div>
    );
  }
}

export default App;
