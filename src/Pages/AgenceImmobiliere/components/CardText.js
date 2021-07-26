import React from 'react';
import { Link } from 'react-router-dom';

function CardText(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__text'>{props.paragraph}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardText;
