import React from 'react';
import Carousel from "react-elastic-carousel";
import AgenceBox from './AgenceBox';

let breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function Agence(props) {
    return (
        <div className="agent">
            <div className="b-container">
                <Carousel breakPoints={breakPoints}>
                    { props.items.map(dataa => 
                        <AgenceBox image={dataa.user_image} name={dataa.nameEntreprise}/>)}
                </Carousel>
            </div>
        </div>
    )
}

export default Agence