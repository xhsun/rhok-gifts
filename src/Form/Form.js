import React, { Component } from 'react';
import { Button, Modal} from 'react-materialize';
import './Form.css';
import CompanyFields from './CompanyFields.js'


class Form extends Component {
  constructor(){
        super();
        this.state = {showForm:false}
    }

    handleClick=()=>{
      this.setState({showForm: true});
    }

  render() {
    return (
      <Modal
   id='foo'
   header='Modal Header'>
   Lorem ipsum dolor sit amet
 </Modal>

 <Button onClick={this.handleClick}>Donate</Button>
 {this.state.showForm?<Form />:null}

 <div>

  <Modal
    id='foo'
    header='Modal Header'>
    Lorem ipsum dolor sit amet
  </Modal>
</div>;



    );
  }
}

export default Form;
