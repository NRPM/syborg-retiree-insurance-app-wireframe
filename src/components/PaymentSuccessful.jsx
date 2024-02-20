import { Box } from "@mui/material";
import React from "react";

const PaymentSuccessful = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "5rem",
          borderRadius: "10px",
        }}
      >
        <Box
          component="img"
          src="src\images\paymentSuccess.png"
          sx={{ zoom: "30%" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PaymentSuccessful;
