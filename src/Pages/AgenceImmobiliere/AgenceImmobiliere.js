import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom'
import './AgenceImmobiliere.scss'

import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Footer from '../../Components/Footer/Footer';

class AgenceImmobiliere extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>Agence Immobiliere</title>
            </Helmet>
            <HeroSection />
            <Cards />
            <Footer />
            </>
        );
    }
}

export default withRouter(AgenceImmobiliere);
