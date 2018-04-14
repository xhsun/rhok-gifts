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
          disableRadio: '',
          checkInd: true
        }
    }

    handleIndividual(e){
      this.setState({
        disableRadio: 'disabled',
        showForm: 1,
        checkInd:true
      });
      console.log("Ind "+this.state.checkInd);
    }
    handleCompany(e){
      this.setState({
        disableRadio: 'disabled',
        showForm: 2,
        checkInd:false
      });
      console.log(this.state.checkInd);
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
         <div>
           <Row>
             <Input name='orgType' type='radio' label='Individual Donation' onClick={this.handleIndividual.bind(this)}/>
             <Input name='orgType' type='radio' label='Organizational Donation' onClick={this.handleCompany.bind(this)}/>
           </Row>
         </div>
         {form}
      </div>
    );
  }
}

export default App;
