import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect
} from "react-router-dom";

class Login extends Component {
    state = {
        token : "",
        isLogin : false, 
        incorrect : false
    }

    // handle login part in the system 
    handleLogin= () =>{
        var self = this;
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

            axios.post('http://127.0.0.1:8000/accounts/login/', loginData, config).then(response=> {
                if(response.status===200){
                    this.setState({token:response.data});
                    this.setState({incorrect:false});
                    this.setState({isLogin:true});
                }
            })
            .catch(function(error){
                self.setState({incorrect:true})
            })
        }
        fatch();
    }

    render() {
        return (
            <main>
                {this.state.isLogin? 
                // redirect to dasboard when user is login succesfully
                <Redirect to={{pathname:`/dashboard/${this.state.token.username}`, state:{token:this.state.token}}} />:
                // login form part 
                <section>
                    <input type="text" id="username" />
                    <input type="password" id="password"/>
                    <button onClick={this.handleLogin}>Login</button>
                </section>}
            </main>
        );
    }
}

export default Login;