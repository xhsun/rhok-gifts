import React, { Component } from 'react';
import { Row, Input, Col, Button, Icon} from 'react-materialize';


class IndividualFields  extends Component {
  render() {
    return (
      <Row>
        <Input s={6} label="Contact First Name" />
        <Input s={6} label="Last Name" />
        <Input s={6} label="Street Address"/>
        <Input s={6} label="City"/>
        <Input s={6} label="Province"/>
        <Input s={6} label="Postal Code" s={6}/>
        <Input s={6} type="email" label="Email" s={12} />
        <Input s={6} label="phone" s={12} />
        <Input s={6} label="Website"/>
      </Row>
    );
  }
}

export default IndividualFields;
