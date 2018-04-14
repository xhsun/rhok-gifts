import React, { Component } from 'react';
import './App.css';
import CompanyFields from '../Form/CompanyFields.js'
import Header        from '../Header/header.js';
import {Row, Input} from 'react-materialize';

class App extends Component {
  constructor(){
        super();
        this.state = {
          showForm: 0,
          disableRadio: ''
        }
    }

    handleIndividual=()=>{
      this.setState({disableRadio: 'disabled'});
        this.setState({showForm: 1});
    }
    handleCompany=()=>{
      this.setState({disableRadio: 'disabled'});
        this.setState({showForm: 2});
    }

    showButtons(){
      return (
        <div>
          <Row>
    <Input name='orgType' type='radio' value='Individual Donation' label='Individual Donation' onClick={this.handleIndividual} disabled={this.state.disableRadio}/>
    <Input name='orgType' type='radio' value='Organizational Donation' label='Organizational Donation' onClick={this.handleCompany} disabled={this.state.disableRadio}/>
</Row>
        </div>

      );


                // <Button onClick={this.handleIndividual}>Individual</Button>
                // <Button onClick={this.handleCompany}>Company</Button>
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

        </Modal>
      </div>
    );
  }
}

export default App;
