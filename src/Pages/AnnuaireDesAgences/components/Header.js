import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className='header'>
        <div className="intro">
            <p>looking for agence</p>
            <h1><span>Buy </span> and <span>Sell</span>Properties</h1>
            <p className="details">akjsjhasjhasbsajhbsajhbjhsbjhabsjhas
            jkasbjkhabhjsbjhbasjhbajhsbjhasbjhasbjhsbjshbjas
            kjasbjhsbjhsbajhsbjbajhsbjhabjhsbjashbkajshaksjhbasljbasjbask
            kasbkjabslasbaskjbasjkbasljbasksblaksjbasjkbasljbakjsbas</p>
            <a href="#" className="header-btn">Details</a>
        </div>
      </div>
    </>
  );
}

export default Header;
