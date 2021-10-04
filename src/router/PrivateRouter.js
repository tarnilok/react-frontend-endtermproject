import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = (props) => {
    const {currentUser} = useContext(AuthContext)
    
    return currentUser ? (
        <Route path={props.path} component={props.component} />
      ) : (
        <Redirect to="/login" />
      );
}

export default PrivateRouter
