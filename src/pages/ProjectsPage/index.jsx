import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
// import Project from "../../components/Project/Project";
import ProjectsCards from "../../components/ProjectsCards";

const ProjectsPage = () => {
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
        <ProjectsCards />
        <Footer />
      </Box>
    </>
  );
};

export default ProjectsPage;
