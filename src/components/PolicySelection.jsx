import { Bloodtype } from "@mui/icons-material";
import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Autocomplete,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Divider,
  FormHelperText,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PolicySelection = ({
  profileData,
  setProfileData,
  currentHref,
  setCurrentHref,
}) => {
  const baseSumOptions = [
    { label: "200,000", value: 200000 },
    { label: "300,000", value: 300000 },
    { label: "500,000", value: 500000 },
  ];
  const [gender, setGender] = useState("male");
  const [selectedBaseSum, setSelectedBaseSum] = useState(baseSumOptions[0]);
  const [selectedTopUpSum, setSelectedTopUpSum] = useState(baseSumOptions[0]);
  const [handicappedChild, setHandicappedChild] = useState("false");
  const [handicappedGender1, setHandicappedGender1] = useState("male");
  const [handicappedGender2, setHandicappedGender2] = useState("male");
  const [selectedHandicappedChildSum, setSelectedHandicappedChildSum] =
    useState("");

  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(Array(parseInt(profileData.numberOfHandicappedChildren)).fill(""));
    console.log(parseInt(profileData.numberOfHandicappedChildren));

    console.log(arr);
  }, [profileData]);

  useEffect(() => {
    setCurrentHref(location.href);
  }, []);

  const handleSpouseChange = (e) => {
    setProfileData((prev) => ({ ...prev, spouse: e.target.value }));
    console.log(spouse);
  };
  const handleChange = (e) => {
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleHandicappedGender1 = (e) => {
    setHandicappedGender1(e.target.value);
  };
  const handleHandicappedGender2 = (e) => {
    setHandicappedGender2(e.target.value);
  };

  const handleHandicappedChildChange = (e) => {
    setHandicappedChild(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
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
          Policy Options
        </Typography>
      </Box>
      <hr style={{ margin: "0px 0px 30px 0px" }}></hr>

      <FormControl sx={{ height: "4rem", marginLeft: "1rem" }}>
        <FormLabel>Spouse</FormLabel>
        <RadioGroup
          sx={{ height: "3rem" }}
          value={profileData.spouse}
          onChange={handleSpouseChange}
        >
          <FormControlLabel
            value={true}
            control={<Radio size="small" />}
            // sx={{ height: "4rem" }}
            label="Yes"
          />
          <FormControlLabel
            value={false}
            control={<Radio size="small" />}
            label="No"
          />
        </RadioGroup>
      </FormControl>

      {/* <Box sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <Typography variant="h5">Dependents</Typography>
      </Box> */}

      <FormControl sx={{ marginLeft: "1rem" }}>
        <FormLabel>Do you have any handicapped children?</FormLabel>
        <RadioGroup
          sx={{ height: "3rem" }}
          value={handicappedChild}
          onChange={handleHandicappedChildChange}
        >
          <FormControlLabel
            value={"true"}
            control={<Radio size="small" />}
            //   sx={{ height: "4rem" }}
            label="Yes"
          />
          <FormControlLabel
            value={"false"}
            control={<Radio size="small" />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
      {handicappedChild == "true" && (
        <>
          <Box
            sx={{
              maxHeight: "3rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            <FormHelperText>NUMBER OF HANDICAPPED CHILDREN</FormHelperText>

            <TextField
              sx={{ width: "80%" }}
              size="small"
              // label="Number of handicapped children"
              type="number"
              name="numberOfHandicappedChildren"
              value={profileData.numberOfHandicappedChildren}
              onChange={handleChange}
            />
          </Box>
        </>
      )}
      {/* <hr style={{ margin: "20px 0px 20px 0px" }}></hr> */}

      <Divider sx={{ marginBottom: "1rem", marginTop: "2rem" }} />
      <Box
        sx={{
          maxHeight: "3rem",
          // marginTop: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Sum Insured
        </Typography>
      </Box>
      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          width: "80%",
        }}
      >
        <FormHelperText>BASE SUM INSURED</FormHelperText>
        <Autocomplete
          disablePortal
          value={selectedBaseSum.value}
          inputValue={selectedBaseSum.label}
          disableClearable
          onChange={(e, val) => {
            setSelectedBaseSum(val);
          }}
          options={baseSumOptions}
          getOptionLabel={(option) => option.label}
          size="small"
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginLeft: "1rem" }}>
        <Typography>Base Premium: {selectedBaseSum.value}</Typography>
      </Box>

      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          width: "80%",
        }}
      >
        <FormHelperText>TOP UP SUM INSURED</FormHelperText>

        <Autocomplete
          disablePortal
          //   sx={{ width: "30rem" }}
          //   value={selectedBaseSum}
          value={selectedTopUpSum.value}
          inputValue={selectedTopUpSum.label}
          disableClearable
          // inputValue={selectedTopUpSum}
          onChange={(e, val) => {
            setSelectedTopUpSum(val);
            console.log(selectedBaseSum);
          }}
          options={baseSumOptions}
          getOptionLabel={(option) => option.label}
          size="small"
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>

      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Typography>
          Top Up Premium + Base Premium:{" "}
          {selectedBaseSum.value + selectedTopUpSum.value}
        </Typography>
      </Box>
      {handicappedChild == "true" && (
        <Box sx={{ maxHeight: "3rem", marginLeft: "1rem" }}>
          <Typography>
            Dependent children premium: {arr.length * 100000 || "0"}
          </Typography>
        </Box>
      )}
      <Box sx={{ maxHeight: "3rem", marginTop: "1rem", marginLeft: "1rem" }}>
        <Typography>
          Total premium with handicapped children:{" "}
          {parseInt(selectedBaseSum.value) +
            parseInt(selectedTopUpSum.value) +
            arr.length * 100000}
        </Typography>
      </Box>
      {/* <hr style={{ margin: "20px 0px 20px 0px" }}></hr> */}
      <Divider sx={{ marginBottom: "1rem", marginTop: "1rem" }} />

      {(profileData.spouse == "true" || handicappedChild == "true") && (
        <Box
          sx={{
            maxHeight: "3rem",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Dependents Information
          </Typography>
        </Box>
      )}
      {profileData.spouse == "true" && (
        <>
          <Box
            sx={{
              maxHeight: "3rem",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            <Typography variant="h6">Spouse information</Typography>
          </Box>
          <Box sx={{ maxHeight: "4rem" }}>
            <FormHelperText sx={{ marginLeft: "1rem" }}>
              NAME OF SPOUSE
            </FormHelperText>

            <TextField
              sx={{ width: "80%", marginBottom: "1rem", marginLeft: "1rem" }}
              size="small"
              // label="Name of spouse"
            />
          </Box>
          <FormControl sx={{ marginLeft: "1rem" }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              sx={{ height: "3rem" }}
              value={gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value={"male"}
                control={<Radio size="small" />}
                //   sx={{ height: "4rem" }}
                label="Male"
              />
              <FormControlLabel
                value={"female"}
                control={<Radio size="small" />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{
              maxHeight: "3rem",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            <FormHelperText>DATE OF BIRTH OF SPOUSE</FormHelperText>

            <TextField
              sx={{ width: "80%" }}
              size="small"
              // label="Date of Birth"
            />
          </Box>
          <Divider sx={{ marginTop: "2rem", marginBottom: "1rem" }} />
        </>
      )}

      {handicappedChild == "true" && arr.length > 0 && (
        <Box
          sx={{
            maxHeight: "3rem",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ paddingLeft: "1rem" }}>
            Handicapped Children
          </Typography>
        </Box>
      )}

      {handicappedChild == "true" &&
        arr.map((element, index) => {
          return (
            <>
              <Box
                sx={{
                  // maxHeight: "3rem",
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  width: "80%",
                }}
              >
                <FormHelperText>
                  NAME OF HANDICAPPED CHILD {index + 1}
                </FormHelperText>

                <TextField
                  size="small"
                  sx={{ width: "100%" }}
                  // label="Name of handicapped child 1"
                />
              </Box>
              <Box
                sx={{
                  maxHeight: "3rem",
                  marginTop: "2rem",
                  marginLeft: "1rem",
                  width: "80%",
                }}
              >
                <FormHelperText>
                  DATE OF BIRTH OF HANDICAPPED CHILD {index + 1}
                </FormHelperText>
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  // label="Date of birth of handicapped child 1"
                />
              </Box>
              <FormControl sx={{ marginTop: "2rem", marginLeft: "1rem" }}>
                <FormLabel>Gender of handicapped child 1</FormLabel>
                <RadioGroup
                  sx={{ height: "3rem" }}
                  value={handicappedGender1}
                  onChange={handleHandicappedGender1}
                >
                  <FormControlLabel
                    value={"male"}
                    control={<Radio size="small" />}
                    //   sx={{ height: "4rem" }}
                    label="Male"
                  />
                  <FormControlLabel
                    value={"female"}
                    control={<Radio size="small" />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </>
          );
        })}
      {handicappedChild == "true" && (
        <hr style={{ margin: "20px 0px 20px 0px" }}></hr>
      )}

      {/* {handicappedChild == "true" && (
        <Box sx={{ maxHeight: "3rem", marginTop: "1rem" }}>
          <Autocomplete
            disablePortal
            //   sx={{ width: "30rem" }}
            onChange={(e, val) => {
              setSelectedHandicappedChildSum(val.value);
              console.log(selectedBaseSum);
            }}
            options={baseSumOptions}
            getOptionLabel={(option) => option.label}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Dependent child premium" />
            )}
          />
        </Box>
      )} */}

      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Nominee
        </Typography>
      </Box>
      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          width: "80%",
        }}
      >
        <FormHelperText>NAME OF NOMINEE </FormHelperText>

        <TextField
          sx={{ width: "100%" }}
          size="small"
          // label="Name of nominee"
        />
      </Box>
      <Box
        sx={{
          maxHeight: "3rem",
          marginTop: "2rem",
          marginLeft: "1rem",
          width: "80%",
        }}
      >
        <FormHelperText>DATE OF BIRTH OF NOMINEE </FormHelperText>

        <TextField
          sx={{ width: "100%" }}
          size="small"
          // label="Date of birth of nominee"
        />
      </Box>
      <Box sx={{ marginTop: "2rem", marginLeft: "1rem", width: "80%" }}>
        <FormHelperText>RELATION OF NOMINEE </FormHelperText>
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">
            Relation of nominee
          </InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={modeOfPayment}
            // label="Relation of nominee"
            // onChange={handlePaymentModeChange}
            size="small"
            // sx={{ height: "2rem" }}
          >
            <MenuItem value={"legal guradian / parent"}>
              Legal guardian / Parent
            </MenuItem>
            <MenuItem value={"spouse"}>Spouse</MenuItem>
            <MenuItem value={"relative"}>Relative</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ maxHeight: "2rem", marginLeft: "auto", marginTop: "2rem" }}>
        <Link to="/payment">
          <Button variant="contained">Save</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PolicySelection;
