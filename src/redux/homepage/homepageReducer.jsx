// import action type
import { Login_User } from "./homepageType";

// create initialstate
const initialstate = {
    user: null
}

// create reducer
export const userLoginTokenReducer = (state = initialstate, action) =>{
    switch(action.type){
        case Login_User:
            return{ 
                ...state,  
                user: action.payload  
            }                         
        default: return state     
    }
}