import { FormHelperText } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import React, { Component } from 'react';
import { connect } from "react-redux";
import './PublicationVilla.css';

export class PublicationVilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typologie: this.props.listing.typologie,
            surface: this.props.listing.surface,
            sdb: this.props.listing.sdb,
            orientation: this.props.listing.orientation,
            construction: this.props.listing.construction,
            balcons: this.props.listing.balcons,
            cave: this.props.listing.cave,
            parking: this.props.listing.parking,
            placesparking: this.props.listing.placesparking,
            cheminee: this.props.listing.cheminee,
            calme: this.props.listing.calme,
            vueexceptionnelle: this.props.listing.vueexceptionnelle,
            chambre_service: this.props.listing.chambre_service,
            climatisation: this.props.listing.climatisation,
            ascenseur: this.props.listing.ascenseur,
            duplex: this.props.listing.duplex,
            residence_fermee: this.props.listing.residence_fermee,
            surfacebalcons: this.props.listing.surfacebalcons,
            surfacecave: this.props.listing.surfacecave,

            typologieError : false,
            surfaceError : false,
            sdbError : false,
            orientationError : false,
            constructionError : false,
            balconsError : false,
            caveError : false,
            parkingError : false,
            placesparkingError : false,
            chemineeError : false,
            calmeError : false,
            vueexceptionnelleError : false,
            chambre_serviceError : false,
            climatisationError : false,
            ascenseurError : false,
            duplexError : false,
            residence_fermeeError : false,
            surfacebalconsError : false,
            surfacecaveError : false
        }
    }

    validatePublicationFields() {
        let error = false;
    
        if (this.state.typologie === "") 
        {
            this.setState({ typologieError: true })
            error = true
        }
        if (this.state.surface === "") 
        {
            this.setState({ surfaceError: true })
            error = true
        }
        if (this.state.sdb === "") 
        {
            this.setState({ sdbError: true })
            error = true
        }
        if (this.state.construction === "") 
        {
            this.setState({ constructionError: true })
            error = true
        }
        if (this.state.orientation.length == 0) 
        {
            this.setState({ orientationError: true })
            error = true
        }
        if(this.state.balcons)
        {
            if (this.state.surfacebalcons === "")
            {
                this.setState({ surfacebalconsError: true })
                error = true

            }
        }
        if(this.state.cave)
        {
            if (this.state.surfacecave === "")
            {
                this.setState({ surfacecaveError: true })
                error = true

            }
        }
        if(this.state.parking)
        {
            if (this.state.placesparking === "")
            {
                this.setState({ placesparkingError: true })
                error = true
            }
        }
        return error;
    }
    setNextStep(step) {
        let error = this.validatePublicationFields()
        if(!error){
            this.props.dispatch({
                type : "SET_PUBLICATION_VILLAS",
                data : this.state
            })
            this.props.dispatch(
                {
                    type: "SET_PUBLICATION_ACTIVE_STEP",
                    data: step
                }
            )
        }

    }
    setPreviousStep(step) {
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
    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };
    handleChangeorientation = (e) => {
        this.setState({orientation : e.target.value, orientationError : e.target.value.length==0})

    }
    handleChangeconstruction = (e) => {
        this.setState({ construction: e.target.value,constructionError : (e.target.value==="") })
    }

    render() {
        return (
        <center >
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <li className='cards__item'>
                                <TextField 
                                    variant="outlined" size="small" id="objet" label="Surface habitable" type="number"
                                    value={this.state.surface}
                                    onChange={(e) => { this.setState({ ...this.state, surface: e.target.value, surfaceError: (e.target.value === "") }) }}
                                    error={this.state.surfaceError}
                                    helperText={this.state.surfaceError ? ("Champs requis") : ""}
                                    placeholder="example : 250"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">m²</InputAdornment>,
                                        inputProps: { min: 0 }
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </li>
                            <li className='cards__item'>
                                    <TextField 
                                            variant="outlined" size="small" id="objet" label="Nombre de chambres" type="number"
                                            value={this.state.typologie}
                                            onChange={(e) => { this.setState({ ...this.state, typologie: e.target.value, typologieError: (e.target.value === "") }) }}
                                            error={this.state.typologieError}
                                            helperText={this.state.typologieError ? ("Champs requis") : ""}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">chambres</InputAdornment>,
                                                inputProps: { min: 0 }
                                            }}
                                            InputLabelProps={{ shrink: true }}
                                        />
                            </li>
                        <li className='cards__item'>
                        <TextField variant="outlined" size="small" id="objet" label="Salles de bains" type="number"
                            value={this.state.sdb}
                            onChange={(e) => { this.setState({ ...this.state, sdb: e.target.value, sdbError: (e.target.value === "") }) }}
                            error={this.state.sdbError}
                            helperText={this.state.sdbError ? ("Champs requis") : ""}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Salles de bains</InputAdornment>,
                                inputProps: { min: 0 }
                            }}
                            InputLabelProps={{ shrink: true }}
                        />
                        </li>
                    </ul>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label" >Orientation</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="orientation"
                                    multiple
                                    className="spacesVilla"
                                    renderValue={(selected) => selected.join(', ')}
                                    value={this.state.orientation}
                                    onChange={this.handleChangeorientation}
                                    label="orientation"
                                    error={this.state.orientationError}
                                >
                                    <MenuItem value={"Nord"}>
                                        <Checkbox checked={this.state.orientation.indexOf("Nord") > -1} />Nord</MenuItem>
                                    <MenuItem value={"Sud"}>
                                        <Checkbox checked={this.state.orientation.indexOf("Sud") > -1} />Sud</MenuItem>
                                    <MenuItem value={"Est"}>
                                        <Checkbox checked={this.state.orientation.indexOf("Est") > -1} />Est</MenuItem>
                                    <MenuItem value={"Ouest"}>
                                        <Checkbox checked={this.state.orientation.indexOf("Ouest") > -1} /> Ouest</MenuItem>
                                </Select>
                            </FormControl>{this.state.orientationError ? (<FormHelperText> Champs requis</FormHelperText>) : ""}
                        </li>
                        <li className='cards__item'>
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label" >Ancienneté de la construction</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="construction"
                                    className="spacesVilla"
                                    value={this.state.construction}
                                    onChange={this.handleChangeconstruction}
                                    label="construction du projet"
                                    error={this.state.constructionError}
                                >
                                    <MenuItem value={"Neuve"}>Neuve</MenuItem>
                                    <MenuItem value={"Entre 1 et 5 ans"}>Entre 1 et 5 ans</MenuItem>
                                    <MenuItem value={"Entre 6 et 10 ans"}>Entre 6 et 10 ans</MenuItem>
                                    <MenuItem value={"Entre 11 et 20 ans"}>Entre 11 et 20 ans</MenuItem>
                                    <MenuItem value={"Plus de 20 ans"}>Plus de 20 ans</MenuItem>
                                </Select>
                            </FormControl>{this.state.constructionError ? (<FormHelperText> Champs requis</FormHelperText>) : ""}
                        </li>
                    </ul>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.balcons}
                                            onChange={this.handleChange}
                                            name="balcons"
                                            color="Balcons"
                                        />
                                    }
                                    label="Balcons"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.chambre_service}
                                            onChange={this.handleChange}
                                            name="chambre_service"
                                            color="chambre_service"
                                        />
                                    }
                                    label="Chambre de service"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.cheminee}
                                            onChange={this.handleChange}
                                            name="cheminee"
                                            color="cheminee"
                                        />
                                    }
                                    label="Cheminée"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.parking}
                                            onChange={this.handleChange}
                                            name="parking"
                                            color="parking"
                                        />
                                    }
                                    label="parking titrées"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.cave}
                                            onChange={this.handleChange}
                                            name="cave"
                                            color="cave"
                                        />
                                    }
                                    label="Box titré"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.vueexceptionnelle}
                                            onChange={this.handleChange}
                                            name="vueexceptionnelle"
                                            color="vueexceptionnelle"
                                        />
                                    }
                                    label="Sans vis-à-vis"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.climatisation}
                                            onChange={this.handleChange}
                                            name="climatisation"
                                            color="climatisation"
                                        />
                                    }
                                    label="Climatisation centrale"
                                />
                            </FormGroup>
                        </li>
                        <li className='cards__item'>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.residence_fermee}
                                            onChange={this.handleChange}
                                            name="residence_fermee"
                                            color="residence_fermee"
                                        />
                                    }
                                    label="Résidence fermée"
                                />
                            </FormGroup>
                        </li>
                    </ul>
                    <ul className='cards__items'>
                    <li className='cards__item'>
                            <TextField 
                                variant="outlined" size="small" id="objet" label="Surface du balcon" type="number"
                                disabled={!this.state.balcons}
                                value={this.state.surfacebalcons}
                                onChange={(e) => { this.setState({ ...this.state, surfacebalcons: e.target.value, surfacebalconsError: (e.target.value === "") }) }}
                                error={this.state.surfacebalconsError}
                                helperText={this.state.surfacebalconsError ? ("Champs requis") : ""}
                                InputLabelProps={{ shrink: true }}
                            />
                        </li>
                        <li className='cards__item'>
                            <TextField 
                                variant="outlined" size="small" id="objet" label="Surface du box" type="number"
                                disabled={!this.state.cave}
                                value={this.state.surfacecave}
                                onChange={(e) => { this.setState({ ...this.state, surfacecave: e.target.value, surfacecaveError: (e.target.value === "") }) }}
                                error={this.state.surfacecaveError}
                                helperText={this.state.surfacecaveError ? ("Champs requis") : ""}
                                InputLabelProps={{ shrink: true }}
                            />
                        </li>
                        <li className='cards__item'>
                            <TextField 
                                variant="outlined" size="small" id="objet" label="Places de parking" type="number"
                                disabled={!this.state.parking}
                                value={this.state.placesparking}
                                onChange={(e) => { this.setState({ ...this.state, placesparking: e.target.value, placesparkingError: (e.target.value === "") }) }}
                                error={this.state.placesparkingError}
                                helperText={this.state.placesparkingError ? ("Champs requis") : ""}
                                InputLabelProps={{ shrink: true }}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        






            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div className="register-prev-button-container">
                        <motion.button 
                            initial= {{x: '-100vw'}}
                            animate={{ x: 0 }}
                            transition={{delay: 0.2}}
                            onClick={() => { this.setPreviousStep(1) }} 
                            className="register-prev-button btn btn-primary prev-button">
                            Etape précédente
                        </motion.button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="register-next-button-container">
                        <motion.button 
                            initial= {{x: '-100vw'}}
                            animate={{ x: 0 }}
                            onClick={() => { this.setNextStep(2) }} 
                            className="register-prev-button btn btn-primary next-button">
                            Valider
                        </motion.button>
                    </div>
                </Grid>
            </Grid>
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
export default connect(mapStateToProps)(PublicationVilla);
