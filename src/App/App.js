import React, { Component } from 'react';
import './App.css';
import CompanyFields from '../Form/CompanyFields.js'
import {Row, Input} from 'react-materialize';

class App extends Component {
  constructor(){
        super();
        this.state = {
          showInit:true,
          showForm: 0,
          disableRadio: ''
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
          <Row>
    <Input name='orgType' type='radio' value='Individual Donation' label='Individual Donation' onClick={this.handleIndividual} disabled=''/>
    <Input name='orgType' type='radio' value='Organizational Donation' label='Organizational Donation' onClick={this.handleCompany} disabled=''/>
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
        {this.state.showInit?this.showButtons():null}
        {form}
      </div>
    );
  }
}

export default App;
