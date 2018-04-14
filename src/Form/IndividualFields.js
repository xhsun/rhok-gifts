import React, { Component } from 'react';
import { Row, Input, Col, Button, Icon} from 'react-materialize';


class IndividualFields  extends Component {

  render() {
    return (

      <Row>
        <Col s={4} >
            <Input s={6} label="Contact First Name" />
            <Input s={6} label="Last Name" />
            <Input s={6} label="Street Address"/>
            <Input s={6} label="City"/>
            <Input s={6} label="Province"/>
            <Input s={6} label="Postal Code" s={6}/>          
            <Input s={6} type="email" label="Email" s={12} />
            <Input s={6} label="phone" s={12} />
            <Input s={6} label="Website"/>
            </Col>
            <Col s={8} >
            <Input placeholder="Donation Details" s={12} label="Donation Details" />
            <Input s={3} type='select' label="Donation Category">
                <option value='1'>Donation Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
          </Input>
          <Input s={3} type='select' label="Item Type">
                <option value='1'>Donation Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
          </Input>
          <Input s={3} label="Qty"/>
          <Input s={3} label="Fair Market $"/>
          <Input s={3} name='on' type='date' label="Available Date" onChange={function(e, value) {}} />
          <Input s={3} name='on' type='date' label="End Date" onChange={function(e, value) {}} />
          <Input s={3} type='select' label="Condition">
                <option value='1'>Donation Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
          </Input>
          <Input s={3} type='select' label="Delivery/Pick up">
                <option value='1'>Donation Category</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
          </Input>
          <Row><Col s={3}><Button left>Upload Picture</Button></Col></Row>

          <Row><Col s={8}><Icon small>plus_one</Icon><p>Add another donation</p></Col>
</Row>
        <Row><Col s={9}><Input placeholder="$xxxxxx.yy" s={12} label="Total Donation Faie Market Value" /></Col><Col s={3}><Button>Submit</Button></Col></Row>


            </Col>
        </Row>

    );
  }
}

export default IndividualFields;
