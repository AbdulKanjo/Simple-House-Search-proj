import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Wizard.css";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../ducks/reducer";
class Wizard extends Component {
  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip
    } = this.props;
    return (
      <div className="init-box">
        <div className="wiz">
          Wizard
          <input
            // value={this.state.name}
            className="name"
            placeholder="Name"
            onChange={e => updateName(e.target.value)}
          />
          <input
            // value={this.state.address}
            className="address"
            placeholder="address"
            onChange={e => updateAddress(e.target.value)}
          />
          <input
            // value={this.state.city}
            className="city"
            placeholder="City"
            onChange={e => updateCity(e.target.value)}
          />
          <input
            // value={this.state.state}
            className="state"
            placeholder="State"
            onChange={e => updateState(e.target.value)}
          />
          <input
            // value={this.state.zip}
            className="zip"
            placeholder="Zip"
            onChange={e => updateZip(e.target.value)}
          />
          {/* <button className="button" onClick={() => this.handleCancel()}>
          Clear
        </button> */}
          {/* <button className="button" onClick={id => this.handleInventory(id)}>
          Complete
        </button> */}
          <div className="btn-p">
            <Link to="/image">next</Link>
            <Link to="/"> Cancel</Link>
          </div>
        </div>
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
    zip: state.zip
  };
}
export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
  }
)(Wizard);
