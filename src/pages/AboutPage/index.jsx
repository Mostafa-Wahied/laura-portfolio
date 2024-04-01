import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F2F7FB", minHeight: "100vh" }}>
        <Header />
        <About />
        <Footer />
      </Box>
    </>
  );
};

export default AboutPage;
