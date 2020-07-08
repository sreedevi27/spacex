import React, { Component } from "react";
import "./style.css";

class Launch extends Component {
  render() {
    return (
      <div className="launch">
        <img src={this.props.banner} alt="" />
        <div className="content">
          <div className="info">
            <h1> {this.props.title}</h1>
            <h1>{this.props.launchDate}</h1>
          </div>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Launch;
