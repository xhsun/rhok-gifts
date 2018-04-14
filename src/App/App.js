import React, { Component } from 'react';
import './App.css';
import CompanyFields from '../Form/CompanyFields.js'
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
