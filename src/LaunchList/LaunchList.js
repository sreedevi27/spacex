import React, { Component } from "react";
import Launch from "../Lanch/Launch";
import "./style.css";

class LaunchList extends Component {
  render() {
    return (
      <div className="launchlist">
        <Launch
          banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
          title="FalconSat"
          launchDate="2006-03-25T10:30:00+12:00"
          description=" First launch under USAF's OSP 3 launch contract. First SpaceX launch
      to put a satellite to an orbit with an orbital altitude many times
      the distance to the Moon: Sun-Earth libration point L1. The first
      stage made a test flight descent to an over-ocean landing within 10
      m (33 ft) of its intended target."
        />

        <Launch
          banner="https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
          title="TalconSat"
          launchDate="2007-03-25T10:30:00+12:00"
          description=" Second launch under USAF's OSP 3 launch contract. First SpaceX launch
      to put a satellite to an orbit with an orbital altitude many times
      the distance to the Moon: Sun-Earth libration point L1. The first
      stage made a test flight descent to an over-ocean landing within 10
      m (33 ft) of its intended target."
        />
      </div>
    );
  }
}

export default LaunchList;
