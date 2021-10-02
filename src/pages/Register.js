import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import signUp from "../assets/signUp.png";
import google from "../assets/google.png";
import { createUser, SignUpProvider } from "../auth/firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required.Enter First Name"),
  lastName: Yup.string().max(15, "Must be 15 characters or less").required("Required.Enter Last Name"),
  email: Yup.string().email("Invalid email address").required("Required.Enter email address"),
  password: Yup.string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d)/, "Password can only contain at least one digit and Latin letters with at least one lowercase and uppercase."),
});

export default function SignUp() {
  const history = useHistory();

  const { currentUser } = useContext(AuthContext);
  if (currentUser) history.push("/");

  const onSubmit = async (values) => {
    await createUser(values.firstName, values.lastName, values.email, values.password);
  };

  const signUpWıthGoogle = () => {
    SignUpProvider();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box
      sx={{
        backgroundImage: "url(https://picsum.photos/1600/900)",
        width: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 11,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          borderRadius: 3,
          boxShadow: "10px 10px 4px grey",
          backgroundColor: "#fff",
          mt: 10,
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
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="fname" name="firstName" fullWidth id="firstName" variant="filled" label="First Name" onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur} />
                {formik.touched.firstName && formik.errors.firstName ? <Box sx={{ color: "red", fontSize: 13, ml: 1 }}>{formik.errors.firstName} </Box> : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth id="lastName" variant="filled" label="Last Name" name="lastName" autoComplete="lname" onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
                {formik.touched.lastName && formik.errors.lastName ? <Box sx={{ color: "red", fontSize: 13, ml: 1 }}>{formik.errors.lastName} </Box> : null}
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth id="email" variant="filled" label="Email Address" name="email" autoComplete="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <Box sx={{ color: "red", fontSize: 13, ml: 1 }}>{formik.errors.email} </Box> : null}
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="password" label="Password" type="password" id="password" variant="filled" autoComplete="new-password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password ? <Box sx={{ color: "red", fontSize: 13, ml: 1 }}>{formik.errors.password} </Box> : null}
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
          </Box>
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
            onClick={signUpWıthGoogle}
          >
            WITH
            <Avatar src={google} alt="google" sx={{ borderRadius: 0, width: 70, height: 24, ml: 1 }} />
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
