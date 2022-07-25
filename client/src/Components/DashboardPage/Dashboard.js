import React, { Component } from "react";
import HeaderInDashboard from "../HeaderInDashboard/HeaderInDashboard";
import SidePanelInDashboard from "../SidePanelInDashboard/SidePanelInDashboard";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="backgroundDiv">
        <div
          className="container-fluid"
          style={{ padding: "0px", margin: "0px", height: "100%" }}
        >
          <div
            className="row"
            style={{ padding: "0px", margin: "0px", height: "10%" }}
          >
            <div
              className="col-md-12"
              style={{ padding: "0px", margin: "0px", height: "100%" }}
            >
              <HeaderInDashboard />
            </div>
          </div>
          <div
            className="row"
            style={{ padding: "0px", margin: "0px", height: "90%" }}
          >
            <div
              className="col-md-2"
              style={{ padding: "0px", margin: "0px", height: "100%" }}
            >
              <SidePanelInDashboard />
            </div>
            <div
              className="col-md-8"
              style={{ padding: "0px", margin: "0px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
