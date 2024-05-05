import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import Alight from "../../components/Alight";

export const AlightPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F7FB",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Alight />
        <Footer />
      </Box>
    </>
  );
};

export default AlightPage;