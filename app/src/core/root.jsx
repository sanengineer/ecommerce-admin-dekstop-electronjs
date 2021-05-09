import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "Core/routes";
import Nav from "./nav";
import Split from "react-split";
import Resizable from "re-resizable";
import { Topnav } from "../components";
import "./root.css";

class Root extends React.Component {
  render() {
    const { store, history } = this.props;

    return (
      <React.Fragment>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div className="main-grid">
              <Nav history={history}></Nav>
              <div className="main-screen">
                <Topnav />
                <Routes></Routes>
              </div>
            </div>
          </ConnectedRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default Root;
