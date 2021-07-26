import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../assets/theme'
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import ImageUpload from './ImageUpload'

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator={" "}
        isNumericString
        suffix=" MAD"
      />
    );
  }
  
export class PublicationPrixPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prix : this.props.listing.prix
     
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
            <>
            <ThemeProvider theme={theme}>

            
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="price-input--container">
                        <div className="price-input--inner">
                            <h3 className="input--title">Prix demandé</h3>
                        </div>
                    </div>
                    <TextField InputProps={{
          inputComponent: NumberFormatCustom,
        }}  error={this.state.prixError} min="0" id="outlined-basic" label="Prix demandé" variant="outlined" onChange={(e) => {this.setState({prix: e.target.value})}}/>

                </Grid>
                <Grid item xs={12}>

                <ImageUpload folder={"images_listing"} />
                        {this.props.listing.images.length>0 ?(
                        <div className="alert--photo-container">
                            <p className="alert--photo">
                                Attention : vous avez déjà téléchargé ces images {this.props.listing.images.map((item, index) => {return (<a href={item} target="_blank" rel="noreferrer">Photo {index+1}, </a>)})} pour cette transaction. Un nouveau téléchargement écrasera ces images.
                            </p>
                        </div>) : (
                                                    <div className="alert--photo-container">
                                                </div>
)}
                </Grid>
            </Grid>
            <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                <div className="register-prev-button-container">
                    <button onClick={() => { this.setPreviousStep(this.props.listing.type) }} className="register-prev-button btn btn-primary prev-button">Etape précédente</button>
                </div>


            </Grid>
            {this.props.listing.images_ready ?
            (
            <Grid item xs={12} md={6}>

                <div className="register-next-button-container">
                    <button onClick={() => { this.setNextStep(3) }} className="register-prev-button btn btn-primary next-button">Valider</button>
                </div>
            </Grid>)
            :("")}

        </Grid>
        </ThemeProvider>
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
export default connect(mapStateToProps)(PublicationPrixPhoto);

