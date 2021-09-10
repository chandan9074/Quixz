// import types
import { All_Quiz } from "./dashboardType";

// create all quiz action

export const userQuizAction = user_quiz =>{
    return {
        type : All_Quiz,
        payload: user_quiz
    }
}