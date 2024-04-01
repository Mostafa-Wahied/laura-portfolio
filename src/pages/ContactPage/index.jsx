import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import Contact from "../../components/Contact";

const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F7FB",
          minHeight: "100vh",
          // fontFamily: "Montserrat",
        }}
      >
        <Header />
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default ContactPage;
