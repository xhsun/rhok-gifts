import CompanyFields from './CompanyFields.js'
import IndividualFields from './IndividualFields.js'
import DonationFields from './DonationFields.js'
import { Row, Col, Input } from 'react-materialize';
import React, { Component } from 'react';

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
                <div>
                    <Row>
                        <a name='orgType' onClick={(e)=>this.handleChange(1)} >Individual Donation</a>
                        <a name='orgType' onClick={(e)=>this.handleChange(2)}>Organizational Donation</a>
                    </Row>
                </div>
                <Row>
                  <Col s={5}>{form}</Col>
                  <Col s={7}><DonationFields/></Col>

                </Row>

            </div>
        );
    }
}

export default Donor;
