import React from "react";
import ContentLoader from "react-content-loader";

import Styles from "./Table.module.css";

const Row = (product) => {
  return (
    <tr>
      <td>
        <img src={product.image_featured} />
      </td>
      <td>{product.name}</td>
      <td>Rp {product.price}</td>
    </tr>
  );
};

function Table() {
  return (
    <div className={Styles.container}>
      <div>Table</div>
    </div>
  );
}

function TableMedium({ products, props }) {
  // console.log("PRODUCTS:", products.length);

  if (products === undefined || products.length === 0)
    return (
      <ContentLoader
        speed={2}
        width={900}
        height={260}
        viewBox="0 0 900 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <rect x="80" y="16" rx="3" ry="3" width="150" height="11" />
        <rect x="80" y="34" rx="3" ry="3" width="100" height="11" />
        <rect x="250" y="24" rx="3" ry="3" width="60" height="11" />
        <rect x="20" y="10" rx="3" ry="3" width="44" height="44" />
      </ContentLoader>
    );

  const rows = products.map((product) => Row(product));

  return (
    <div
      style={{ backgroundColor: "red", borderRadius: "8px", padding: "10px" }}>
      <h4>Top Selling Product </h4>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export { Table, TableMedium };
