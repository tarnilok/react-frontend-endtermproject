import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import signUp from "../assets/signUp.png";
import google from "../assets/google.png";
import { createUser } from "../auth/firebase";


export default function SignUp() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("firstName"),
      lastname: data.get("lastName"),
    });
    createUser(
      data.get("email"),
      data.get("password"),
      data.get("firstName"),
      data.get("lastName")
    );

  };

  return (
        <Box  sx={{backgroundImage: "url(https://picsum.photos/1600/900)", width: "100%", minHeight:"92.7vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", p: 11}}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          borderRadius: 3,
          boxShadow: "10px 10px 4px grey",
          backgroundColor: "#fff"
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Avatar
            src={signUp}
            alt="signup"
            sx={{
              width: 150,
              height: 150,
              boxShadow: "4px 4px",
              border: 4,
              borderColor: "#046582",
              borderRadius: 2,
              mb: 3,
            }}
          />

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#046582",
                "&:hover": { bgcolor: "#808080" },
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                bgcolor: "#fff",
                color: "#000",
                "&:hover": { bgcolor: "#808080" },
                fontWeight: "bold",
              }}
            >
              WITH
              <Avatar
                src={google}
                alt="google"
                sx={{ borderRadius: 0, width: 70, height: 24, ml: 1 }}
              />
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Box>
  );
}
