import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import configReducer from "./configReducer";
import appReducer from "./appReducer";

const rootReducers = combineReducers({
  configReducer,
  appReducer,
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
