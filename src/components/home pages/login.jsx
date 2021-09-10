// import pakages
import React, { useState } from 'react';
import axios from 'axios';
import {
  Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// importing components 
import Signup from './signup';
import { login_user } from '../../redux';
import coreAxios from '../../axios';

const Login = () => {

    const [isLogin, setIslogin] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const token = useSelector(state=>state.userLoginTokenReducer.user);
    const dispatch = useDispatch();

    // handle login part in the system 
    const handleLogin= () =>{

        // user given data 
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        const fatch = () =>{
            var loginData = {
                username: username,
                password: password
            }
            var config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const ac = new AbortController();
            coreAxios.post('/accounts/login/', loginData, config).then(response=> {
                if(response.status===200){
                    localStorage.setItem("token", response.data.token)
                    dispatch(login_user(response.data))
                    setIslogin(true);
                    setIncorrect(false);
                }
            })
            .catch(function(error){
                setIncorrect(true)
            })
            return ()=> ac.abort();
        }
        fatch();
    }

    return (
        <main>
            {isLogin? 
            // redirect to dasboard when user is login succesfully
            // <Redirect to={{pathname:`/dashboard/${this.state.token.username}`, state:{token:this.state.token}}} />:
            <Redirect to={{pathname:'/dashboard/'}} />:
            // login form part 
            <section>
                <input type="text" id="username" />
                <input type="password" id="password"/>
                <button onClick={handleLogin}>Login</button><br /><br />
            </section>}
            
            {/* calling signup part */}
            
            <Signup/>

        </main>
    );
}

export default Login;