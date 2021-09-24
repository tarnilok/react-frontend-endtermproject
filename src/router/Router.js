import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewCard from "../pages/NewCard";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/newcard" component={NewCard}/>
        </Switch>
    </Router>
  );
};

export default RouterApp;
