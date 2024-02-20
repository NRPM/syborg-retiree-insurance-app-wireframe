import React, { useEffect } from "react";
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const RefundRequest = ({ currentHref, setCurrentHref }) => {
  useEffect(() => {
    setCurrentHref(location.href);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        marginLeft: "auto",
     
      }}
    >
      <Box
        sx={{
          maxHeight: "3rem",
          // marginTop: "2rem",
          // marginBottom: "1rem",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Refund Request
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: "2rem" }} />

      {/* <Typography>Refund request</Typography> */}
      <TableContainer
        sx={{
          borderRadius: "5px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        <Table sx={{ width: "100%" }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              >
                Request ID
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
              >
                Request description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">0</TableCell>
              <TableCell align="left"> Refund Request 0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">1</TableCell>
              <TableCell align="left">Refund Request 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">2</TableCell>
              <TableCell align="left">Refund Request 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">Refund Request 3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">4</TableCell>
              <TableCell align="left">Refund Request 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RefundRequest;
