import React, { Component } from 'react';
import { Row, Input, Col, Button, Icon} from 'react-materialize';

class DonationFields  extends Component {
  render() {
    return (
      <div>
        <Row>
        <Input placeholder="Donation Details" s={12} label="Donation Details" />
        <Input s={3} type='select' label="Donation Category">
            <option value='1'>Donation Category</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
        </Input>
        <Input s={3} type='select' label="Item Type">
            <option value='1'>Item Category</option>
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
        </Row>
      </div>
    );
  }
}

export default DonationFields;
