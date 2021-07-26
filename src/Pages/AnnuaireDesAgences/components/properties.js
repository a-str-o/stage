import React from 'react';
import PropertyBox from './propertyBox';

import pImage1 from "../images/p1.png";
import pImage2 from "../images/p2.png";
import pImage3 from "../images/p3.png";

function properties() {
    return (
        <div className="product">
            <div className="p-heading">
                <h3>Properties</h3>
                <p>jksdjskdcbsdjcbsdjcbsdjbcsdjsbhdjhcbsdjh</p>
            </div>
            <div className="product-container">
                <PropertyBox image={pImage1} name="something1" price="762378"/>
                <PropertyBox image={pImage2} name="something2" price="762378"/>
                <PropertyBox image={pImage3} name="something3" price="762378"/>

            </div>
                </div>
    )
}

export default properties
