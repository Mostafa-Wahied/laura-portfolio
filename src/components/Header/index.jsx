import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ bgColor = "transparent" }) => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ backgroundColor: bgColor, p: 4 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/">
          <Box
            component="img"
            sx={{ height: 48 }} // Adjust the size as needed
            alt="Logo"
            src={logo}
          />
        </Link>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button href="/portfolio" sx={{ color: "text.primary" }}>
            Portfolio
          </Button>
          <Button href="/about" sx={{ color: "text.primary" }}>
            About
          </Button>
          <Button href="/contact" sx={{ color: "text.primary" }}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
