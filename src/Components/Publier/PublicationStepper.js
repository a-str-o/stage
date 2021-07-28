import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import "./Publication.scss"

import {withRouter, Prompt} from "react-router-dom"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import PublicationLocalisation from './PublicationLocalisation'
import PublicationType from './PublicationType'
import PublicationAppartement from './PublicationAppartement'
import PublicationVilla from './PublicationVilla'
import PublicationMaison from './PublicationMaison'
import PublicationTerrain from './PublicationTerrain'
import PublicationBureau from './PublicationBureau'
import PublicationCommerce from './PublicationCommerce'
import PublicationPrixPhoto from './PublicationPrixPhoto'
import PublicationApercu from './PublicationCommerce'

export class PublicationStepper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmedNavigation : false,
            nextLocation : "/"
        }
    }
    handleBlockedNavigation = (nextLocation) => {
        this.setState({nextLocation : nextLocation.pathname})
        this.setState({confirmedNavigation : true})
        return false
      }
    componentDidMount(){
    this.props.history.listen((location,action) => {
        console.log(action, location.pathname, location.state)
        this.setState({nextLocation : location.pathname})

    })
    }
    handleClose = () => {
        this.setState({confirmedNavigation : false})
    }

    goToNextLocation = () => {
        this.props.history.push(this.state.nextLocation)
    }
    render() {
        return (
            <>
       {/* <Prompt
           message={(location,action) => {
               if(this.props.financement.activeStep === 8) {
                   this.props.dispatch({
                       type : "RESET_FINANCEMENT"
                   })
                   return true
               }
               
               return(this.handleBlockedNavigation(location)||this.state.confirmedNavigation)}}/> */}
         <Dialog
        open={this.state.confirmedNavigation}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Vous n'avez pas terminé votre demande"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Les informations entrées jusqu'à présent seront perdues
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Continuer
          </Button>
          <Button onClick={this.goToNextLocation} color="primary" autoFocus>
            Quitter
          </Button>
        </DialogActions>
      </Dialog>
         
            <div className='root-publication--container'>

                    <div className="stepper-container">
                                <center>
                                            <div className="register-title-inner">
                                                <h1 className="register-title">Publier une annonce</h1>
                                            </div>
                                            <div className="register-text-inner">
                                                <p className="register-text">L'annonce sera visible sur agenz.ma</p>
                                            </div>
                                </center>
                               

                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === 0} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationLocalisation />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === 1} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationType />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "appartement"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationAppartement />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "villa"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationVilla />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "maison"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationMaison />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "bureau"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationBureau />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "commerce"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationCommerce />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === "terrain"} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationTerrain />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === 2} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationPrixPhoto />
                                </CSSTransition>
                                <CSSTransition appear={true} unmountOnExit in={this.props.listing.activeStep === 3} timeout={{enter : 300, exit : 0}} classNames="StepperPublication">
                                    <PublicationApercu />
                                </CSSTransition>

                    </div>   
                </div>
  </>
       
        )
    }
}
const mapStateToProps = (state) => {
    const listing = state.listing;
    return {
      listing : listing
    };
};
export default connect(mapStateToProps)(withRouter(PublicationStepper));
// export default PublicationStepper