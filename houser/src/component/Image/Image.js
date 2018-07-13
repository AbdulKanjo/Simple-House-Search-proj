import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImage } from "../../ducks/reducer";
class Image extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     Image: ""
  //   };
  // }
  // handleMortgage(Image) {
  //   this.setState({ Image: Image });
  // }
  render() {
    const { updateImage } = this.props;
    return (
      <div>
        <h1> image url </h1>
        <Link to="/wizard">Previous Step</Link>
        <input
          // value={this.state.Image}
          className="Image"
          placeholder="Image"
          onChange={e => updateImage(e.target.value)}
        />
        <Link to="/rent">next</Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Image: state.Image
  };
}
export default connect(
  mapStateToProps,
  { updateImage }
)(Image);
