// import pakages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Fragment, useEffect } from "react";

// importing component
import "./App.css";
import { store } from "./redux/store";
import Home from "./components/home pages/home";
import Dashboard from "./components/dashboard page/dashboard";
import { useDispatch, useSelector } from "react-redux";
import coreAxios from "./axios";
import { loadUser } from "./actions";
import { Login_User } from "./redux/homepage/homepageType";
// import Sidebar from "./othersComponents/sidebar/sidebar";

function App({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = loadUser();
    if (user) {
      dispatch({
        type: Login_User,
        payload: user,
      });
    }
  }, []);
  return <Fragment>{children}</Fragment>;
}

export default App;
