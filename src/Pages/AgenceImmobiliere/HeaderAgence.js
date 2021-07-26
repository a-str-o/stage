import React from 'react';
import './AgenceImmobiliere.scss'

function HeaderAgence() {
    return (
        <div className="container">
            <div className="text-title">
                <h1>Trouvez une agence immobilière pour votre projet</h1>
            </div>
            <div className="container-block">
                <div className="header-container">
                    <h6>Ville ou code postal</h6>
                    <input />
                </div>
                <div className="header-container">
                    <h6>ou</h6>
                </div>
                <div className="header-container">
                    <h6>Nom de l'agence</h6>
                    <input />
                </div>
                <div className="header-container">
                    <button className="button">Rechercher</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderAgence;
