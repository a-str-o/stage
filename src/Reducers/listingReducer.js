
const listingReducer = (
    state = {
        activeStep : 0,
        pointExist: false,
        marker: null,
        positionSelected: null,
        pointExist: null,
        pointCovered: null,
        pays : "Maroc",
        region : "",
        province : "", 
        commune : "", 
        quartier : "", 
        adresse: "", 
        lat: 33.57818919660718,
        lng: -7.634373469681108,
        zoom : 12,
        type : "",
        typologie: "",
        surface: "",
        sdb: "",
        orientation: [],
        construction: "",
        balcons: "",
        cave: "",
        parking: "",
        placesparking: "",
        cheminee: "",
        calme: "",
        vueexceptionnelle: "",
        chambre_service: "",
        climatisation: "",
        ascenseur: "",
        duplex: "",
        residence_fermee: "",
        surfacebalcons: "",
        surfacecave: "",
        prix : 0,
        images : [],
        images_added: false,
        images_ready: false
      
    },
    action) => {
    switch (action.type) {
      case 'SET_PUBLICATION_ACTIVE_STEP': {
        state = {
          ...state,
          activeStep: action.data
        }
      }
      return state;
      case 'SET_PUBLICATION_STEP_ONE': {
        console.log(action.data)
        state = {
          ...state,
          region: action.data.region,
          province: action.data.province,
          commune: action.data.commune,
          quartier: action.data.quartier,
          adresse: action.data.adresse,
          lat: action.data.lat,
          lng: action.data.lng,
        }
      }
      return state;
      case 'SET_PUBLICATION_TYPE_STEP' : {
        state = {
          ...state,
          type : action.data
        }
      }
      return state;
      case 'SET_PUBLICATION_APPARTEMENT': {
        state = {
          ...state,
          typologie: action.data.typologie,
          surface: action.data.surface,
          sdb: action.data.sdb,
          orientation: action.data.orientation,
          construction: action.data.construction,
          balcons: action.data.balcons,
          cave: action.data.cave,
          parking: action.data.parking,
          placesparking: action.data.placesparking,
          cheminee: action.data.cheminee,
          calme: action.data.calme,
          vueexceptionnelle: action.data.vueexceptionnelle,
          chambre_service: action.data.chambre_service,
          climatisation: action.data.climatisation,
          ascenseur: action.data.ascenseur,
          duplex: action.data.duplex,
          residence_fermee: action.data.residence_fermee,
          surfacebalcons: action.data.surfacebalcons,
          surfacecave: action.data.surfacecave
        }
      }
      return state;

      case 'SET_PUBLICATION_STEP_TWO': {
        state = {
          ...state,
        }
      }
      case 'RESET_LISTING_STATE': {
        state = {...state}
      }
      return state;
      case 'LISTING_SET_IMAGES': {
        state = {...state, images: action.data};
        return state;
      }

      case 'LISTING_SET_IMAGES_READY': {
        state = {...state, images_ready: true};
        return state;
      }
      case 'LISTING_SET_IMAGES_ADDED': {
        state = {...state, images_added: true, images_ready: false};
        return state;
      }
      case 'LISTING_SET_NO_IMAGES_ADDED': {
        state = {...state, images_added: false};
        return state;
      }
      default:
        return state;
    }
  };
  
  export default listingReducer;
  
  