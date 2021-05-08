import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "Core/routes";
import Nav from "./nav";
import Split from "react-split";
import Resizable from "re-resizable";
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
              <div>
                <div className="top-bar top-bar-right-part">TEST</div>
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
