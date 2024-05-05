import React from "react";
import { Box, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { grey } from "@mui/material/colors";

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
      <Link
        href="/portfolio"
        sx={{
          color: "#333",
          textDecoration: "none",
          "&:hover": {
            color: grey[700],
          },
        }}
      >
        Portfolio
      </Link>
      <Link
        href="/about"
        sx={{
          color: "#333",
          textDecoration: "none",
          "&:hover": {
            color: grey[700],
          },
        }}
      >
        About
      </Link>
      <Link
        href="/contact"
        sx={{
          color: "#333",
          textDecoration: "none",
          "&:hover": {
            color: grey[700],
          },
        }}
      >
        Contact
      </Link>
      <IconButton
        href="https://www.linkedin.com/in/lwahied/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          color="primary"
          sx={{ "&:hover": { color: grey[700] } }}
        />
      </IconButton>
    </Box>
  );
};

export default Footer;
