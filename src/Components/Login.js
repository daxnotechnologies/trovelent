import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider, withStyles } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { InputAdornment, inputLabelClasses } from "@mui/material";
import { AccountCircle, Email, Lock } from "@mui/icons-material";
import { ButtonStyles } from "./styles";
import logo from "../Images/tvlon.png";

// const CssTextField = styled(TextField)({
//   '& label.Mui-focused': {
//     color: 'white',
//   },
//   '& .MuiFormLabel-root.Mui-disabled': {
//     color: 'red',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'white',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'white',
//     },
//     '&:hover fieldset': {
//       borderColor: 'white',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#DCBA57',
//     },
//   },
// });

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} width={"100px"}></img>
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "white"
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="#fff"/>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "white"
                  }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember"  color="primary"/>}
                  label="Remember me"
                  
                />
              </Grid>
              <Grid item>
                <Link style={{ color: "#DCBA57" }} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/Dashboard");
              }}
              sx={ButtonStyles}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
</ThemeProvider>
  );
}
