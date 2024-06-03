import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import axios from "axios";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import validator from "validator";
import "./login.css";

export default function Login({ handleChange }) {
  const navigate = useNavigate();
  const [errorMsg, seterrorMsg] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [Alert, setAlert] = useState(false);
  const [Spinner, setSpinner] = useState(false);
  const [Users, setUsers] = useState({
    username: "",
    password: "",
  });

  // const handleFormChange = (e) => {
  //   setUsers({ ...Users, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Users);
    setSpinner(false);
    const response = await axios.post("http://localhost:8000/user/login", {
      email: Users.username,
      password: Users.password,
    });

    const responseData = await response.data;
    if (responseData.message === "User logged in successfully!") {
      handleChange(responseData.existingUser);
      navigate("/");
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div id="bg-container">
        <div className="login-container">
          <Snackbar
            open={Alert}
            autoHideDuration={10000}
            onClick={handleCloseAlert}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ mt: 6 }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              severity="error"
              sx={{ width: "100%" }}
            >
              {errorMsg}
            </MuiAlert>
          </Snackbar>
          <Card sx={{ width: "fit-content", padding: "15px" }}>
            <CardContent>
              <Avatar sx={{ width: 80, height: 80, bgcolor: "#c6414c" }}>
                <span
                  class="material-symbols-outlined"
                  style={{ fontSize: "2.5rem" }}
                >
                  lock
                </span>
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bolder" }}
              >
                LOG IN
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Email Address"
                  name="username"
                  color="error"
                  onChange={(e) => {
                    e.persist();
                    setUsers({ ...Users, [e.target.name]: e.target.value });
                  }}
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  color="error"
                  onChange={(e) => {
                    e.persist();
                    setUsers({ ...Users, [e.target.name]: e.target.value });
                  }}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <span class="material-symbols-outlined">
                              visibility_off
                            </span>
                          ) : (
                            <span class="material-symbols-outlined">
                              visibility
                            </span>
                          )}
                        </div>
                      </InputAdornment>
                    ),
                  }}
                />
                <div></div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontSize: "15px",
                    fontWeight: "bold",
                    backgroundColor: "#c6414c",
                    ":hover": { bgcolor: "#c6414c" },
                  }}
                >
                  Sign In
                  {Spinner && (
                    <CircularProgress
                      sx={{ ml: 2, color: "white" }}
                      size={20}
                    />
                  )}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" color="#c6414c">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/donors/signup" variant="body2" color="#c6414c">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
