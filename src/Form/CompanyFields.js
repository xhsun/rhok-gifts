import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';


class CompanyFields  extends Component {

  render() {
    return (
      <Row>
        <Input s={12} label="Organization Name" />
        <Input s={12} label="Website"/>
        <Input s={12} label="Street Address"/>
        <Input s={3} label="City"/>
        <Input s={3} label="Province"/>
        <Input s={3} label="Postal Code"/>
        <Input s={6} label="Contact First Name" />
        <Input s={6} label="Contact Last Name" />
        <Input s={6} type="email" label="Email"/>
        <Input s={6} label="phone"/>
       </Row>
    );
  }
}

export default CompanyFields;
