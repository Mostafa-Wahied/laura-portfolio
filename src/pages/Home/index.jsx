import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import Hero from "../../components/Hero";
import ProjectsCards from "../../components/ProjectsCards";
import Footer from "../../components/Footer";
import "../../index.css";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F7FB",
          minHeight: "100vh",
          fontFamily: "Inter",
        }}
      >
        <Header bgColor="#E0CCBE" />
        <Hero />
        <ProjectsCards />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
