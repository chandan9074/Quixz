// import action type
import { All_Quiz } from "./dashboardType";

// create initial state 

const initialState = {
    user_quizes: ""
}

// create reducers 

export const userQuizReducers = (state=initialState, action) =>{
    switch(action.type){
        case All_Quiz:
            return {
                ...state,
                user_quizes: action.payload
            }
        default: return state
    }
}