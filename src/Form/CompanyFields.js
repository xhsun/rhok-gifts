import React, { Component } from 'react';
import { Button, Icon, Row, Input, Card, Col, Autocomplete } from 'react-materialize';
import './Form.css'


class CompanyFields extends Component {

  render() {
    return (
        <Card className="form-card-organization" title= 'Donation Information'>
            <Row>
                <Input s={12} label="Organization Name" validate><Icon>business</Icon></Input>

                <Row>
                  <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
                  <Input s={6} label="Last Name"  validate><Icon>account_circle</Icon></Input>
                </Row>

                <Input s={8} label="Address" validate><Icon>home</Icon></Input>
                <Input s={4} label="Postal Code"/>

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

                <Input s={12} label="Website" validate><Icon>language</Icon></Input>
                <Input s={12} label="Email" validate><Icon>email</Icon></Input>
                <Input s={12} label="Phone" validate><Icon>phone</Icon></Input>

                <Col s={12} className="yonistest"><span class="card-title grey-text text-darken-4 question">Has your organization donated before?</span></Col>

                <Row >
                <Col s={3} offset='s3'><Input name='donated-yes' type='checkbox' value='1' label='Yes' /></Col>
                <Col s={3} ><Input name='donated-yes' type='checkbox' value='0' label='No' defaultValue='checked' /></Col>

                </Row>
            </Row>
        </Card>
    );
  }
}

export default CompanyFields;
