import {
  Box,
  Modal,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  FormGroup,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PaymentModal = ({
  open,
  setConfirmModalOpen,
  profileData,
  checked,
  handleChange,
  isButtonVisible,
}) => {
  return (
    <Modal
      open={open}
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
          <Table sx={{ width: "100%" }} size="small" aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ width: "30%", fontWeight: "bold" }}
                >
                  Policy Number
                </TableCell>
                <TableCell align="left"> 12345</TableCell>
              </TableRow>

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
                <TableCell align="left"> {profileData.mobileNumber}</TableCell>
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
        {isButtonVisible && (
          <>
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
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PaymentModal;
