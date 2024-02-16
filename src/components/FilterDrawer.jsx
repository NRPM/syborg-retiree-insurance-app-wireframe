import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const FilterDrawer = ({ openFilterDrawer, setOpenFilterDrawer }) => {
  return (
    <>
      <Drawer
        anchor="right"
        open={openFilterDrawer}
        onClose={() => {
          setOpenFilterDrawer(false);
        }}
      >
        <Box
          sx={{
            padding: "2rem",
            width: "20rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl sx={{ marginBottom: "2rem" }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Payment Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Payment Status"
              // onChange={handleChange}
            >
              <MenuItem value={"paid"}>Paid</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginBottom: "2rem" }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Bank Association
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Bank Association"
              // onChange={handleChange}
            >
              <MenuItem value={"sbi"}>SBI</MenuItem>
              <MenuItem value={"punjab national bank"}>
                Punjab National Bank
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => {
              setOpenFilterDrawer(false);
            }}
          >
            Filter
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
