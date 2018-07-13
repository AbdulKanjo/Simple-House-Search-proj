import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    this.gettingHouse();
  }
  gettingHouse() {
    axios.get("/api/houses").then(res => {
      this.setState({ houses: res.data });
    });
  }
  handleDelete(id) {
    axios.delete(`/api/house/${id}`).then(() => {
      this.gettingHouse();
    });
  }
  render() {
    let housesList = this.state.houses.map((e, i) => {
      return (
        <div key={i}>
          <div>{e.name} </div>
          <div>{e.address} </div>
          <div>{e.zip} </div>
          <div>{e.state} </div>
          <button onClick={id => this.handleDelete(e.product_id)}>
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        Dashboard
        <Link to="/wizard"> Add New Property</Link>
        <House />
        {housesList}
      </div>
    );
  }
}
export default Dashboard;
