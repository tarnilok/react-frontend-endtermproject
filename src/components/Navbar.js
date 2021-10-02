import React from "react";
import { useHistory } from "react-router-dom";
import richard from "../assets/richard.jpeg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Box from "@mui/material/Box";
import { signOut } from "../auth/firebase";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#046582" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", paddingY: "5px", backgroundColor: "#046582" }}>
          <a href="https://github.com/tarnilok" target="_blank" rel="noreferrer" title="My Github Page">
            <img src={richard} alt="richard watterson" style={{ width: "60px", backgroundColor: "white", borderRadius: "50%" }} />
          </a>
          <Typography
            variant="h4"
            sx={{ fontFamily: "Girassol", textAlign: "center", "[theme.breakpoints.up(`sm`)]": { display: "block" }, "&:hover": { cursor: "pointer" } }}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              history.push("/");
            }}
          >
            <code style={{ color: "white" }}>{`──── <ChrisDev/> ────`}</code>
          </Typography>
          {currentUser ? (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <AccountCircle {...bindTrigger(popupState)} sx={{ fontSize: "40px", "&:hover": { cursor: "pointer" } }} />
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={() => {
                        history.push("/profile");
                        popupState.close();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        history.push("/newcard");
                        popupState.close();
                      }}
                    >
                      New
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        signOut();
                        popupState.close();
                        history.push("/");
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          ) : (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <AccountCircle {...bindTrigger(popupState)} sx={{ fontSize: "40px", "&:hover": { cursor: "pointer" } }} />
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={() => {
                        history.push("/login");
                        popupState.close();
                      }}
                    >
                      Sign In
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        history.push("/register");
                        popupState.close();
                      }}
                    >
                      Sign Up
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
