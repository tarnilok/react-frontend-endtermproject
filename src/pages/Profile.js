import React, {useContext} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { AuthContext } from "../context/AuthContext";
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
    const {currentUser} = useContext(AuthContext)
    console.log("profile :", currentUser)
    return (
        
            <Container component="main" maxWidth="xs" sx={{ borderRadius: 3, boxShadow: "10px 10px 4px grey", backgroundColor: "#fff", mt: 5, border: 1 }}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
        <Typography sx={{fontSize:"25px", mt: "1rem", fontFamily:"Girassol", fontWeight: "bold", color:"#046582"}}>{`─── PROFILE ───`}</Typography>
        <Box component="form"  id="myForm" sx={{ mt: 3, p:1, method: "POST" }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField  fullWidth  autoComplete="fname" name="title" value={currentUser.displayName}  id="title"  variant="standard" label="Name" disabled/></Grid>
              {/* <Grid item xs={1} sm={2}><EditIcon   sx={{ "&:hover": { cursor: "pointer" }}} /></Grid> */}
              {/* onClick={(e) => {console.log("e:", e.target.parentNode.childNodes[0].childNodes[1].childNodes[0].setAttribute("disabled", false))}} */}
            
            <Grid item xs={12}>
              <TextField fullWidth id="email" variant="standard" label="Email Address" name="email" value={currentUser.email}  autoComplete="email" disabled/>
            </Grid>
            {/* <Grid item xs={12}>
              <TextField  fullWidth  id="password" variant="standard" label="Password" name="password" disabled />
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Container>
       
    )
}

export default Profile
