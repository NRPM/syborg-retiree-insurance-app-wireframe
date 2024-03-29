import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Modal,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Link } from "react-router-dom";
import PaymentModal from "./PaymentModal";

const Payment = ({ profileData, currentHref, setCurrentHref }) => {
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  function handlePaymentModeChange(e) {
    setModeOfPayment(e.target.value);
  }

  useEffect(() => {
    setCurrentHref(location.href);
    console.log("paymeny");
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
      }}
    >
      <Box
        sx={{
          maxHeight: "3rem",
          // marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Payment
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "2rem" }} />
      <Box
        sx={{
          maxHeight: "3rem",
          // marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "green" }}>
          Amount to be paid: ₹54,612
        </Typography>
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={modeOfPayment}
            label="Mode of payment"
            onChange={handlePaymentModeChange}
            size="small"
            // sx={{ height: "3rem" }}
          >
            <MenuItem value={"cheque"} sx={{ maxHeight: "2rem" }}>
              Cheque
            </MenuItem>
            <MenuItem value={"NEFT"} sx={{ maxHeight: "2rem" }}>
              NEFT
            </MenuItem>
            <MenuItem value={"UPI"} sx={{ maxHeight: "2rem" }}>
              UPI
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem" }}>
        <TextField sx={{ width: "100%" }} size="small" label="Bank name" />
      </Box>
      {/* <Box sx={{ maxHeight: "3rem", marginTop: "1rem" }}>
        <TextField sx={{ width: "30rem" }} size="small" label="IFSC code" />
      </Box> */}
      <Box sx={{ maxHeight: "2rem", marginLeft: "auto", marginTop: "1rem" }}>
        {/* <Link to="/paymentsuccessful"> */}
        <Button
          variant="contained"
          onClick={() => {
            setConfirmModalOpen(true);
          }}
        >
          Proceed to payment
        </Button>
        {/* </Link> */}
      </Box>
      <PaymentModal
        open={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        profileData={profileData}
        checked={checked}
        handleChange={handleChange}
        isButtonVisible={true}
      />
    </Box>
  );
};

export default Payment;
