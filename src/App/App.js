import React, { Component } from 'react';
import './App.css';
import CompanyFields from '../Form/CompanyFields.js'
import IndividualFields from '../Form/IndividualFields.js'
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
    }

  render() {
    const current = this.state.showForm;
    var form=null;
    switch (current) {
      case 1: //show individual form
        form=(<IndividualFields/>);
        break;
      case 2://show company form
        form=(<CompanyFields/>);
        break;
      default://don't show form
        form=null;

    }
    return (
      <div className="App">
       <Header />
       {this.showButtons()}
       {form}
      </div>
    );
  }
}

export default App;
