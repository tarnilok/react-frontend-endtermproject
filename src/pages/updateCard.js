import React, {useContext, useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import updateData from "../assets/updateData.png";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { addInfo, editHandler } from "../auth/firebase";

const UpdateCard = () => {
  const history = useHistory()
  const {currentUser, cardDetail} = useContext(AuthContext)
  console.log("from cardetail: ", cardDetail)
  console.log("from currentuser: ", currentUser)
  const [changeValue, setChangeValue] = useState()

  // const initialValue = {title: "", url: "", content: ""}
  
const handleChange = (e) => {
    console.log("1--", e.target)
    setChangeValue(e.target.value)
    console.log("2--", e.target.value)
}
  
  const handleChangeInfoSubmit = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.log("currentuser: ", currentUser.metadata.creationTime )
    const {title, url, content} = e.target
    const today = new Date().toISOString().slice(0,10)
    editHandler({...cardDetail, title: title.value, url: url.value, content: content.value, date: today})
    e.target.reset()
    history.push("/")
  }
  return (
    <Container component="main" maxWidth="sm" sx={{ borderRadius: 3, boxShadow: "10px 10px 4px grey", backgroundColor: "#fff", mt: 5, border: 1 }}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
        <Avatar src={updateData} alt="signup" sx={{ width: 150, height: 150, borderRadius: 0 }} />
        <Typography sx={{fontSize:"25px", mt: "1rem", fontFamily:"Girassol", fontWeight: "bold", color:"#046582"}}>{`── UPDATE THE CARD ──`}</Typography>
        <Box component="form"  onSubmit={handleChangeInfoSubmit} id="myForm" sx={{ mt: 3, method: "POST" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField autoComplete="fname" name="title" value={cardDetail.title} onChange={handleChange} fullWidth id="title" variant="filled" label="Title" required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="url" variant="filled" value={cardDetail.url} label="Image URL" name="url" autoComplete="url" required/>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={10} id="content" value={cardDetail.content} variant="filled" label="Content" name="content" required />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: "#046582", "&:hover": { bgcolor: "#808080" }, fontWeight: "bold" }}>
            UPDATE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdateCard;
