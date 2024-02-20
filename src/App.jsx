import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar
} from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Invite from "./components/Invite";
import OtpAuth from "./components/OtpAuth";
import Payment from "./components/Payment";
import PaymentDetails from "./components/PaymentDetails";
import PaymentSuccessful from "./components/PaymentSuccessful";
import PolicySelection from "./components/PolicySelection";
import Profile from "./components/Profile";
import RefundRequest from "./components/RefundRequest";
import SendPaymentLink from "./components/SendPaymentLink";
import Sidebar from "./components/Sidebar";

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
    <Box sx={{ backgroundColor:"#F4F4F4",display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
      <AppBar  sx={{ bgcolor: "#fff", color: "black" }}>
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
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          paddingTop: "4rem",
          margin:"0px",
          minHeight:"100vh"
        }}
      >
        {!currentHref.endsWith("/otp") && <Sidebar currentHref={currentHref} />}
        <Box className="content-container" sx={{width:"70%",backgroundColor:"#fff",margin:"30px 30px 30px 300px", borderRadius:"20px"}}>
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
          <Route path="/paymentdetails" element={<PaymentDetails />} />
        </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
