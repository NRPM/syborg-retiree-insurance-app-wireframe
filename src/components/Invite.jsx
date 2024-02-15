import React, { useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
const Invite = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        marginLeft: "auto",
        // marginRight: "auto",
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
          Invite
        </Typography>
      </Box>

      {/* <Typography>Refund request</Typography> */}
      <TableContainer
        sx={{
          borderRadius: "5px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        <Table
          sx={{ minWidth: "50rem" }}
          size="small"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              ></TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              >
                Retiree Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              >
                Bank Association
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              >
                Mobile Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Checkbox size="small" />
              </TableCell>
              <TableCell align="left">Louis</TableCell>
              <TableCell align="left">SBI</TableCell>
              <TableCell align="left">1234567890</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {" "}
                <Checkbox size="small" />
              </TableCell>
              <TableCell align="left">George</TableCell>
              <TableCell align="left">SBI</TableCell>
              <TableCell align="left">1234567890</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                {" "}
                <Checkbox size="small" />
              </TableCell>
              <TableCell align="left">Charles</TableCell>
              <TableCell align="left">SBI</TableCell>
              <TableCell align="left">1234567890</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ maxHeight: "2rem", marginLeft: "auto" }}>
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Send Whatsapp Invite
        </Button>
      </Box>
    </Box>
  );
};

export default Invite;
