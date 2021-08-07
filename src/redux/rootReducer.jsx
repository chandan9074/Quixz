// import pakages 
import { combineReducers } from "redux";

// import reducers
import { userLoginTokenReducer } from "./homepage/homepageReducer";

// create combineReducer
export const rootReducer = combineReducers({
    userLoginTokenReducer: userLoginTokenReducer
})