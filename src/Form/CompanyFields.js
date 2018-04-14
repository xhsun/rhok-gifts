import React, { Component } from 'react';
import { Row, Input} from 'react-materialize';


class CompanyFields  extends Component {

  render() {
    return (
      <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input type="email" label="Email" s={12} />
            <Input label="phone" s={12} />
            <Input label="neighbour" s={12} />
            <Input label="Add Item" s={12} />
          </Row>
    );
  }
}

export default CompanyFields;
