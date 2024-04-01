import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import image from "../../assets/about-me.png";

const About = () => {
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={
                {
                  // width: "50%",
                  // marginRight: "2rem",
                }
              }
            >
              Welcome! I'm Laura. Crafting meaningful, human-centered solutions
              lies at the heart of my approach. With a background in both
              education and humanitarian work, I've collaborated with diverse
              communities and guided projects through the design process,
              focusing on user-centric approaches that resonate with people's
              needs. My journey as a design practitioner has led me to embrace
              the intersection of design and social impact, taking me across
              borders in pursuit of transformative collaborations. I believe in
              the power of great design to drive meaningful change. If you would
              like to collaborate, please drop me a line.{" "}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={image}
              alt="Laura"
              style={{
                width: "50%",
                height: "auto",
                borderRadius: "1rem",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
