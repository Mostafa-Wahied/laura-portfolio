import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import TakeNote from "../../components/TakeNote";

const TakeNotePage = () => {
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
        <TakeNote />
        <Footer />
      </Box>
    </>
  );
};

export default TakeNotePage;
