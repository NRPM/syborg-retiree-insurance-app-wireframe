import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const SendPaymentLink = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          marginLeft: "auto",
          width: "100%",
          //   marginRight: "auto",
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
            Send Payment Link
          </Typography>
        </Box>
        <hr style={{ margin: "0px 0px 30px 0px" }}></hr>
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
                >
                  Retiree Name{" "}
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
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Payment Status
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Send Request
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">Retiree 1</TableCell>
                <TableCell align="left"> SBI</TableCell>
                <TableCell align="left">+911234567890</TableCell>
                <TableCell align="left">
                  {" "}
                  <Chip label="Paid" color="success" />
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Button variant="contained" size="small" disabled>
                    Send Link
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Retiree 2</TableCell>
                <TableCell align="left">SBI</TableCell>
                <TableCell align="left">+911234567890</TableCell>
                <TableCell align="left">
                  <Chip label="Paid" color="success" />
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" size="small" disabled>
                    Send Link
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Retiree 3</TableCell>
                <TableCell align="left">SBI</TableCell>
                <TableCell align="left">+911234567890</TableCell>
                <TableCell align="left">
                  <Chip label="Paid" color="success" />
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" size="small" disabled>
                    Send Link
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Retiree 4</TableCell>
                <TableCell align="left">SBI</TableCell>
                <TableCell align="left">+911234567890</TableCell>
                <TableCell align="left">
                  <Chip label="Pending" color="error" />
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" size="small">
                    Send Link
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Retiree 5</TableCell>
                <TableCell align="left">SBI</TableCell>
                <TableCell align="left">+911234567890</TableCell>
                <TableCell align="left">
                  <Chip label="Pending" color="error" />
                </TableCell>
                <TableCell align="left">
                  <Button variant="contained" size="small">
                    Send Link
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ maxHeight: "2rem", marginLeft: "auto", marginTop: "1rem" }}>
          {/* <Link to="/paymentsuccessful"> */}
          <Button
            variant="contained"
            // onClick={() => {
            //   setConfirmModalOpen(true);
            // }}
          >
            Send Payment Request
          </Button>
          {/* </Link> */}
        </Box>
      </Box>
    </>
  );
};

export default SendPaymentLink;
