import CompanyFields from './CompanyFields.js'
import IndividualFields from './IndividualFields.js'
import { Row, Col, Input } from 'react-materialize';
import React, { Component } from 'react';

class Donor extends Component {
    constructor() {
        super();
        this.state = {
            showForm: 0,
            disableRadio: '',
            checkInd: true
        }
    }

    handleIndividual(e) {
        this.setState({
            disableRadio: 'disabled',
            showForm: 1,
            checkInd: true
        });
        console.log("Ind " + this.state.checkInd);
    }
    handleCompany(e) {
        this.setState({
            disableRadio: 'disabled',
            showForm: 2,
            checkInd: false
        });
        console.log(this.state.checkInd);
    }

    showButtons() {
        return (
            <div>
                <Row>
                    <Input name='orgType' type='radio' label='Individual Donation' onClick={this.handleIndividual.bind(this)} />
                    <Input name='orgType' type='radio' label='Organizational Donation' onClick={this.handleCompany.bind(this)} />
                </Row>
            </div>
        );
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
                <Row >
                    <Col s={4} m={4} l={4} ><h3>Donor Information</h3></Col>
                </Row>
                {this.showButtons()}
                {form}
            </div>
        );
    }
}

export default Donor;