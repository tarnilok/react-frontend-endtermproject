import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteHandler } from "../auth/firebase";

const DetailsCard = () => {
  const { cardDetail, currentUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Grid display="flex" justifyContent="center">
      <Box maxWidth="md" sx={{ borderRadius: 3, boxShadow: "10px 10px 4px grey", backgroundColor: "#fff", mt: 15 }}>
        <Box sx={{ backgroundColor: "#E9E9E9" }}>
          <Grid component="img" src={cardDetail?.url} width="100%" borderRadius="10px 10px 0 0" maxHeight="400px" sx={{ objectFit: "fill" }} />
          <Typography margin={1} sx={{ color: "#046582", fontFamily: "Girassol", fontWeight: "bolder", textTransform: "uppercase" }}>
            {cardDetail.title}
          </Typography>
          <Typography variant="subtitle2" paddingX={1}>
            {cardDetail.date}
          </Typography>
          <Grid paddingX={1} height="auto">
            {cardDetail.content}
          </Grid>
        </Box>
        <Grid marginX={1} marginTop={1.1}>
          <AccountBoxIcon color="inherit" sx={{ fontSize: "40px", verticalAlign: "-15px" }} />
          <Typography display="inline" marginLeft={1}>
            {cardDetail.email}
          </Typography>
        </Grid>
        <Grid marginX={1.5} marginY={1.2}>
          <FavoriteIcon sx={{ fontSize: "30px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#CC0000" } }} />
          <CommentIcon sx={{ marginX: "7px", fontSize: "27px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#046582" } }} />
          <ShareIcon sx={{ fontSize: "30px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#FBD601" } }} />
          {currentUser.email === cardDetail.email ? (
            <ButtonGroup variant="contained" size="large" sx={{ display: "flex", justifyContent: "center", p: "10px" }}>
              <Button color="secondary" startIcon={<UpdateIcon color="primary" />} onClick={() => history.push("/updatecard")}>
                Update
              </Button>
              <Button
                color="primary"
                endIcon={<DeleteIcon color="secondary" />}
                onClick={() => {
                  deleteHandler(cardDetail.id);
                  history.push("/");
                }}
              >
                Delete
              </Button>
            </ButtonGroup>
          ) : null}
        </Grid>
      </Box>
    </Grid>
  );
};

export default DetailsCard;
