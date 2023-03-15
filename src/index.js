import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import catsReducer from "./features/cats/catsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware))

const store = createStore(catsReducer, composedEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >, 
    document.getElementById("root")
);
