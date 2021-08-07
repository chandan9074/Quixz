// import action type
import { Login_User } from "./homepageType";

// create initialstate
const initialstate = {
    token: ""
}

// create reducer
export const userLoginTokenReducer = (state = initialstate, action) =>{
    switch(action.type){
        case Login_User:
            return{
                ...state, 
                token: action.payload
            }
        default: return state
    }
}