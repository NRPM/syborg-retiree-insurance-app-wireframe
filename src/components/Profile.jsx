import {
  Box,
  TextField,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Divider,
  InputLabel,
  Input,
  FormHelperText,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentModal from "./PaymentModal";

const Profile = ({
  profileData,
  setProfileData,
  currentHref,
  setCurrentHref,
}) => {
  const handleGenderChange = (e) => {
    setProfileData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleChange = (e) => {
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setCurrentHref(location.href);
  }, []);

  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

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
      <PaymentModal
        open={confirmModalOpen}
        setConfirmModalOpen={setConfirmModalOpen}
        profileData={profileData}
        isButtonVisible={false}
      />

      <Box
        sx={{
          maxHeight: "3rem",
          // marginTop: "2rem",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Profile
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={() => {
            setConfirmModalOpen(true);
          }}
        >
          <VisibilityOutlinedIcon fontSize="large" color="primary" />
        </IconButton>
      </Box>
      {/* <Divider sx={{ marginBottom: "2rem" }} /> */}
      <hr style={{ margin: "0px 0px 30px 0px" }}></hr>
      {/* <Box sx={{ maxHeight: "3rem", marginBottom: "1rem" }}>
        <FormHelperText>ASSOCIATION NAME</FormHelperText>
        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.associationName}
          // label="Association name"
          name="associationName"
          onChange={handleChange}
        />
      </Box> */}
      <Box sx={{ maxHeight: "3rem", marginBottom: "1rem" }}>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">Payment Method</InputLabel> */}
          <FormHelperText sx={{ marginLeft: "0" }}>
            ASSOCIATION NAME
          </FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={profileData.associationName}
            // label="Mode of payment"
            // onChange={handlePaymentModeChange}
            size="small"
            // sx={{ height: "3rem" }}
          >
            <MenuItem
              value={"CENTRAL BANK RETIRED EMPLOYEES ASSOCIATION - OTHERS"}
              sx={{ maxHeight: "2rem" }}
            >
              CENTRAL BANK RETIRED EMPLOYEES ASSOCIATION - OTHERS
            </MenuItem>
            <MenuItem value={"association 2"} sx={{ maxHeight: "2rem" }}>
              Association 2
            </MenuItem>
            <MenuItem value={"association 3"} sx={{ maxHeight: "2rem" }}>
              Association 3
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ maxHeight: "3rem", marginBottom: "1rem" }}>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">Payment Method</InputLabel> */}
          <FormHelperText sx={{ marginLeft: "0" }}>BANK NAME</FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={profileData.bankName}
            // label="Mode of payment"
            // onChange={handlePaymentModeChange}
            size="small"
            // sx={{ height: "3rem" }}
          >
            <MenuItem value={"Punjab National Bank"} sx={{ maxHeight: "2rem" }}>
              Punjab National Bank
            </MenuItem>
            <MenuItem value={"bank 2"} sx={{ maxHeight: "2rem" }}>
              Bank 2
            </MenuItem>
            <MenuItem value={"Bank 3"} sx={{ maxHeight: "2rem" }}>
              Bank 3
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>BANK NAME</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.bankName}
          // label="Bank Name"
          name="bankName"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>PF NUMBER / EMPLOYEE ID</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.employeeId}
          // label="PF no. / Employee ID"
          name="employeeId"
          onChange={handleChange}
        />
      </Box> */}
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>RETIREE NAME</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.retireeName}
          // label="Retiree name"
          name="retireeName"
          onChange={handleChange}
        />
      </Box>
      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <FormControl sx={{ height: "4rem" }}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            sx={{ height: "3rem" }}
            value={profileData.gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value={"male"}
              control={<Radio size="small" />}
              // sx={{ height: "4rem" }}
              label="Male"
            />
            <FormControlLabel
              value={"female"}
              control={<Radio size="small" />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>DATE OF BIRTH</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.dateOfBirth}
          // label="Date of Birth"
          name="dateOfBirth"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>ADDRESS</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.address}
          // label="Address"
          name="address"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>EMAIL</FormHelperText>

        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.email}
          // label="Email"
          name="email"
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <FormHelperText>MOBILE NUMBER</FormHelperText>
        <TextField
          // sx={{ width: "30rem" }}
          size="small"
          fullWidth
          value={profileData.mobileNumber}
          // label="Mobile number"
          name="mobileNumber"
          onChange={handleChange}
        />
      </Box>

      <Box sx={{ maxHeight: "2rem", marginLeft: "auto" }}>
        <Link to="/policyselection">
          <Button variant="contained" sx={{ marginTop: "1rem" }}>
            Save
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Profile;
