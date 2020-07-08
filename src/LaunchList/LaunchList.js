import React, { Component } from "react";
import Launch from "../Lanch/Launch";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

class LaunchList extends Component {
  state = {
    launches: [],
  };
  componentDidMount = () => {
    this.getLanches();
  };
  getLanches = () => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        this.setState({ launches: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  launchList = () => {
    const launchListComp = this.state.launches.map((resp, index) => {
      return (
        <Link key={("launch +", index)} to={"/launch/" + resp.flight_number}>
          <Launch
            banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
            title={resp.mission_name}
            launchDate={resp.launch_date_local}
            description={resp.details}
          />
        </Link>
      );
    });
    return launchListComp;
  };
  render() {
    console.log(this.state.launches[0]);
    return <div className="launchlist">{this.launchList()}</div>;
  }
}

export default LaunchList;
