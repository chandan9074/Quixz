import React, { Component } from 'react';

// importing components 
import Login from './login';

class Home extends Component {
    state = {}
    render() {
        return (<div>
            <Login />
        </div>);
    }
}

export default Home;