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
      <hr style={{ margin: "0px 0px 30px 0px" }}></hr>
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
      <Modal
        open={confirmModalOpen}
        sx={{ overflow: "scroll" }}
        onClose={() => {
          setConfirmModalOpen(false);
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            maxWidth: "80rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "2rem",
            padding: "2rem",
          }}
        >
          <TableContainer
            sx={{
              borderRadius: "5px",
              backgroundColor: "white",
              border: "1px solid #ccc",
              marginTop: "1rem",
            }}
          >
            <Table
              sx={{ width: "100%" }}
              size="small"
              aria-label="simple table"
            >
              <TableBody>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Association Name
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    {profileData.associationName}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Bank Name
                  </TableCell>
                  <TableCell align="left"> {profileData.bankName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    PF No. / Employee ID
                  </TableCell>
                  <TableCell align="left"> {profileData.employeeId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Retiree Name
                  </TableCell>
                  <TableCell align="left"> {profileData.retireeName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Gender
                  </TableCell>
                  <TableCell align="left"> {profileData.gender}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Date of Birth
                  </TableCell>
                  <TableCell align="left"> {profileData.dateOfBirth}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Address
                  </TableCell>
                  <TableCell align="left"> {profileData.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Email
                  </TableCell>
                  <TableCell align="left"> {profileData.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Mobile Number
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    {profileData.mobileNumber}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Number of Handicapped Children
                  </TableCell>
                  <TableCell align="left">
                    {" "}
                    {profileData.numberOfHandicappedChildren}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Spouse
                  </TableCell>
                  <TableCell align="left">{"Yes"}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Spouse Name
                  </TableCell>
                  <TableCell align="left">Spouse Name</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Spouse Gender
                  </TableCell>
                  <TableCell align="left">Female</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Spouse Date of Birth
                  </TableCell>
                  <TableCell align="left"> 28-08-1960</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Nominee Name
                  </TableCell>
                  <TableCell align="left"> Nominee Name</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Nominee Date of Birth
                  </TableCell>
                  <TableCell align="left"> 28-08-1960</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ width: "30%", fontWeight: "bold" }}
                  >
                    Relation of nominee
                  </TableCell>
                  <TableCell align="left"> Wife</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <FormGroup>
            <FormControlLabel
              required
              checked={checked}
              onChange={handleChange}
              control={<Checkbox />}
              sx={{ marginLeft: "auto" }}
              label="I have verified that all the information displayed above is correct."
            />
          </FormGroup>
          <Link to="/paymentsuccessful">
            <Button
              sx={{ position: "relative", left: "90%" }}
              variant="contained"
              disabled={!checked}
              onClick={() => {
                setConfirmModalOpen(true);
              }}
            >
              Proceed
            </Button>
          </Link>
        </Box>
      </Modal>
    </Box>
  );
};

export default Payment;
