import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        marginTop: 4,
      }}
    >
      <Link href="/portfolio" sx={{ color: "#333", textDecoration: "none" }}>
        Portfolio
      </Link>
      <Link href="/about" sx={{ color: "#333", textDecoration: "none" }}>
        About
      </Link>
      <Link href="/contact" sx={{ color: "#333", textDecoration: "none" }}>
        Contact
      </Link>
      <IconButton
        href="https://www.linkedin.com/in/lwahied/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
