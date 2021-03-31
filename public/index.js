import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@redux/configureStore";
import { ErrorBoundry } from "@components/error-boundry";
import App from "@components/app";
import './styles/styles.scss'
import registerServiceWorker from '../src/registerServiceWorker'

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
registerServiceWorker();