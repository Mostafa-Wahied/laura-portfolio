import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../constants/landingPage";

const ProjectCard = ({ title, image, slug }) => {
  return (
    <Card
      sx={{
        variant: "outlined",
        "&:hover .MuiCardMedia-root": {
          transform: "scale(1.1)",
        },
      }}
    >
      {/* <Link
        to={`/portfolio/${slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      > */}
      <CardMedia
        component="img"
        image={image}
        alt="project_image"
        sx={{
          padding: 1,
          transition: "transform 0.3s",
        }}
      />
      <CardContent
        sx={{
          borderTop: "0.5px solid",
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      {/* </Link> */}
    </Card>
  );
};

const ProjectsCards = () => {
  return (
    <>
      <Container
        id="projectsCards"
        sx={{
          paddingX: { sx: 0, md: 40 },
          marginY: { xs: 5, md: 10 },
          fontFamily: "Inter",
          // height: { md: '100vh' },
        }}
        maxWidth
      >
        <Box
          sx={{
            paddingTop: { xs: 2, md: 2 },
          }}
        >
          <Grid container spacing={3}>
            {projects.map((project, index) => {
              return (
                <Grid item xs={12} md={4}>
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProjectsCards;
