// import pakages
import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Redirect
} from "react-router-dom";

// import components
import Sidebar from '../../othersComponents/sidebar/sidebar';
import { userQuizAction } from '../../redux';
import coreAxios from '../../axios';

const Dashboard=()=>{

    const token = useSelector(state =>state.userLoginTokenReducer.user);
    const user_quizs = useSelector(state =>state.userQuizReducers.user_quizes)
    const dispatch = useDispatch();
    console.log("token", token);
    useEffect(()=>{
        if(token?.user_id){
            fatch() 
        }
    }, [token])

    const fatch= () =>{

            coreAxios.get(`/quiz/quiz_view/${token.user_id}/`).then(response=>{
                dispatch(userQuizAction(response.data));
                console.log("quiz data", user_quizs[0].subject)
            })
        }
    return ( 
        <main>
            <Sidebar />
            {/* {
            user_quizs.map((quiz)=>(
                <div>{quiz.subject}</div>
            ))
            } */}
        </main>
    );
}
 
export default Dashboard;