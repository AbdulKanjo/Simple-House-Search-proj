import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip,
  updateMortgage,
  updateRent,
  updateImage
} from "../../ducks/reducer";
class Rent extends Component {
  //  constructor() {
  // //   super();
  // //   this.state = {
  // //     mortgage: "",
  // //     rent: ""
  // //   };
  // this.handleInventory=this.handleInventory.bind(this);
  // }

  // handleMortgage(mortgage) {
  //   this.setState({ mortgage: mortgage });
  // }
  // handleRent(mortgage) {
  //   this.setState({ mortgage: mortgage });
  // }
  handleInventory(id) {
    axios.post("/api/houses", {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      Image: this.props.Image,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    });
  }
  render() {
    const { updateMortgage, updateRent } = this.props;
    return (
      <div>
        <h1> rent </h1>
        <Link to="/image">Previous Step</Link>
        <input
          // value={this.state.mortgage}
          className="mortgage"
          placeholder="Mortgage"
          onChange={e => updateMortgage(e.target.value)}
        />
        <input
          // value={this.state.rent}
          className="rent"
          placeholder="Rent"
          onChange={e => updateRent(e.target.value)}
        />
        <button className="button" onClick={id => this.handleInventory(id)}>
          Complete
        </button>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip,
    mortgage: state.mortgage,
    rent: state.rent,
    Image: state.Image
  };
}
export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    updateMortgage,
    updateRent,
    updateImage
  }
)(Rent);
