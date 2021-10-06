import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import Profile from "../pages/Profile";
import NewCard from "../pages/NewCard";
import DetailsCard from "../pages/DetailsCard";
import UpdateCard from "../pages/UpdateCard";
import PrivateRouter from "./PrivateRouter";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route path="/react-frontend-milestoneproject" component={Main} />
        <Route path="/register" component={Register} />

        <PrivateRouter path="/profile" component={Profile} />
        <PrivateRouter path="/newcard" component={NewCard} />
        <PrivateRouter path="/detailscard" component={DetailsCard} />
        <PrivateRouter path="/updatecard" component={UpdateCard} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
