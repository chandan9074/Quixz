// import action type
import { Login_User } from "./homepageType";

// create homepage action
export const login_user = token =>{
    return{
        type:Login_User,
        payload: token
    }   
}