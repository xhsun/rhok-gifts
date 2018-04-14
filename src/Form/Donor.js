import CompanyFields from './CompanyFields.js'
import IndividualFields from './IndividualFields.js'
import { Row, Col, Input } from 'react-materialize';
import React, { Component } from 'react';

class Donor extends Component {
    constructor() {
        super();
        this.state = {
            showForm: 0,
            disableRadio: ''
        }
    }

    handleIndividual = () => {
        this.setState({ disableRadio: 'disabled' });
        this.setState({ showForm: 1 });
    }
    handleCompany = () => {
        this.setState({ disableRadio: 'disabled' });
        this.setState({ showForm: 2 });
    }

    showButtons() {
        return (
            <div>
                <Row>
                    <Input s={2} name='orgType' type='radio' value='Individual Donation' label='Individual Donation' onClick={this.handleIndividual} disabled={this.state.disableRadio} />
                    <Input s={2} name='orgType' type='radio' value='Organizational Donation' label='Organizational Donation' onClick={this.handleCompany} disabled={this.state.disableRadio} />
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