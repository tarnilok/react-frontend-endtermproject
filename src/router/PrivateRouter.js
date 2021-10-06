import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({path, component}) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Route path={path} component={component} /> : <Redirect to="/login" />;
};

export default PrivateRouter;
