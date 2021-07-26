import React, { Component } from 'react';
import PublicationStepper from '../../Components/Publier/PublicationStepper';
import './Publier.scss';

export class Publier extends Component {
    state = {
        activeStep : 2
    }
    changeStep= () =>{
        this.setState()
    }
    render() {
        return (
            <PublicationStepper activeStep={this.state.activeStep} />
        )
    }
}

export default Publier
