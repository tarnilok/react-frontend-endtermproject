import React from "react";
import { useHistory } from "react-router-dom";
import richard from "../assets/richard.jpeg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import personcircle from "../assets/person-circle.svg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Box from "@mui/material/Box";
import { signOut } from "../auth/firebase";


const Navbar = () => {
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);
  
  return (
    <div style={{margin: 0}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-0">
        <div className="container-fluid py-2" style={{backgroundColor:"#046582"}}>
          <a  href="https://github.com/tarnilok" target="_blank" rel="noreferrer" title="My Github Page"><img src= {richard} alt="richard watterson" className="bg-light border border-light border-3 rounded-circle " style={{width:"60px", marginLeft:"5px"}}/></a>
          <a className="navbar-brand text-center fs-2 text-white " href="/main" onClick={(e) => {e.preventDefault(); history.push("/main")}}>
            <code>{`──── <ChrisDev/> ────`}</code>
          </a>

        {currentUser ?
        <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Box component="img" variant="contained" {...bindTrigger(popupState)} src={personcircle} alt="circle person image" sx={{padding: "1px", borderRadius:"50%", "&:hover": {cursor: "pointer" }, width:"40px", marginRight:"10px", backgroundColor: "white"}}></Box>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={() => {history.push("/profile"); popupState.close()}}>Profile</MenuItem>
              <MenuItem onClick={() => {history.push("/newcard"); popupState.close()}}>New</MenuItem>
              <MenuItem onClick={() => {signOut(); popupState.close(); history.push("/main")}}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
        :
        <div className="buttons">
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => history.push("/login")}
            >
              Sign In
            </button>

            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => history.push("/register")}
            >
              Sign Up
            </button>
          </div>
        }   
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
