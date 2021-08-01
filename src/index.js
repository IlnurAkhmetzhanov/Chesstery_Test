import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./Store/Store";
import {Provider} from "react-redux";
import {component} from "react";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>,
    rootElement
);
