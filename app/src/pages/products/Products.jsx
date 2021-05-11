import React, { Component } from "react";
import { Card } from "../../components";
import Table from "../../components/molecules/table/Table";

import Styles from "./Products.module.css";

export class Products extends Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.section}>
          <Card />
          <div className={Styles.spacer_x}></div>
          <Card />
          <div className={Styles.spacer_x}></div>
          <Card />
          <div className={Styles.spacer_x}></div>
          <Card />
        </div>
        <div className={Styles.spacer_y}></div>
        <div className={Styles.section}>
          <Table />
        </div>
      </div>
    );
  }
}

export default Products;
