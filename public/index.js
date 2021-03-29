import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { store } from "@redux/configureStore";
import { ErrorBoundry } from "@components/error-boundry";
import App from "@components/app";
import './styles/vars.scss'
import './styles/grid.scss'
import './styles/styles.scss'
import './styles/bootstrap.css'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundry>
  </Provider>
  , document.getElementById("root")
);