import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        fontFamily: "Inter",
        backgroundColor: "#E0CCBE",
        minHeight: "57vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 6,
        alignItems: "center",
        position: "relative",
        borderBottomLeftRadius: "50% 30%",
        borderBottomRightRadius: "50% 30%",
        overflow: "hidden", // This will make the left and right ends sharp
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          mb: 1,
        }}
      >
        Laura Wahied
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textTransform: "uppercase",
          color: "#333",
          textAlign: "center",
          mb: 3,
          fontWeight: "bold",
        }}
      >
        Design | Research | Facilitation
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          textAlign: "center",
          maxWidth: "600px",
          mb: 4,
        }}
      >
        I’m passionate about designing innovative, user-centric solutions that
        elevate human experiences. Dedicated to designing for impactful change
        and creating solutions that resonate with people's needs.{" "}
        <span>
          <Link href="/about" to="/about" style={{ color: "#333" }}>
            Learn more.
          </Link>
        </span>
      </Typography>
      <Button
        href="/portfolio"
        variant="contained"
        sx={{
          bgcolor: "black",
          ":hover": { bgcolor: "#333" },
          color: "#E1CCBE",
          borderRadius: "50px",
          // px: 4,
          // py: 1,
          padding: "20px 80px",
          textTransform: "none",
          fontWeight: "200",
        }}
      >
        Portfolio
      </Button>
    </Box>
  );
};

export default Hero;
