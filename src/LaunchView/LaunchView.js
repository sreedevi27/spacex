import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { Zoom } from "react-slideshow-image";

class LaunchView extends Component {
  state = {
    launch: {
      links: {
        flickr_images: [],
      },
    },
  };

  componentDidMount = () => {
    const flightNo = this.props.match.params.flight_number;
    this.getLaunch(flightNo);
  };
  getLaunch = (flightNo) => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + flightNo)
      .then((resp) => {
        this.setState({ launch: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  launchattribute = (title, value) => {
    //const value = this.state.launch[key];
    return (
      <div className="att">
        <h2>{title}</h2>
        <h2>{value}</h2>
      </div>
    );
  };
  render() {
    const zoomOutProperties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true,
    };

    const hasImg = this.state.launch.links.flickr_images.length > 0;

    return (
      <div className="launchatt">
        {this.launchattribute("Mission name:", this.state.launch.mission_name)}
        {this.launchattribute(
          "Flight Number:",
          this.state.launch.flight_number
        )}
        {this.launchattribute("Details:", this.state.launch.details)}
        {hasImg && (
          <Zoom {...zoomOutProperties}>
            {this.state.launch.links.flickr_images.map((each, index) => (
              <img
                key={index}
                alt="Flicker image"
                style={{ width: "100%" }}
                src={each}
              />
            ))}
          </Zoom>
        )}
      </div>
    );
  }
}

export default LaunchView;
