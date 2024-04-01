import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { projectPage } from "../../constants/projectPage";

const Pathways = () => {
  return (
    <>
      <Box
        sx={{
          // use image placeholder for now
          backgroundImage: `url(${projectPage.pathways.banner})`,
          backgroundSize: "65%",
          backgroundPosition: "50% 65%",
          height: "55vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box // a container for the title and subtitle
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "Inter",
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)",
            }}
            gutterBottom
          >
            {projectPage.pathways.title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "1.3rem",
              // fontWeight: "bold",
              textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            {projectPage.pathways.subTitle}
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          paddingX: { sx: 0, md: 10 },
          marginY: { xs: 5, md: 10 },
        }}
      >
        <Box // a container for the challenge
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            The Challenge
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              // fontWeight: "bold",
            }}
          >
            {projectPage.pathways.challenge.part1}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              // fontWeight: "bold",
            }}
          >
            {projectPage.pathways.challenge.part2}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              // fontWeight: "bold",
            }}
          >
            {projectPage.pathways.challenge.part3}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              // fontWeight: "bold",
            }}
          >
            {projectPage.pathways.challenge.part4}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Pathways;
