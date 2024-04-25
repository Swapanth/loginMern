import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import GrassIcon from "@mui/icons-material/Grass";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import "./Login.css";
import dp from './Login.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box className="login-container">
      <div className="left-section">
        <Typography variant="h6" className="company-name" style={{marginLeft:'80px'}}>
          <GrassIcon />
          &nbsp;Swapanth Ind.pvt.lmt
        </Typography>
        <Typography variant="h5" className="login-heading" style={{marginLeft:'80px'}} >
          Login to Your Account
        </Typography>
        <br/>

        <div className="social-buttons">
          <button className="social-button google">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google Icon"
              className="social-icon"
            />
            Google
          </button>

          <button className="social-button facebook">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
              alt="Facebook Icon"
              className="social-icon"
            />
            Facebook
          </button>
        </div>
        <div className="separator">
          <hr />
          <p>Or</p>
          <hr />
        </div>

        <div className="input-field">
  <TextField
    type="text"
    placeholder="Enter your email"
    className="text-field"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircleIcon className="input-icon" />
        </InputAdornment>
      ),
    }}
  />
</div>

<div className="input-field">
  <TextField
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    className="text-field"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <KeyIcon className="input-icon" />
        </InputAdornment>
      ),
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleTogglePasswordVisibility}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</div>

        <input type="checkbox" className="remember-checkbox" />
        <Typography variant="p" className="remember-text" style={{marginLeft:'-20px'}}>
          Remember Me
        </Typography>
        <Typography variant="p" className="forgot-password"style={{marginLeft:'200px'}} >
          Forgot Password
        </Typography>

        <button variant="contained" className="login-button">
          Login
        </button>
        <br />
        <br />
        <Typography variant="p" className="signup-text" style={{marginLeft:'190px'}}>
          Don't have an account?{" "}
          <a href="#" className="signup-link">
            Sign Up
          </a>
        </Typography>

      </div>

      <div className="right-section">
      <img  style={{width:"100%",height:"100%"}} src={dp} alt="My Image" />

      </div>
    </Box>
  );
}

export default Login;
