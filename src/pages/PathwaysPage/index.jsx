import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import Pathways from "../../components/Pathways";

const PathwaysPage = () => {
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
        <Pathways />
        <Footer />
      </Box>
    </>
  );
};

export default PathwaysPage;
