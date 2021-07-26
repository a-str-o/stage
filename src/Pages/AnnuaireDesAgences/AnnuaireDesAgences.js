import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './AnnuaireDesAgences.css';
import About from './components/About';
import Header from './components/Header';
import HowItWork from './components/HowItWork';
import Properties from './components/properties';
import Search from './components/search';

class AnnuaireDesAgences extends Component {
  render() {
      return (
              <>  
                <Header />              
                <HowItWork />
                <About />
                <Search />
                <Properties />
                <Footer />
              </>
      )
    }
}

export default withRouter(AnnuaireDesAgences);
