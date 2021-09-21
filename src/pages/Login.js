import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import signIn from "../assets/signIn.png";
import google from "../assets/google.png";
// import {createUser, signUpProvider} from '../auth/firebase';




const theme = createTheme();

export default function Login() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
      <ThemeProvider theme={theme} >
      <Container
        component="main"
        maxWidth="xs"
        sx={{backgroundImage: "url(https://picsum.photos/1600/900)", borderRadius: 3, boxShadow: "10px 10px 4px grey"}}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p:2,
            
          }}
        >
          <Avatar
            src={signIn}
            alt="signin"
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
              Sign In
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
              <Grid item >
                <Link to="/register">Don't you have an account? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

