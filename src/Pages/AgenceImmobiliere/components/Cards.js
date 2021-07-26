import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardText from './CardText';

import Image1 from '../images/img-9.jpg';
import Image2 from '../images/img-2.jpg';
import Image3 from '../images/img-3.jpg';
import Image4 from '../images/img-4.jpg';
import Image5 from '../images/img-5.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Real Estate Agents in Casablanca!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Image1}
              text='Vous cherchez une recommandation personnalisée'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src={Image2}
              text='Vous cherchez une recommandation personnalisée'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Image3}
              text='Vous cherchez une recommandation personnalisée'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src={Image4}
              text='Vous cherchez une recommandation personnalisée'
              label='Luxury'
              path='/products'
            />
            <CardItem
              src={Image5}
              text='Vous cherchez une recommandation personnalisée'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardText
              text='Vous cherchez une recommandation personnalisée'
              paragraph='Saisissez votre adresse et découvrez les agences qui ont vendu le plus de biens proches de chez vous. En entrant les caractéristiques de votre bien, vous accéderez aux agences qui ont vendu des biens ressemblant au vôtre.'
              label='Luxury'
              path='/services'
            />
            <CardText
              text='Vous cherchez une recommandation personnalisée'
              paragraph='Saisissez votre adresse et découvrez les agences qui ont vendu le plus de biens proches de chez vous. En entrant les caractéristiques de votre bien, vous accéderez aux agences qui ont vendu des biens ressemblant au vôtre.'
              label='Luxury'
              path='/services'
            />
            <CardText
              text='Vous cherchez une recommandation personnalisée'
              paragraph='Saisissez votre adresse et découvrez les agences qui ont vendu le plus de biens proches de chez vous. En entrant les caractéristiques de votre bien, vous accéderez aux agences qui ont vendu des biens ressemblant au vôtre.'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
