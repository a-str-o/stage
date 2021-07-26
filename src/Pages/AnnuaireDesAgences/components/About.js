import React from 'react'
import aboutImage from '../images/about.png';


function About() {
    return (
        <div className="about"> 
            <div className="about-model">
                <img src={aboutImage} alt="about image"/>
            </div>
            <div className="about-text">
                <h2>We are the Best <br/>Real estate company</h2>
                <p>akjsjhasjhasbsajhbsajhbjhsbjhabsjhas
                    jkasbjkhabhjsbjhbasjhbajhsbjhasbjhasbjhsbjshbjas
                    kjasbjhsbjhsbajhsbjbajhsbjhabjhsbjashbkajshaksjhbasljbasjbask
                    kasbkjabslasbaskjbasjkbasljbasksblaksjbasjkbasljbakjsbas</p>
                <button>Details</button>
            </div>
        </div>
    )
}

export default About
