import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';


class CompanyFields  extends Component {

  render() {
    return (
      <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input label="Company Name"/>
            <Input type="email" label="Email" s={12} />
            <Input label="phone" s={12} />
            <Input label="neighbour" s={12} />
            <Input label="Add Item" s={12} />
            <label> Donate Before ?</label>
            <Input type="radio" value="option1" checked={this.state.selectedOption === 'option1'}/>
            <Input type="radio" value="option2" checked={this.state.selectedOption === 'option2'}/>
            <Input type="radio" value="option3" checked={this.state.selectedOption === 'option3'}/>
        </Row>
    );
  }
}

export default CompanyFields;
