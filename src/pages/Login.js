import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import signIn from "../assets/signIn.png";
import google from "../assets/google.png";
// import {createUser, signUpProvider} from '../auth/firebase';

import { createUser } from "../auth/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Values:", values);
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Required.Enter email address"),
  password: Yup.string()
    .required("No password provided.")
});

export default function Login() {

  const formik = useFormik({ 
    initialValues,
    onSubmit,
    validationSchema
  })

  const dataSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box sx={{backgroundImage: "url(https://picsum.photos/1600/900)", width: "100%", minHeight:"92.7vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", p: 11}}>
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
            onSubmit={dataSubmit, formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  variant="filled"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange} 
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? <Box sx={{color: "red", fontSize: 13, ml:1}}>{formik.errors.email} </Box> : null}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  variant="filled"
                  autoComplete="new-password"
                  onChange={formik.handleChange} 
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? <Box sx={{color: "red", fontSize: 13, ml:1}}>{formik.errors.password} </Box> : null}
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
              <Grid item>
                <Link to="/register">Don't you have an account? Sign up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
