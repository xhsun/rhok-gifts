import React, { Component } from 'react';
import { Button, Icon, Row, Input, Card, Col, Autocomplete} from 'react-materialize';
import './Form.css'


class CompanyFields  extends Component {

  render() {
    return (
        <Card className="form-card" title= 'Donation Information'>
            <Row>
                <Input s={12} label="Organization Name" validate><Icon>business</Icon></Input>

                <Row>
                  <Input s={6} label="Contact First Name" validate><Icon>account_circle</Icon></Input>
                  <Input s={6} label="Last Name"  validate><Icon>account_circle</Icon></Input>
                </Row>

                <Input s={9} label="Address" validate><Icon>home</Icon></Input>
                <Input s={3} label="Postal Code"/>

                <Input s={6} label="City" validate><Icon>location_on</Icon></Input>

                <Row>
                    <Input s={6} type='select' label="Provinces" defaultValue='ON'>
                    <option value='AB'> Alberta</option>
                    <option value='ON'> Ontario</option>
                    <option value='BC'> British Colombia</option>
                    <option value='NS'> Nova Scotia</option>
                    <option value='QC'> Quebec</option>
                    <option value='SK'> Saskatchewan</option>
                    <option value='MN'> Manitoba</option>
                    <option value='NF'> Newfoundland & Labrador</option>
                    <option value='PEI'> Prince Edward Island</option>
                    </Input>
                </Row>

                <Input s={4} label="Website" validate><Icon>language</Icon></Input>
                <Input s={4} label="Email" validate><Icon>email</Icon></Input>
                <Input s={4} label="Phone" validate><Icon>phone</Icon></Input>

                <span class="card-title grey-text text-darken-4">Has your organization donated before?</span>
                <Row >
                <Col s={3} offset='s3'><Input name='donated-yes' type='checkbox' value='1' label='Yes' /></Col>
                <Col s={3} ><Input name='donated-yes' type='checkbox' value='0' label='No' defaultValue='checked' /></Col>


                </Row>

            </Row>



            <Button waves='light'>Submit</Button>
        </Card>
    );
  }
}

export default CompanyFields;
