import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PricingAreaButtons from '../PricingRightSide/PricingAreaButtons';
import PricingAreaHouse from '../PricingRightSide/PricingAreaHouse';


export class AdressePrice extends Component {
    render() {
        return (
            <div className="adresse-price--container">

                <PricingAreaHouse />
                <PricingAreaButtons />
                
            </div>
        )
    }
}

export default withRouter(AdressePrice)
