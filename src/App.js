// import pakages
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";


// importing component 
import './App.css';
import { store } from "./redux/store";
import Home from './components/home pages/home';
import Dashboard from './components/dashboard page/dashboard';

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/:str" exact component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
