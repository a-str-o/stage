import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { theme } from '../../assets/theme';
import './Publication.scss';


export class PublicationType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type : this.props.listing.type
     
        }
    }
    verifyType(){
        let error = false;
        if (this.state.type == ""){
            error = true
        }
        return error
    }
    setNextStep(step){
        let error = this.verifyType()
        if(!error){
            this.props.dispatch(
                {
                    type: "SET_PUBLICATION_ACTIVE_STEP",
                    data: step
                }
            )  
        }
        this.props.dispatch(
            {
                type: "SET_PUBLICATION_TYPE_STEP",
                data: this.state.type
            }
        )  
    
    }
    setPreviousStep(step){
        this.props.dispatch(
            {
                type: "SET_PUBLICATION_ACTIVE_STEP",
                data: step
            }
        )
    }
    render() {
        return (
            <center>
            <ThemeProvider theme={theme}>
            <Grid container spacing={1}>
                <Grid item xs={6} md={4}>
                    <div tabindex="1" className={`type-item--container ${this.state.type == "villa" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "villa"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                    <svg width="56px" height="56px" 
                                        viewBox="0 0 56 56" version="1.1" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        class="radio-rect__icon path__fill">
                                        <title>Hotel Particulier</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs><polygon id="path-1" 
                                        points="0 35.9854 52 35.9854 52 0.0004 0 0.0004">
                                        </polygon></defs><g id="assets" stroke="none" 
                                        stroke-width="1" fill="none" fill-rule="evenodd" 
                                        opacity="0.6"><g id="Hotel"><g id="Page-1" 
                                        transform="translate(2.000000, 11.000000)">
                                        <g id="Clip-5"></g>
                                        <path d="M48.0001,13.9854 L36.9561,13.9854 L36.0001,13.9854 L36.0001,10.9854 C36.0001,10.7384 35.9081,10.5004 35.7431,10.3164 L31.8461,5.9854 L44.4341,5.9854 L49.2331,13.9854 L48.0001,13.9854 Z M47.0001,33.9854 L36.0001,33.9854 L36.0001,15.9854 L36.9561,15.9854 L47.0001,15.9854 L47.0001,33.9854 Z M31.0001,33.9854 L31.0001,22.9854 C31.0001,21.8824 30.1031,20.9854 29.0001,20.9854 L23.0001,20.9854 C21.8971,20.9854 21.0001,21.8824 21.0001,22.9854 L21.0001,33.9854 L18.0001,33.9854 L18.0001,11.3694 L26.0001,2.4804 L34.0001,11.3694 L34.0001,33.9854 L31.0001,33.9854 Z M23.0001,33.9854 L29.0001,33.9854 L29.0001,22.9854 L23.0001,22.9854 L23.0001,33.9854 Z M5.0001,15.9854 L15.0431,15.9854 L16.0001,15.9854 L16.0001,33.9854 L5.0001,33.9854 L5.0001,15.9854 Z M7.5661,5.9854 L20.1551,5.9854 L16.2571,10.3164 C16.0911,10.5004 16.0001,10.7384 16.0001,10.9854 L16.0001,13.9854 L15.0431,13.9854 L4.0001,13.9854 L2.7661,13.9854 L7.5661,5.9854 Z M51.8571,14.4704 L45.8571,4.4704 C45.6771,4.1694 45.3521,3.9854 45.0001,3.9854 L30.0451,3.9854 L26.7431,0.3164 C26.3641,-0.1056 25.6361,-0.1056 25.2571,0.3164 L21.9551,3.9854 L7.0001,3.9854 C6.6491,3.9854 6.3231,4.1694 6.1431,4.4704 L0.1431,14.4704 C-0.0429,14.7794 -0.0479,15.1644 0.1301,15.4784 C0.3071,15.7914 0.6401,15.9854 1.0001,15.9854 L3.0001,15.9854 L3.0001,34.9854 C3.0001,35.5384 3.4481,35.9854 4.0001,35.9854 L17.0001,35.9854 L21.0001,35.9854 L21.5791,35.9854 L22.0001,35.9854 L30.0001,35.9854 L30.4211,35.9854 L35.0001,35.9854 L48.0001,35.9854 C48.5531,35.9854 49.0001,35.5384 49.0001,34.9854 L49.0001,15.9854 L51.0001,15.9854 C51.3601,15.9854 51.6921,15.7914 51.8701,15.4784 C52.0481,15.1644 52.0431,14.7794 51.8571,14.4704 L51.8571,14.4704 Z" id="Fill-1" fill="#393939"></path><path d="M9,28.9854 L12,28.9854 L12,22.9854 L9,22.9854 L9,28.9854 Z M13,20.9854 L8,20.9854 C7.448,20.9854 7,21.4324 7,21.9854 L7,29.9854 C7,30.5384 7.448,30.9854 8,30.9854 L13,30.9854 C13.552,30.9854 14,30.5384 14,29.9854 L14,21.9854 C14,21.4324 13.552,20.9854 13,20.9854 L13,20.9854 Z" id="Fill-4" fill="#393939">
                                        </path><path d="M40,28.9854 L43,28.9854 L43,22.9854 L40,22.9854 L40,28.9854 Z M39,30.9854 L44,30.9854 C44.553,30.9854 45,30.5384 45,29.9854 L45,21.9854 C45,21.4324 44.553,20.9854 44,20.9854 L39,20.9854 C38.447,20.9854 38,21.4324 38,21.9854 L38,29.9854 C38,30.5384 38.447,30.9854 39,30.9854 L39,30.9854 Z" id="Fill-6" fill="#393939"></path>
                                        <path d="M22.1265,14.4854 C22.5715,12.7624 24.1395,11.4854 26.0005,11.4854 C27.8605,11.4854 29.4285,12.7624 29.8735,14.4854 L22.1265,14.4854 Z M26.0005,9.4854 C22.6915,9.4854 20.0005,12.1764 20.0005,15.4854 C20.0005,16.0374 20.4475,16.4854 21.0005,16.4854 L31.0005,16.4854 C31.5525,16.4854 32.0005,16.0374 32.0005,15.4854 C32.0005,12.1764 29.3085,9.4854 26.0005,9.4854 L26.0005,9.4854 Z" id="Fill-7" fill="#393939"></path></g></g></g>
                                    </svg>
                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Villa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div tabindex="1"  className={`type-item--container ${this.state.type == "appartement" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "appartement"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                <svg width="56px" height="56px" viewBox="0 0 56 56" 
                                version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                class="radio-rect__icon path__stroke polyline__stroke"><title>Appartement</title><g id="assets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.6" stroke-linejoin="round"><g id="Appartment" stroke="#393939" stroke-width="2"><g id="Page-1" transform="translate(10.000000, 7.000000)"><path d="M4,41 L4,1 C4,0.448 4.448,0 5,0 L31,0 C31.553,0 32,0.448 32,1 L32,41 L21,41 L21,33 C21,32.447 20.553,32 20,32 L16,32 C15.448,32 15,32.447 15,33 L15,41 L4,41 Z" id="Stroke-1" stroke-linecap="round"></path><path d="M11,12 L11,9" id="Stroke-3" stroke-linecap="square"></path><path d="M18,12 L18,9" id="Stroke-5" stroke-linecap="square"></path><path d="M25,12 L25,9" id="Stroke-7" stroke-linecap="square"></path><path d="M11,23 L11,20" id="Stroke-9" stroke-linecap="square"></path><path d="M18,23 L18,20" id="Stroke-11" stroke-linecap="square"></path><path d="M25,23 L25,20" id="Stroke-13" stroke-linecap="square"></path><path d="M0,41 L36,41" id="Stroke-15" stroke-linecap="round"></path></g></g></g></svg>                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Appartement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div tabindex="1" className={`type-item--container ${this.state.type == "maison" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "maison"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" class="radio-rect__icon path__stroke__checked polyline__stroke__checked"><title>Maison</title><desc>Created with Sketch.</desc><g id="assets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.6" stroke-linejoin="round"><g id="House" stroke-width="2" stroke="#393939"><g id="Page-1" transform="translate(8.000000, 13.000000)"><polyline id="Stroke-1" points="-7.27196081e-14 13 20 0 40 13"></polyline><path d="M6,9 L6,31 L16,31 L16,22 C16,21.447 16.448,21 17,21 L23,21 C23.553,21 24,21.447 24,22 L24,31 L34,31 L34,9" id="Stroke-3"></path></g></g></g></svg> 
                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Maison</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div tabindex="1" className={`type-item--container ${this.state.type == "bureau" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "bureau"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" class="radio-rect__icon path__fill"><title>Loft / Atelier</title><desc>Created with Sketch.</desc><g id="assets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.6"><g id="Loft" fill="#393939"><g id="Page-1" transform="translate(3.000000, 10.000000)"><path d="M12,27.0009 L24,27.0009 L24,21.0009 L12,21.0009 L12,27.0009 Z M25,19.0009 L11,19.0009 C10.448,19.0009 10,19.4489 10,20.0009 L10,28.0009 C10,28.5539 10.448,29.0009 11,29.0009 L25,29.0009 C25.552,29.0009 26,28.5539 26,28.0009 L26,20.0009 C26,19.4489 25.552,19.0009 25,19.0009 L25,19.0009 Z" id="Fill-1"></path><path d="M40,33.0009 L40,20.0009 C40,19.4489 39.553,19.0009 39,19.0009 L31,19.0009 C30.447,19.0009 30,19.4489 30,20.0009 L30,33.0009 L6,33.0009 L6,15.7819 L44,6.2819 L44,33.0009 L40,33.0009 Z M32,33.0009 L38,33.0009 L38,21.0009 L32,21.0009 L32,33.0009 Z M49,33.0009 L46,33.0009 L46,5.0009 C46,4.6929 45.858,4.4019 45.615,4.2129 C45.372,4.0229 45.056,3.9559 44.758,4.0309 L4.757,14.0309 C4.312,14.1419 4,14.5419 4,15.0009 L4,33.0009 L1,33.0009 C0.448,33.0009 0,33.4479 0,34.0009 C0,34.5539 0.448,35.0009 1,35.0009 L5,35.0009 L31,35.0009 L39,35.0009 L45,35.0009 L49,35.0009 C49.553,35.0009 50,34.5539 50,34.0009 C50,33.4479 49.553,33.0009 49,33.0009 L49,33.0009 Z" id="Fill-3"></path><path d="M4.999,12.0009 C5.08,12.0009 5.161,11.9919 5.243,11.9709 L45.242,1.9709 C45.778,1.8369 46.104,1.2939 45.97,0.7579 C45.836,0.2229 45.293,-0.1051 44.758,0.0309 L4.757,10.0309 C4.222,10.1649 3.896,10.7079 4.03,11.2439 C4.144,11.6979 4.551,12.0009 4.999,12.0009" id="Fill-4"></path></g></g></g></svg>                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Bureau</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div tabindex="1" className={`type-item--container ${this.state.type == "commerce" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "commerce"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" class="radio-rect__icon path__fill"><title>Loft / Atelier</title><desc>Created with Sketch.</desc><g id="assets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.6"><g id="Loft" fill="#393939"><g id="Page-1" transform="translate(3.000000, 10.000000)"><path d="M12,27.0009 L24,27.0009 L24,21.0009 L12,21.0009 L12,27.0009 Z M25,19.0009 L11,19.0009 C10.448,19.0009 10,19.4489 10,20.0009 L10,28.0009 C10,28.5539 10.448,29.0009 11,29.0009 L25,29.0009 C25.552,29.0009 26,28.5539 26,28.0009 L26,20.0009 C26,19.4489 25.552,19.0009 25,19.0009 L25,19.0009 Z" id="Fill-1"></path><path d="M40,33.0009 L40,20.0009 C40,19.4489 39.553,19.0009 39,19.0009 L31,19.0009 C30.447,19.0009 30,19.4489 30,20.0009 L30,33.0009 L6,33.0009 L6,15.7819 L44,6.2819 L44,33.0009 L40,33.0009 Z M32,33.0009 L38,33.0009 L38,21.0009 L32,21.0009 L32,33.0009 Z M49,33.0009 L46,33.0009 L46,5.0009 C46,4.6929 45.858,4.4019 45.615,4.2129 C45.372,4.0229 45.056,3.9559 44.758,4.0309 L4.757,14.0309 C4.312,14.1419 4,14.5419 4,15.0009 L4,33.0009 L1,33.0009 C0.448,33.0009 0,33.4479 0,34.0009 C0,34.5539 0.448,35.0009 1,35.0009 L5,35.0009 L31,35.0009 L39,35.0009 L45,35.0009 L49,35.0009 C49.553,35.0009 50,34.5539 50,34.0009 C50,33.4479 49.553,33.0009 49,33.0009 L49,33.0009 Z" id="Fill-3"></path><path d="M4.999,12.0009 C5.08,12.0009 5.161,11.9919 5.243,11.9709 L45.242,1.9709 C45.778,1.8369 46.104,1.2939 45.97,0.7579 C45.836,0.2229 45.293,-0.1051 44.758,0.0309 L4.757,10.0309 C4.222,10.1649 3.896,10.7079 4.03,11.2439 C4.144,11.6979 4.551,12.0009 4.999,12.0009" id="Fill-4"></path></g></g></g></svg>                        
                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Commerce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={4}>
                    <div tabindex="1" className={`type-item--container ${this.state.type == "terrain" ? 'type-item-selected' : ''}`} onClick={() => { this.setState({type : "terrain"}) }}>
                        <div className="type-item--inner">
                            <div className="type-item-logo--container">
                                <div className="type-item-logo--inner">
                                <svg width="56px" height="56px" viewBox="0 0 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" class="radio-rect__icon path__fill"><title>Loft / Atelier</title><desc>Created with Sketch.</desc><g id="assets" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.6"><g id="Loft" fill="#393939"><g id="Page-1" transform="translate(3.000000, 10.000000)"><path d="M12,27.0009 L24,27.0009 L24,21.0009 L12,21.0009 L12,27.0009 Z M25,19.0009 L11,19.0009 C10.448,19.0009 10,19.4489 10,20.0009 L10,28.0009 C10,28.5539 10.448,29.0009 11,29.0009 L25,29.0009 C25.552,29.0009 26,28.5539 26,28.0009 L26,20.0009 C26,19.4489 25.552,19.0009 25,19.0009 L25,19.0009 Z" id="Fill-1"></path><path d="M40,33.0009 L40,20.0009 C40,19.4489 39.553,19.0009 39,19.0009 L31,19.0009 C30.447,19.0009 30,19.4489 30,20.0009 L30,33.0009 L6,33.0009 L6,15.7819 L44,6.2819 L44,33.0009 L40,33.0009 Z M32,33.0009 L38,33.0009 L38,21.0009 L32,21.0009 L32,33.0009 Z M49,33.0009 L46,33.0009 L46,5.0009 C46,4.6929 45.858,4.4019 45.615,4.2129 C45.372,4.0229 45.056,3.9559 44.758,4.0309 L4.757,14.0309 C4.312,14.1419 4,14.5419 4,15.0009 L4,33.0009 L1,33.0009 C0.448,33.0009 0,33.4479 0,34.0009 C0,34.5539 0.448,35.0009 1,35.0009 L5,35.0009 L31,35.0009 L39,35.0009 L45,35.0009 L49,35.0009 C49.553,35.0009 50,34.5539 50,34.0009 C50,33.4479 49.553,33.0009 49,33.0009 L49,33.0009 Z" id="Fill-3"></path><path d="M4.999,12.0009 C5.08,12.0009 5.161,11.9919 5.243,11.9709 L45.242,1.9709 C45.778,1.8369 46.104,1.2939 45.97,0.7579 C45.836,0.2229 45.293,-0.1051 44.758,0.0309 L4.757,10.0309 C4.222,10.1649 3.896,10.7079 4.03,11.2439 C4.144,11.6979 4.551,12.0009 4.999,12.0009" id="Fill-4"></path></g></g></g></svg>                             
                                </div>
                            </div>
                            <div className="type-item-value--container">
                                <div className="type-item-value--inner">
                                    <p className="type-item--valuer">Terrain</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <div className="register-prev-button-container">
                    <motion.button 
                            initial= {{x: '-100vw'}}
                            animate={{ x: 0 }} 
                            transition={{delay: 0.2}}
                        onClick={() => { this.setPreviousStep(0) }} 
                        className="register-prev-button btn btn-primary prev-button">
                        Etape précédente
                    </motion.button>
                </div>


            </Grid>
            <Grid item xs={12} md={6}>
                <div className="register-prev-button-container">
                    <motion.button 
                            initial= {{x: '-100vw'}}
                            animate={{ x: 0 }} 
                            onClick={() => { this.setNextStep(this.state.type) }} 
                            className="register-prev-button btn btn-primary prev-button">
                            Etape suivante
                    </motion.button>
                </div>


            </Grid>

        </Grid>
        </ThemeProvider>
        </center>
        )
    }
}
const mapStateToProps = (state) => {

    const listing = state.listing;
    return {
      listing : listing
    };
};
export default connect(mapStateToProps)(PublicationType);

