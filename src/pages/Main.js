import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { useFetch } from "../auth/firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const Main = () => {
  const { cardList, isLoading } = useFetch();
  const history = useHistory();
  const { currentUser, setCardDetail } = useContext(AuthContext);

  const handleDetails = (e) => {
    setCardDetail(e);
    currentUser ? history.push("/detailscard") : alert("Please log in first to dive the deepness of my blogpage😁");
  };
  return (
    <Box sx={{ backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)", paddingY: "90px" }} minHeight="100vh">
      <Typography textAlign="center" sx={{ fontSize: "40px", fontFamily: "Girassol", fontWeight: "bolder", color: "#046582", "@media(max-width:600px)" : {fontSize: "1.7rem"} }}>{`─── DASHBOARD ───`}</Typography>

      {isLoading ? (
        <Stack sx={{ display: "flex", justifyContent: "center", mt: "50px" }} direction="row">
          <CircularProgress color="success" size="7rem" />
        </Stack>
      ) : (
        <Box>
        <Grid item  container >
          {cardList.map((item) => {
            return (
              <Box key={item?.id} width="400px" flexShrink="1"  sx={{ borderRadius: 3, boxShadow: "10px 10px 4px grey", backgroundColor: "#fff", mx:"35px", mb:"45px"}}>
                <Box variant="button" onClick={() => handleDetails(item)} sx={{ "&:hover": { cursor: "pointer" }, backgroundColor: "#E9E9E9" }}>
                  <Grid component="img" src={item?.url} width="100%" height="200px" borderRadius="10px 10px 0 0" sx={{ objectFit: "cover" }} />
                  <Typography margin={1} sx={{ color: "#046582", fontFamily: "Girassol", fontWeight: "bolder", textTransform: "uppercase", overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": "1", "-webkit-box-orient": "vertical" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" paddingX={1}>
                    {item.date}
                  </Typography>
                  <Grid paddingX={1} height={45} sx={{ overflow: "hidden", display: "-webkit-box", "-webkit-line-clamp": "2", "-webkit-box-orient": "vertical" }}>
                    {item.content}
                  </Grid>
                </Box>
                <Grid marginX={1} marginTop={1.1}>
                  <AccountBoxIcon color="inherit"  sx={{ fontSize: "40px", verticalAlign:"-15px" }} />
                  <Typography display="inline" marginLeft={1} >
                    {item.email}
                  </Typography>
                </Grid>
                <Grid marginX={1.5} marginY={1.2}>
                  <FavoriteIcon sx={{ fontSize: "30px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#CC0000" } }} />
                  <CommentIcon sx={{ marginX: "7px", fontSize: "27px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#046582" } }} />
                  <ShareIcon sx={{ fontSize: "30px", color: "#A1A1A1", "&:hover": { cursor: "pointer", color: "#B9B9B9" }, "&:active": { transform: "scale(1.2)", color: "#FBD601" } }} />
                </Grid>
              </Box>
            );
          })}
        </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Main;
