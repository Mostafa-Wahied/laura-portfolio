import React from "react";
import { Box, Typography, Button } from "@mui/material";

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
        and creating solutions that resonate with people's needs.
      </Typography>
      <Button
        href="/portfolio"
        variant="contained"
        sx={{
          bgcolor: "black",
          ":hover": { bgcolor: "darkgrey" },
          color: "white",
          borderRadius: "20px",
          px: 4,
          py: 1,
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Portfolio
      </Button>
    </Box>
  );
};

export default Hero;
