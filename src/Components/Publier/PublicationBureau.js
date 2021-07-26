import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../assets/theme'
import { connect } from "react-redux";

export class PublicationBureau extends Component {
    constructor(props) {
        super(props);
        this.state = {
     
        }
    }
    setNextStep(step){
            this.props.dispatch(
                {
                    type: "SET_PUBLICATION_ACTIVE_STEP",
                    data: step
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
            <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <div className="register-prev-button-container">
                    <button onClick={() => { this.setPreviousStep(0) }} className="register-prev-button btn btn-primary prev-button">Etape précédente</button>
                </div>


            </Grid>
            <Grid item xs={12} md={6}>

                <div className="register-next-button-container">
                    <button onClick={() => { this.setNextStep(2) }} className="register-prev-button btn btn-primary next-button">Valider</button>
                </div>
            </Grid>

        </Grid>
        )
    }
}
const mapStateToProps = (state) => {

    const listing = state.listing;
    return {
      listing : listing
    };
};
export default connect(mapStateToProps)(PublicationBureau);



