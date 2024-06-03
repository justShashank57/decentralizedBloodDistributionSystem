import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MuiAlert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Select from "@mui/material/Select";
import { Snackbar } from "@mui/material";
import State_City_Data from "../../services/data.js";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import validator from "validator";
import "./signup.css";

export default function SignUp({ handleChange }) {
  const navigate = useNavigate();
  const { data } = State_City_Data;
  const stateList = Object.keys(data);
  const [cityList, setCityList] = useState([]);
  const [errorMsg, setErrorMsg] = useState();
  const [Detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    bloodGroup: "",
    whatsAppNumber: "",
    gender: "",
    username: "",
    password: "",
  });
  const [Address, setAddress] = useState({
    streetAddress: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [Spinner, setSpinner] = useState(false);
  const [Alert, setAlert] = useState(false);
  const BlTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const Genders = ["Male", "Female", "Unisex"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    if (!validator.isEmail(Detail.username)) {
      setSpinner(false);
      setAlert(true);
      setErrorMsg("Enter valid Email address");
    } else if (
      !validator.isStrongPassword(Detail.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setSpinner(false);
      setAlert(true);
      setErrorMsg(
        "Password must be 8 character and contain atleast one Lowercase, Uppercase, Numbers & Symbols"
      );
    } else {
      //submit query
      setSpinner(false);
      console.log(Detail, Address);
      const response = await axios.post("http://localhost:8000/user/signup", {
        firstName: Detail.firstName,
        lastName: Detail.lastName,
        bloodGroup: Detail.bloodGroup,
        number: Detail.whatsAppNumber,
        gender: Detail.gender,
        email: Detail.username,
        password: Detail.password,
        street: Address.streetAddress,
        state: Address.state,
        city: Address.city,
        pin: Address.pincode,
        isDonor: true,
      });

      const responseData = await response.data;
      if (responseData.message === "User signed up successfully.") {
        handleChange(responseData.user);
        navigate("/");
      }
      console.log(responseData);
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
      <div className="register">
        <div className="form">
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
          <Card
            sx={{
              width: "fit-content",
              padding: "15px",
              boxShadow:
                "0 -5px 5px -5px rgba(0, 0, 0, 0.2), 0 5px 5px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <CardContent>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 2, width: "400px" }}
              >
                <div className="form_grid">
                  <TextField
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value={Detail.firstName}
                    style={{ gridArea: "FName" }}
                    autoComplete="given-name"
                    color="error"
                    fullWidth
                    required
                    autoFocus
                    onChange={(e) => {
                      e.persist();
                      setDetail({ ...Detail, [e.target.name]: e.target.value });
                    }}
                  />

                  <TextField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={Detail.lastName}
                    style={{ gridArea: "LName" }}
                    autoComplete="family-name"
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => {
                      e.persist();
                      setDetail({ ...Detail, [e.target.name]: e.target.value });
                    }}
                  />

                  <FormControl style={{ gridArea: "BlGroup" }} fullWidth>
                    <InputLabel id="Bl-group-label" color="error" required>
                      Blood Group
                    </InputLabel>
                    <Select
                      id="Blood-group"
                      labelId="Bl-group-label"
                      name="bloodGroup"
                      label="Blood Group*"
                      value={Detail.bloodGroup}
                      color="error"
                      required
                      onChange={(e) => {
                        setDetail({
                          ...Detail,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      {BlTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    id="whatsAppNumber"
                    label="Whatsapp Number"
                    name="whatsAppNumber"
                    value={Detail.whatsAppNumber}
                    style={{ gridArea: "Phone" }}
                    color="error"
                    autoComplete="phone"
                    fullWidth
                    required
                    onChange={(e) => {
                      setDetail({ ...Detail, [e.target.name]: e.target.value });
                    }}
                  />

                  <FormControl style={{ gridArea: "Gender" }} fullWidth>
                    <InputLabel id="gender-label" color="error" required>
                      Gender
                    </InputLabel>
                    <Select
                      id="Gender"
                      labelId="gender-label"
                      name="gender"
                      label="Gender*"
                      value={Detail.gender}
                      color="error"
                      required
                      onChange={(e) => {
                        setDetail({
                          ...Detail,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      {Genders.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    id="username"
                    label="Email Address"
                    name="username"
                    value={Detail.username}
                    style={{ gridArea: "Email" }}
                    autoComplete="email"
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => {
                      e.persist();
                      setDetail({ ...Detail, [e.target.name]: e.target.value });
                    }}
                  />

                  <TextField
                    id="address"
                    label="Street Address"
                    name="streetAddress"
                    value={Address.lin1}
                    style={{ gridArea: "Address" }}
                    autoComplete="address"
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => {
                      e.persist();
                      setAddress({
                        ...Address,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />

                  <FormControl style={{ gridArea: "State" }} fullWidth>
                    <InputLabel id="State-label" color="error" required>
                      State
                    </InputLabel>
                    <Select
                      id="state"
                      labelId="State-label"
                      name="state"
                      label="State*"
                      value={Address.state}
                      color="error"
                      required
                      onChange={(e) => {
                        setAddress({
                          ...Address,
                          [e.target.name]: e.target.value,
                        });
                        setCityList(data[e.target.value].cities);
                      }}
                    >
                      {stateList.map((name, key) => (
                        <MenuItem key={key} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl style={{ gridArea: "City" }} fullWidth>
                    <InputLabel id="City-label" color="error" required>
                      City
                    </InputLabel>
                    <Select
                      id="city"
                      labelId="City-label"
                      name="city"
                      label="City*"
                      value={Address.city}
                      color="error"
                      required
                      onChange={(e) => {
                        setAddress({
                          ...Address,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      <MenuItem key="default" value="Default" disabled>
                        Select City
                      </MenuItem>
                      {cityList.map((name, key) => (
                        <MenuItem key={key} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    id="pincode"
                    label="Pincode"
                    name="pincode"
                    value={Address.pincode}
                    style={{ gridArea: "Pin" }}
                    autoComplete="pincode"
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => {
                      setAddress({
                        ...Address,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />

                  <TextField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    name="password"
                    value={Detail.password}
                    style={{ gridArea: "Pass" }}
                    autoComplete="new-password"
                    color="error"
                    fullWidth
                    required
                    onChange={(e) => {
                      e.persist();
                      setDetail({ ...Detail, [e.target.name]: e.target.value });
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? (
                              <span className="material-symbols-outlined">
                                visibility_off
                              </span>
                            ) : (
                              <span className="material-symbols-outlined">
                                visibility
                              </span>
                            )}
                          </div>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="error" required />
                  }
                  label="Accept the terms and Conditions."
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    mb: 2,
                    fontSize: "15px",
                    fontWeight: "bold",
                    backgroundColor: "#c6414c",
                    ":hover": { bgcolor: "#c6414c" },
                  }}
                >
                  Sign Up
                  {Spinner && (
                    <CircularProgress
                      sx={{ ml: 2, color: "white" }}
                      size={20}
                    />
                  )}
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2" color="#c6414c">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </div>
        <div className="reg_info">
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#c6414c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "2.5rem" }}
            >
              person
            </span>
          </Avatar>
          <h3 style={{ marginBottom: "0px", color: "#c6414c" }}>
            Registration As Donor
          </h3>
          <h1 style={{ margin: "0px", fontSize: "40px" }}>
            Your Donation Can Make Someone’s Life Better
          </h1>
          <p>
            The one reason donors say they give blood is because they "want to
            help others". Enjoy the feeling of accomplishment knowing that you
            have helped to save lives. Your gift of blood may help up to three
            people.
          </p>
        </div>
      </div>
    </>
  );
}
