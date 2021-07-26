import React from 'react'

function AgenceBox(props) {
    return (
        <div className="a-box" key={props.key}>
            <div className="a-b-img">
                <img src={props.image} alt=""/>
            </div>
            <div className="a-b-text">
                <h5>{props.name}</h5>
                <a href="#" className="agent-btn">Learn More</a>
                {/* `https://www.agenz.ma/agence-immobiliere/casablanca/${this.state.agenceTransaction.nameEntreprise.replace(/\ /g, '-').replace(/\é/g, 'e').replace(/\ô/g, 'o')}/a/${this.state.agenceTransaction.responsable}`, */}
            </div>
        </div>
    )
}

export default AgenceBox
