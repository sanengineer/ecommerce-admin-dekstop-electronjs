import React from "react";
import { Switch, Route } from "react-router";
import ROUTES from "Constants/routes";
import loadable from "@loadable/component";
// import Home from "../pages/home/Home";
// import Orders from "../pages/orders/Orders";
// import Products from "../pages/products/Products";
// import Categories from "../pages/categories/Categories";
// import Customers from "../pages/customers/Customers";

// Load bundles asynchronously so that the initial render happens faster
const Dashboard = loadable(() =>
  import(/* webpackChunkName: "HomeChunk" */ "Pages/dashboard/Dashboard")
);
const Orders = loadable(() =>
  import(/* webpackChunkName: "OrdersChunk" */ "Pages/orders/Orders")
);
const Customers = loadable(() =>
  import(/* webpackChunkName: "CustomersChunk" */ "Pages/customers/Customers")
);
const Products = loadable(() =>
  import(/* webpackChunkName: "ProductsChunk" */ "Pages/products/Products")
);
// const Profile = loadable(() =>
//   import(/* webpackChunkName: "ProfileChunk" */ "Pages/profile/Profile")
// );
// const Settings = loadable(() =>
//   import(/* webpackChunkName: "SettingsChunk" */ "Pages/settings/Settings")
// );
const Categories = loadable(() =>
  import(
    /* webpackChunkName: "CategoriesChunk" */ "Pages/categories/Categories"
  )
);

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard}></Route>
        <Route path={ROUTES.ORDERS} component={Orders}></Route>
        <Route path={ROUTES.CUSTOMERS} component={Customers}></Route>
        <Route path={ROUTES.PRODUCTS} component={Products}></Route>
        <Route path={ROUTES.CATEGORIES} component={Categories}></Route>
      </Switch>
    );
  }
}

export default Routes;
