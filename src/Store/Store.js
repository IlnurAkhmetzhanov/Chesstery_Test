import React, { component } from "react";
import {combineReducers, createStore} from "redux";
import {cabinetReducer} from "./CabinetReducer";
let reducers=combineReducers({cabinetData:cabinetReducer});

 let store=createStore(reducers);
export default store;