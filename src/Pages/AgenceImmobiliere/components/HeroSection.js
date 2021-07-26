import React from 'react';
import '../AgenceImmobiliere.scss'
import { Button } from './Button';
import './HeroSection.css';
import Vid from '../videos/video-1.mp4';
import Vid2 from '../videos/video-2.mp4';
import Vid3 from '../videos/casa.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={Vid} autoPlay loop muted />
      <h1>Trouvez une agence immobilière</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
