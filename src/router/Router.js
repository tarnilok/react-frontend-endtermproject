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

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/react-frontend-milestoneproject" component={Main}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/newcard" component={NewCard}/>
          <Route exact path="/detailscard" component={DetailsCard}/>
          <Route exact path="/updatecard" component={UpdateCard}/>
        </Switch>
    </Router>
  );
};

export default RouterApp;
