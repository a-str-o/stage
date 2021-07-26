import React, { Component } from 'react';
import logo from './assets/logo_loading.json';
import './Loader.scss';
import LottieAnimation from './Lottie';



export class Loading extends Component {
    render() {
        return (
            <div className="loader--container-small">
               {/* <Loader type="ball-grid-pulse" />  */}
               <LottieAnimation lotti={logo} height={75} width={75} />

            </div>
        )
    }
}

export default Loading
