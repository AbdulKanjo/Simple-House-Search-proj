const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  Image: "",
  mortgage: "",
  rent: ""
};
const update_name = "update_val";
const update_address = "update_address";
const update_city = "update_city";
const update_state = "update_state";
const update_zip = "update_zip";
const update_Image = "update_Image";
const update_mortgage = "update_mortgage";
const update_rent = "update_rent";

function reducer(state = initialState, action) {
  switch (action.type) {
    case update_name:
      return Object.assign({}, state, { name: action.payload });
    case update_address:
      return Object.assign({}, state, { address: action.payload });
    case update_city:
      return Object.assign({}, state, { city: action.payload });
    case update_state:
      return Object.assign({}, state, { state: action.payload });
    case update_zip:
      return Object.assign({}, state, { zip: action.payload });
    case update_Image:
      return Object.assign({}, state, { Image: action.payload });
    case update_mortgage:
      return Object.assign({}, state, { mortgage: action.payload });
    case update_rent:
      return Object.assign({}, state, { rent: action.payload });

    default:
      return state;
  }
}
export function updateName(name) {
  return {
    type: update_name,
    payload: name
  };
}
export function updateAddress(address) {
  return {
    type: update_address,
    payload: address
  };
}
export function updateCity(city) {
  return {
    type: update_city,
    payload: city
  };
}
export function updateState(state) {
  return {
    type: update_state,
    payload: state
  };
}
export function updateZip(zip) {
  return {
    type: update_zip,
    payload: zip
  };
}
export function updateImage(Image) {
  return {
    type: update_Image,
    payload: Image
  };
}
export function updateMortgage(mortgage) {
  return {
    type: update_mortgage,
    payload: mortgage
  };
}
export function updateRent(rent) {
  return {
    type: update_rent,
    payload: rent
  };
}
export default reducer;
