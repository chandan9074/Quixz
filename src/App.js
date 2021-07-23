import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// importing component 
import Home from './components/home pages/home';
import Dashboard from './components/dashboard page/dashboard';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/:str" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
