import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PolicyIcon from "@mui/icons-material/Policy";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import IosShareIcon from "@mui/icons-material/IosShare";
const Sidebar = ({ currentHref }) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "15%",
        padding: "2rem",
        position: "fixed",
        left: "0",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        borderRight: "1px solid lightgrey",
      }}
    >
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/policyselection"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary="Policy Options" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/payment">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/paymentdetails"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment Details" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/refundrequest"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CurrencyExchangeIcon />
              </ListItemIcon>
              <ListItemText primary="Refund Request" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/sendpaymentlink"
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IosShareIcon />
              </ListItemIcon>
              <ListItemText primary="Send Payment Link" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
