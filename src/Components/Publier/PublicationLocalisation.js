import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../assets/theme'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import "./Publication.scss"
import { withRouter, Prompt } from "react-router-dom"
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl'
import Autocomplete from '@material-ui/lab/Autocomplete';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

import { GMAPS_API_KEY } from '../../Config/GMapsConfig'
import InputAdornment from '@material-ui/core/InputAdornment';
import Axios from 'axios'
const MAPBOX_TOKEN = "pk.eyJ1IjoiYmFkcmJlbGtleml6IiwiYSI6ImNraDduNjN2bDA2MGszMG5zZHRqNm5zMzIifQ.oITjlONmSiUQsFKrZfFd3w";

export class PublicationLocalisation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: this.props.listing.region,
            province: this.props.listing.province,
            commune: this.props.listing.commune,
            quartier: this.props.listing.quartier,
            adresse: this.props.listing.adresse,
            lat: this.props.listing.lat,
            lng: this.props.listing.lng,
            viewport:{latitude: this.props.listing.lat,
                longitude: this.props.listing.lng,
                transitionDuration: 1000,
                transitionInterpolator:  new FlyToInterpolator({
                    zoom: 10,
                    speed: 1,
                    screenSpeed: 1,
                    curve: 2,
                }),
                zoom: this.props.listing.zoom
                },
                transitionDuration: 1000,
                transitionOptions: {
                    zoom: 10,
                    speed: 1,
                    screenSpeed: 1,
                    curve: 2,
                },
        }
    }
    validatePublicationFields() {
        let error = false;
        if (
            this.state.region === "") {
            this.setState({ regionError: true })
            error = true
        }
        if (
            this.state.province === "") {
            this.setState({ provinceError: true })
            error = true
        }
        if (
            this.state.commune === "") {
            this.setState({ communeError: true })
            error = true
        }
        if (
            this.state.quartier === "") {
            this.setState({ quartierError: true })
            error = true
        }
        if (
            this.state.adresse === "") {
            this.setState({ adresseError: true })
            error = true
        }


        return error;
    }
    setNextStep(step) {
        let error = this.validatePublicationFields()
        if (!error) {
            this.props.dispatch(
                {
                    type: "SET_PUBLICATION_STEP_ONE",
                    data: {
                        region: this.state.region,
                        province: this.state.province,
                        commune: this.state.commune,
                        quartier: this.state.quartier,
                        adresse: this.state.adresse,
                        lat: this.state.lat,
                        lng: this.state.lng,
                    }
                }
            )
            this.props.dispatch(
                {
                    type: "SET_PUBLICATION_ACTIVE_STEP",
                    data: step
                }
            )

        }

    }
    placeMarker = (event) => {
        if (event.target.classList[0] === 'mapboxgl-ctrl-geocoder--input') {
            return;
        }
        this.props.dispatch({ type: 'UPDATE_POINTEXIST', data: true});
        const newviewPort = {
            latitude: parseFloat(event.lngLat[1]),
            longitude: parseFloat(event.lngLat[0]),
            transitionDuration: this.state.transitionDuration,
            transitionInterpolator:  new FlyToInterpolator(this.state.transitionOptions),
            zoom: 17
        }
        this.props.dispatch({ type: 'SET_MARKER_LOCATION', data: { latitude: newviewPort.latitude, longitude: newviewPort.longitude }})
        this.handleViewportChange(newviewPort);
    }

    handleViewportChange =  (viewport) => {

        this.setState({
            viewport: viewport
        });
        this.props.dispatch({ type: 'UPDATE_POSITIONSELECTED', data: false});
        this.props.dispatch({ type: 'ERASE_POINT_COVERED', data: {pointCovered : false, pointExist: true}});    
        
    }

    handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);

        this.setState({adresse: value, lat:latLng.lat, lng : latLng.lng})

        const newviewPort = {
            pitch: 0,
            zoom: 16,
            latitude: latLng.lat,
            longitude: latLng.lng
        };

        newviewPort.transitionDuration = this.state.transitionDuration;
        newviewPort.transitionInterpolator = new FlyToInterpolator(this.state.transitionOptions);

        this.props.dispatch({ type: 'SET_MARKER_LOCATION', data: { latitude: newviewPort.latitude, longitude: newviewPort.longitude }})
        this.handleViewportChange(newviewPort);
        delete Axios.defaults.headers.common["Authorization"];
        delete Axios.defaults.headers.common["authorization"];
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newviewPort.latitude},${newviewPort.longitude}&key=${GMAPS_API_KEY}`;

        Axios.get(url).then(res => {
            if (res.data.results.length > 0) {
                const data = {
                    address : res.data.results[0].formatted_address,
                    ville: res.data.results[0].address_components[2].long_name
                }
                this.setState({
                    address: res.data.results[0].formatted_address
                });
                
            }
        });
        Axios.defaults.headers.common["Authorization"]=localStorage.getItem("FBIdToken")

    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">Région</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="nature"
                                        value={this.state.region}
                                        onChange={(e) => { this.setState({ region: e.target.value }) }}
                                        label="Région"

                                    >
                                        <MenuItem value={"Casablanca-Settat"}>
                                            Casablanca-Settat</MenuItem>

                                        <MenuItem value={"Marrakech-Safi"}>
                                            Marrakech-Safi</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">Province</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="nature"
                                        value={this.state.province}
                                        onChange={(e) => { this.setState({ province: e.target.value }) }}
                                        label="Province"

                                    >
                                        <MenuItem value={"Anfa"}>
                                            Anfa</MenuItem>

                                        <MenuItem value={"Nouaceur"}>
                                            Nouceur</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" >
                                    <InputLabel id="demo-simple-select-outlined-label">Commune/Arrondissement</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        name="nature"
                                        value={this.state.commune}
                                        onChange={(e) => { this.setState({ commune: e.target.value }) }}
                                        label="Commune/Arrondissement"

                                    >
                                        <MenuItem value={"Maarif"}>
                                            Maarif</MenuItem>

                                        <MenuItem value={"Anfa"}>
                                            Anfa</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField variant="outlined" size="small" id="" label="Quartier" type="search"
                                    value={this.state.quartier}
                                    onChange={(e) => { this.setState({ ...this.state, quartier: e.target.value, quartierError: (e.target.value === "") }) }}
                                    error={this.state.quartierError}
                                    helperText={this.state.quartierError ? ("Champs requis") : ""}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField variant="outlined" size="small" id="" label="Adresse" type="search"
                                    value={this.state.adresse}
                                    onChange={(e) => { this.setState({ ...this.state, adresse: e.target.value, adresseError: (e.target.value === "") }) }}
                                    error={this.state.adresseError}
                                    helperText={this.state.adresseError ? ("Champs requis") : ""}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="map--container">
                            <p className="map-title">Cliquez sur la carte pour géolocaliser votre projet</p>
                            <ReactMapGL
                                ref={this.myMap}
                                {...this.state.viewport}
                                width="width: 100vw"
                                height="250px"
                                className="react-map-gl-custom"
                                mapStyle="mapbox://styles/badrbelkeziz/ckk6r9vo20yzr17qbv2mf76b4"
                                maxZoom={17}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                                onClick={this.placeMarker}
                                onViewportChange={(viewport) => {
                                    const { width, height, latitude, longitude, zoom } = viewport;
                                    this.setState({
                                        viewport: viewport
                                    })
                                }}
                            >
                                {this.props.listing.lng ? (
                                    <Marker
                                        longitude={this.props.listing.lng}
                                        latitude={this.props.listing.lat}>
                                        <div className="markerpoint-desktop"></div>

                                    </Marker>
                                ) : ('')}
                            </ReactMapGL>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={6}>

                    <Grid item xs={12} md={12}>

                        <div className="register-next-button-container register-first-next">
                            <button onClick={() => { this.setNextStep(1) }} className="register-prev-button btn btn-primary next-button">{this.state.lookingForPC ? (<CircularProgress size={20} />) : "Valider"}</button>
                        </div>
                    </Grid>

                </Grid>
            </ThemeProvider>
        )
    }
}
const mapStateToProps = (state) => {

    const listing = state.listing;
    return {
        listing: listing
    };
};
export default connect(mapStateToProps)(withRouter(PublicationLocalisation));
