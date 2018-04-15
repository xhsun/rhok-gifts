import React, { Component } from 'react';
import CompanyFields from './CompanyFields.js';
import IndividualFields from './IndividualFields.js';
import DonationFields from './DonationFields.js';
import { Row, Col, Input, Button, Breadcrumb, MenuItem } from 'react-materialize';
import "./Form.css"


class Donor extends Component {
    constructor() {
        super();
        this.state = {
            showForm: 1

        }
    }

    handleChange(value) {
        this.setState({
            showForm: value
        });
    }
    handleCompany(e) {
        this.setState({
            showForm: 2
        });
    }

    render() {
        const current = this.state.showForm;
        var form = null;
        switch (current) {
            case 1: //show individual form
                form = (<IndividualFields />);
                break;
            case 2://show company form
                form = (<CompanyFields />);
                break;
            default://don't show form
                form = null;

        }
        return (
            <div>
                <Row className="button">
                    <Col s={2}>
                        <Input name='group1' type='radio' value='1' label='Individual Donation' onClick={(e) => this.handleChange(1)} />
                    </Col>
                    <Col s={2}>
                        <Input name='group1' type='radio' value='2' label='Organizational Donation' onClick={(e) => this.handleChange(2)} />
                    </Col>
                </Row>
                <Row>
                  <Col s={5}>{form}</Col>
                  <Col s={7}><DonationFields/></Col>

                </Row>

            </div>
        );
    }
}

export default Donor;
