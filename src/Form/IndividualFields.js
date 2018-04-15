import React, { Component } from 'react';
import { Row, Input, Col, Button, Icon} from 'react-materialize';


class IndividualFields  extends Component {
  render() {
    return (
      <Row>
        <Input s={6} label="Contact First Name"><Icon tiny>account_circle</Icon></Input>
        <Input s={6} label="Last Name"><Icon tiny>account_circle</Icon></Input>
        <Input s={6} label="Street Address"><Icon tiny>home</Icon></Input>
        <Input s={6} label="City"><Icon tiny>home</Icon></Input>
        <Input s={6} label="Province"><Icon tiny>home</Icon></Input>
        <Input s={6} label="Postal Code" s={6}><Icon tiny>home</Icon></Input>       
        <Input s={6} type="email" label="Email" s={12}><Icon tiny>email</Icon></Input> 
        <Input s={6} label="phone" s={12}><Icon tiny>phone</Icon></Input> 
        <Input s={6} label="Website"><Icon tiny>web</Icon></Input> 
      </Row>
    );
  }
}

export default IndividualFields;
