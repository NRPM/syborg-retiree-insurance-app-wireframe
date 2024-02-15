import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const OtpAuth = ({ setCurrentHref }) => {
  useEffect(() => {
    setCurrentHref(location.href);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "0",
      }}
    >
      <Box
        sx={{
          padding: "5rem",
          border: "1px solid lightGrey",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ maxHeight: "3rem", marginBottom: "1rem", display: "flex" }}>
          <TextField
            sx={{ width: "15rem" }}
            size="small"
            fullWidth
            //   value={profileData.associationName}
            label="Mobile number"
            //   name="associationName"
            //   onChange={handleChange}
          />
          <Button variant="outlined" size="small">
            send otp
          </Button>
        </Box>
        <Box sx={{ maxHeight: "3rem" }}>
          <TextField
            sx={{ width: "20.5rem" }}
            size="small"
            fullWidth
            //   value={profileData.associationName}
            label="OTP"
            type="password"
            //   name="associationName"
            //   onChange={handleChange}
          />
        </Box>
        <Box sx={{ maxHeight: "2rem" }}>
          <Link to="/">
            <Button
              variant="contained"
              sx={{ marginLeft: "15rem", marginTop: "1rem" }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default OtpAuth;
