// import pakages
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// import reducer
import { rootReducer } from "./rootReducer";

// create store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))