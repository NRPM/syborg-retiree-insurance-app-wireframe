import {
  Box,
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PaymentDetails = () => {
  return (
    <>
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
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Payment Details
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: "2rem" }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            sx={{ width: "20%" }}
            size="small"
            fullWidth
            placeholder="search"
          />
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{ position: "absolute" }}
          >
            <DemoContainer
              components={["DatePicker"]}
              sx={{
                marginLeft: "1rem",
                position: "relative",
                bottom: "0.2rem",
              }}
            >
              <DatePicker
                label="Date"
                slotProps={{ textField: { size: "small" } }}
              />
            </DemoContainer>
          </LocalizationProvider>{" "}
          <IconButton variant="contained">
            <SearchIcon
              sx={{
                color: "white",
                bgcolor: "#1976d2",
                borderRadius: "50%",
                padding: "0.5rem",
              }}
            />
          </IconButton>
        </Box>

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
                  Payment Mode
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Payable Amount
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Amount Paid
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Transaction ID.
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Balance Payable
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.10rem" }}
                >
                  Download Invoice
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.10rem",
                    width: "10rem",
                  }}
                >
                  Request Refund
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left"> 10000</TableCell>
                <TableCell align="left">16-02-2024</TableCell>
                <TableCell align="left">10000</TableCell>
                <TableCell align="left"> Transaction ID 0</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Download
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}} disabled>
                    Request Refund
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">10000</TableCell>
                <TableCell align="left">16-02-2024</TableCell>
                <TableCell align="left">9000</TableCell>
                <TableCell align="left">Transaction ID 1</TableCell>
                <TableCell align="left">1000</TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Download
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}} disabled>
                    Request Refund
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">UPI</TableCell>
                <TableCell align="left">10000</TableCell>
                <TableCell align="left">16-02-2024</TableCell>
                <TableCell align="left">11000</TableCell>
                <TableCell align="left">Transaction ID 2</TableCell>
                <TableCell align="left">-1000</TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Download
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Request Refund
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Cheque</TableCell>
                <TableCell align="left">15000</TableCell>
                <TableCell align="left">16-02-2024</TableCell>
                <TableCell align="left">15000</TableCell>
                <TableCell align="left">Transaction ID 3</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Download
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}} disabled>
                    Request Refund
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">NEFT</TableCell>
                <TableCell align="left">15000</TableCell>
                <TableCell align="left">16-02-2024</TableCell>
                <TableCell align="left">15000</TableCell>
                <TableCell align="left">Transaction ID 4</TableCell>
                <TableCell align="left">0</TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}}>
                    Download
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button size="small" sx={{}} disabled>
                    Request Refund
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PaymentDetails;
