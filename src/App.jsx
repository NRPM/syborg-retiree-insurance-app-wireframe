import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import RefundRequest from "./components/RefundRequest";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Profile from "./components/Profile";
import PolicySelection from "./components/PolicySelection";
import Sidebar from "./components/Sidebar";
import Payment from "./components/Payment";
import OtpAuth from "./components/OtpAuth";
import Invite from "./components/Invite";
import PaymentSuccessful from "./components/PaymentSuccessful";
import SendPaymentLink from "./components/SendPaymentLink";

function App() {
  useEffect(() => {});

  let params = new URLSearchParams(window.location.search);
  const [empty, setEmpty] = useState(params.get("empty"));
  const [profileData, setProfileData] = useState(
    !(empty == "true")
      ? {
          associationName:
            "CENTRAL BANK RETIRED EMPLOYEES ASSOCIATION - OTHERS",
          bankName: "Punjab National Bank",
          employeeId: "1161351",
          retireeName: "Mr. RAMESHBHAI SHANABHAI PRAJAPATI",
          dateOfBirth: "19-01-1959",
          address:
            "B-19, DEEP PRABHA PARK, KAILASH FARM ROAD, GANESH CHOKDI, ANAND, Gujarat, 388001, India",
          email: "SATISHP2885@YAHOO.COM",
          mobileNumber: "+911234567890",
          numberOfHandicappedChildren: "0",
          gender: "male",
          spouse: "false",
        }
      : {
          associationName: "",
          bankName: "",
          employeeId: "",
          retireeName: "",
          dateOfBirth: "",
          address: "",
          email: "",
          mobileNumber: "+911234567890",
          numberOfHandicappedChildren: "0",
          gender: "male",
          spouse: "false",
        }
  );

  const [currentHref, setCurrentHref] = useState(location.href);
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#fff", color: "black" }}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Insurance app
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          // position: "absolute",
          paddingTop: "4rem",
        }}
      >
        {!currentHref.endsWith("/otp") && <Sidebar currentHref={currentHref} />}
        <Routes>
          <Route
            path="/otp"
            element={<OtpAuth setCurrentHref={setCurrentHref} />}
            exact={true}
          />
          <Route
            path="/"
            element={
              <Profile
                profileData={profileData}
                setProfileData={setProfileData}
                currentHref={currentHref}
                setCurrentHref={setCurrentHref}
              />
            }
          />
          <Route
            path="/policyselection"
            element={
              <PolicySelection
                profileData={profileData}
                setProfileData={setProfileData}
                currentHref={currentHref}
                setCurrentHref={setCurrentHref}
              />
            }
          />
          <Route
            path="/refundrequest"
            element={
              <RefundRequest
                currentHref={currentHref}
                setCurrentHref={setCurrentHref}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment
                profileData={profileData}
                currentHref={currentHref}
                setCurrentHref={setCurrentHref}
              />
            }
          />
          <Route path="/paymentsuccessful" element={<PaymentSuccessful />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/sendpaymentlink" element={<SendPaymentLink />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
