import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Box, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { projectPage } from "../../constants/projectPage";

const Project = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const { slug } = useParams();
  console.log(projectPage[slug]);
  const project = projectPage.find((project) => project.slug === slug);
  console.log(project);

  if (project !== undefined) {
    return (
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#F2F7FB",
            fontFamily: "Montserrat",
            // padding: "2rem",
          }}
        >
          <Container
            id="projects"
            sx={{
              paddingX: { sx: 0, md: 20, xl: 40 },
              marginY: { xs: 5, md: 10 },
              fontFamily: "Montserrat",
              pt: "4rem",
              // height: { md: '100vh' },
            }}
            maxWidth
          >
            <div className="projec-page" style={{ flex: "1 0 auto" }}>
              <Header />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  // backgroundColor: "white",
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                }}
              >
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} />
              </Box>
              <Footer />
            </div>
          </Container>
        </Box>
      </motion.div>
    );
  } else {
    return (
      <div className="project-page">
        <h1>Project not found</h1>
      </div>
    );
  }
};

export default Project;
