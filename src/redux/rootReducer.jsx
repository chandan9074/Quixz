// import pakages 
import { combineReducers } from "redux";

// import reducers
import { userLoginTokenReducer } from "./homepage/homepageReducer";
import { userQuizReducers } from "./dashboardPage/dashboardReducer";

// create combineReducer
export const rootReducer = combineReducers({
    userLoginTokenReducer: userLoginTokenReducer,
    userQuizReducers : userQuizReducers,
})