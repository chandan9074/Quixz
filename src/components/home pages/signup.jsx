import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    state = {  }

    handleSignup=()=>{
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var con_password = document.getElementById("con_password").value;

        const fatch=()=>{
            var signupData = {
                    first_name : firstname,
                    last_name : lastname,
                    username: username,
                    email: email,
                    password:password
                }
            var config={
                headers:{'Content-Type':'application/json'}
            }
            axios.post('http://127.0.0.1:8000/accounts/signup/', signupData, config).then(response=> {
                    // setIsSignup(true)
                    // setIncorrect(false)
                })
                .catch(function(error){
                    // setIncorrect(true)
                })
        }

        if (con_password===password){
            fatch();
        }
    }

    render() { 
        return ( 
            <div>
                {/* signup part  */}
                <section>
                    <input type="text" placeholder="First name" id="firstname" required /><br />
                    <input type="text" placeholder="Last name" id="lastname" required /><br />
                    <input type="text" placeholder="Username" id="username" required /><br />
                    <input type="email" placeholder="Email" id="email" required /><br />
                    <input type="password" placeholder="Password" id="password" required /><br />
                    <input type="password" placeholder="Confurm password" id="con_password" required /><br />
                    <button onClick={this.handleSignup}>Signup</button>
                </section>
            </div>
         );
    }
}
 
export default Signup;