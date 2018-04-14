import React, { Component } from 'react';
import './App.css';
import CompanyFields from '../Form/CompanyFields.js'
import {Button, Modal} from 'react-materialize';

class App extends Component {
  constructor(){
        super();
        this.state = {
          showInit:true,
          showForm: 0
        }
    }

    handleIndividual=()=>{
      this.setState({showInit: false});
        this.setState({showForm: 1});
    }
    handleCompany=()=>{
      this.setState({showInit: false});
        this.setState({showForm: 2});
    }

    showButtons(){
      return (
        <div>
          <Button onClick={this.handleIndividual}>Individual</Button>
          <Button onClick={this.handleCompany}>Company</Button>
        </div>

      );
    }

  render() {
    const current = this.state.showForm;
    var form=null;
    switch (current) {
      case 1: //show individual form
        //TODO need individual form
        break;
      case 2://show company form
        form=(<CompanyFields/>);
        break;
      default://don't show form
        form=null;

    }
    return (
      <div className="App">
        <Modal header='Donate' trigger={<Button>Donate</Button>}>
          {this.state.showInit?this.showButtons():null}
          {form}
        </Modal>
      </div>
    );
  }
}

export default App;
