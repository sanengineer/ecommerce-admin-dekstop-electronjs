import React, { Component } from "react";
import { Card } from "../../components";

import Styles from "./Dashboard.module.css";

export class Dashboard extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.section}>
          <Card />
          <div className={Styles.spacer}></div>
          <Card />
          <div className={Styles.spacer}></div>
          <Card />
          <div className={Styles.spacer}></div>
          <Card />
        </div>
      </div>
    );
  }
}

export default Dashboard;
