import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { projectPage, takenotePersonas } from "../../constants/projectPage";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  fadeInPlaceVariant,
} from "../../utils/motion.js";
import TakenoteCarousel from "../TakenoteCarousel/TakenoteCarousel.jsx";
import { TakenoteImpactAccordion } from "../TakenoteImpactAccordion/index.jsx";

const TakeNote = () => {
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${projectPage.takenote.banner})`,
          // backgroundSize: "cover",
          // backgroundPosition: "50% 60%",
          // height: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box // a container for the banner image, title and subtitle
        sx={{
          backgroundImage: `url(${projectPage.takenote.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 15%",
          height: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
        <img
          src={projectPage.takenote.banner}
          alt="Banner"
          style={{
            // width: '100%', // Ensures the image spans the full width of its container
            // maxHeight: '100%', // Limits the height to maintain aspect ratio
            objectFit: "cover", // Ensures the image covers the area without being stretched
            width: 350,
            marginBottom: "1rem",
          }}
        />
        <motion.section // a motion container for the title and subtitle
          variants={staggerContainer(0.2)}
        >
          <motion.div variants={fadeIn("", "spring", 0.25, 0.75)}>
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
                  // color: "white",
                  fontFamily: "Inter",
                  fontSize: "2rem",
                  fontWeight: "800",
                  // textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)",
                }}
                gutterBottom
              >
                {projectPage.takenote.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  // color: "white",
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  // textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)",
                  px: { xs: 2, md: 50 },
                  textAlign: "center",
                }}
              >
                {projectPage.takenote.subTitle}
              </Typography>
            </Box>
          </motion.div>
        </motion.section>
      </Box>
      <Container // a container for the challenge and opportunity
        sx={{
          paddingX: { xs: 2, md: 10 },
          marginY: { xs: 5, md: 15 },
        }}
        maxWidth="xl"
      >
        <Grid
          container
          spacing={4}
          sx={{
            my: { xs: 2, md: 4 },
          }}
        >
          <Grid item xs={12} md={9}>
            <Box // a container for the challenge
            >
              <motion.section // a motion container for the challenge
                variants={staggerContainer(0.2)}
              >
                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "800",
                      mb: 4,
                    }}
                  >
                    The Challenge
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {projectPage.takenote.challenge.part1}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {projectPage.takenote.challenge.part2}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {projectPage.takenote.challenge.part3}
                  </Typography>
                </motion.div>
              </motion.section>
            </Box>
          </Grid>
          {/* Details box */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              my: { xs: 2, md: 4 },
            }}
          >
            <motion.div
              variants={fadeInPlaceVariant}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Box
                sx={{
                  backgroundColor: "#E1CCBE",
                  paddingTop: { xs: "1rem", md: "2rem" },
                  paddingBottom: { xs: "1rem", md: "1rem" },
                  paddingLeft: { xs: "1rem", md: "2rem" },
                  paddingRight: { xs: "0rem", md: "1rem" },
                  width: "100%",
                  // maxWidth: "350px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <motion.section 
                      variants={staggerContainer(0.2)}
                    >
                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "800",
                            mb: 2,
                          }}
                        >
                          Role
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "800",
                            mb: 2,
                          }}
                        >
                          Context
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "800",
                            mb: 2,
                          }}
                        >
                          Partners
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "800",
                            mb: 2,
                          }}
                        >
                          Timeline
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "800",
                            mb: 2,
                          }}
                        >
                          Focus
                        </Typography>
                      </motion.div>
                    </motion.section>
                  </Grid>

                  <Grid item xs={9}>
                    <motion.section // a motion container for the details box values
                      variants={staggerContainer(0.2)}
                    >
                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: "1rem",
                            mb: 2,
                          }}
                        >
                          UX Researcher & Designer
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            mb: 2,
                          }}
                        >
                          U.S. public school
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            mb: 2,
                          }}
                        >
                          Mostafa Wahied, Engineer
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            mb: 2,
                          }}
                        >
                          Sep 2023 - Feb 2024
                        </Typography>
                      </motion.div>

                      <motion.div
                        variants={fadeInPlaceVariant}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1rem",
                            mb: 2,
                          }}
                        >
                          UX Research, UI Design
                        </Typography>
                      </motion.div>
                    </motion.section>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={4}
          sx={{
            my: { xs: 2, md: 4 },
          }}
        >
          <Grid item xs={12} md={9}>
            <Box>
              <motion.section // a motion container for the opportunity
                variants={staggerContainer(0.2)}
              >
                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "800",
                      mb: 4,
                    }}
                  >
                    The Opportunity
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {projectPage.takenote.opportunity.part1}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {projectPage.takenote.opportunity.part2}
                  </Typography>
                </motion.div>
              </motion.section>
            </Box>
          </Grid>

          <motion.div
            variants={fadeInPlaceVariant}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            style={{ width: "100%" }}
          >
            <Box // a container for the opportunity image
              sx={{
                // padding: "1rem",
                // marginTop: "2rem",
                width: { xs: "100%", md: "350px" },
              }}
            ></Box>
          </motion.div>
        </Grid>
      </Container>
      <Box // a box for Research & Discovery
        sx={{
          backgroundColor: "#E1CCBE",
          padding: "1rem",
          my: "2rem",
        }}
      >
        {/* carousel */}
        <Container // a container for the Research & Discovery
          sx={{
            paddingX: { xs: 2, md: 10 },
            marginY: 5,
          }}
          maxWidth="xl"
        >
          <Typography
            variant="h4"
            sx={{
              py: 3,
              fontSize: "1.5rem",
              fontWeight: "800",
              mb: 4,
            }}
          >
            Research & Discovery
          </Typography>
          <Grid container spacing={8} sx={{}}>
            <Grid item xs={4}>
              <motion.div
                variants={fadeInPlaceVariant}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "800" }}>
                  Experiences
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Because I was working in the classroom throughout the project,
                  I was able to reflect on my own experiences interacting with
                  various touchpoints of the classroom ecosystem, including:
                </Typography>
                <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <li>
                    <Typography variant="body1">
                      Interacting with students 1:1 and in small groups
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Collecting handwritten notes while observing and assessing
                      students
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Analyzing data alongside professional learning communities
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Undergoing teacher evaluation processes
                    </Typography>
                  </li>
                </ul>
              </motion.div>
            </Grid>

            <Grid item xs={4}>
              <motion.div
                variants={fadeInPlaceVariant}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "800" }}>
                  Observations
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  I also had the opportunity to observe other educators’
                  teaching practice within their classrooms, including:
                </Typography>
                <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <li>
                    <Typography variant="body1">
                      How teachers delivered tailored instruction through 1:1
                      and small group interactions with students
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Self-designed note-taking systems teachers were using in
                      their classrooms
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      How educators engaged with data through their professional
                      learning communities
                    </Typography>
                  </li>
                </ul>
              </motion.div>
            </Grid>

            <Grid item xs={4}>
              <motion.div
                variants={fadeInPlaceVariant}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "800" }}>
                  Stakeholder Interviews
                </Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  High-quality instruction impacts a wide range of stakeholders
                  in the education system. I identified and interviewed key
                  stakeholders, including:
                </Typography>
                <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <li>
                    <Typography variant="body1">Students</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Teachers</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Instructional Coaches
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Administrators</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">Family members</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Professional development organizations
                    </Typography>
                  </li>
                </ul>
              </motion.div>
            </Grid>
          </Grid>

          {/* Personas */}

          <Typography
            variant="h4"
            sx={{
              pt: 15,
              display: "flex",
              fontSize: "1.5rem",
              fontWeight: "800",
              mb: 4,
            }}
          >
            Personas
          </Typography>
          <motion.section // a motion container for the personas
            variants={staggerContainer(0.2)}
          >
            <motion.div
              variants={fadeInPlaceVariant}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Grid container spacing={2} sx={{}}>
                {takenotePersonas.map((persona, index) => (
                  <Grid item xs={12} md={3} key={index}>
                    <motion.div
                      variants={fadeInPlaceVariant}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "1rem",
                          textAlign: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <img
                          src={persona.image}
                          alt={persona.name}
                          style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                            marginBottom: "1rem",
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "800", color: "#E1CCBE" }}
                        >
                          {persona.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textTransform: "uppercase",
                            color: "#E1CCBE",
                            fontWeight: "300",
                          }}
                        >
                          {persona.role}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            marginTop: 2,
                            color: "#E1CCBE",
                            fontWeight: "200",
                          }}
                        >
                          {persona.description}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            marginTop: 2,
                            color: "#E1CCBE",
                            fontWeight: "200",
                          }}
                        >
                          —
                        </Typography>
                        <Typography
                          variant="body1"
                          component="blockquote"
                          sx={{
                            marginTop: 2,
                            color: "#E1CCBE",
                            fontStyle: "italic",
                            fontWeight: "200",
                          }}
                        >
                          “{persona.quote}”
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </motion.section>
          {/* End of Personas */}
        </Container>
        {/* Research & Discovery ends here */}
      </Box>

      <Container // a container for inisghts
        sx={{
          paddingX: { xs: 2, md: 10 },
          marginY: 5,
        }}
        maxWidth="xl"
      >
        <Box>
          <motion.section // a motion container for the human-centered design
            variants={staggerContainer(0.2)}
          >
            <motion.div
              variants={fadeInPlaceVariant}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  mb: 5,
                }}
              >
                Inisghts
              </Typography>
            </motion.div>
          </motion.section>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.section // a motion container for the human-centered design
                variants={staggerContainer(0.2)}
              >
                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 5,
                    }}
                  >
                    <strong>
                      Bend the barriers to promote equitable outcomes.
                    </strong>{" "}
                    Overwhelmingly, teachers mentioned time as the number one
                    factor impacting their ability to provide instruction
                    tailored to each individual student. Give teachers a more
                    efficient method for tracking student data, and they will
                    save time and effort that can be better invested in
                    instruction.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 5,
                    }}
                  >
                    <strong>See the forest and the trees.</strong> Teachers need
                    their data to reveal both the big picture (“How are students
                    progressing? Are they on track? Who haven’t I assessed
                    recently? What are the strengths and growth areas in my
                    instruction?”) and the granular details (“What skills do I
                    need to check up on when I meet next with a specific
                    student? What areas do they need to work on next in order to
                    progress towards mastery of this skill?”). With improved
                    data analysis capabilities, teachers can spot trends and
                    areas where students may need additional support, leading to
                    more effective interventions and tailored instruction.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 5,
                    }}
                  >
                    <strong>Keep it human.</strong> Teachers are invested in
                    relationships, and are continuously designing interactions
                    with the goal of students feeling seen, heard, and valued.
                    When coaching students one-on-one and in small groups,
                    teachers want a solution to capture data seamlessly and
                    almost ‘invisibly’ so as to enhance, rather than detract
                    from, the quality of teacher-student interactions. In turn,
                    data must be able to be utilized in a way that promotes a
                    more personalized learning experience for students.
                  </Typography>
                </motion.div>
              </motion.section>
            </Grid>
            <Grid item xs={12} md={4} sx={{ flexGrow: 1 }}>
              <motion.section // a motion container for the human-centered design
                variants={staggerContainer(0.2)}
              >
                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <img
                    src={projectPage.takenote.insightsSideImage}
                    alt="Insight 1"
                    style={{
                      width: "100%",
                      height: "100%", // Make the image take up the full height of its parent
                      marginBottom: "1rem",
                    }}
                  />
                </motion.div>
              </motion.section>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box // a box for Design
        sx={{
          backgroundColor: "#E1CCBE",
          padding: "1rem",
          my: "2rem",
        }}
      >
        <Container
          sx={{
            paddingX: { xs: 2, md: 10 },
            marginY: 5,
          }}
          maxWidth="xl"
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <motion.section variants={staggerContainer(0.2)}>
                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      mb: 5,
                    }}
                  >
                    Design
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "800",
                      mb: 4,
                    }}
                  >
                    TakeNote, the app by teachers, for teachers.
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    We chose to create a web-based application for several
                    reasons:
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ol>
                    <li>
                      <Typography variant="body1" sx={{ mb: 1.5 }}>
                        Accessibility: Teachers can access TakeNote on any
                        device.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ mb: 1.5 }}>
                        “Invisibility”: By relying on devices that teachers
                        already use, the solution will not alter the quality of
                        student-teacher interactions.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ mb: 1.5 }}>
                        Efficiency: Data can be collected in a few clicks,
                        organized automatically, and presented in an easy to
                        analyze format.
                      </Typography>
                    </li>
                  </ol>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    By streamlining the process of capturing and analyzing
                    observational data collected through teacher-student
                    interactions, TakeNote is an efficient way for educators to
                    monitor student progress, identify areas for growth, and
                    develop individualized next steps for future instruction.
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeInPlaceVariant}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    Using a service design approach to the solution enabled us
                    to consider multiple touchpoints in the classroom ecosystem.{" "}
                    <strong>
                      The resulting design centers relationships at the core of
                      the solution, enhancing teacher-student interactions.
                    </strong>
                  </Typography>
                </motion.div>
              </motion.section>
            </Grid>

            <Grid item xs={12} md={7} sx={{ mt: { xs: 1, md: 8 } }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <motion.div
                    variants={fadeInPlaceVariant}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <img
                      src={projectPage.takenote.design1}
                      alt="Design 1"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "1rem",
                      }}
                    />
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <motion.div
                    variants={fadeInPlaceVariant}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <img
                      src={projectPage.takenote.design2}
                      alt="Design 2"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "1rem",
                      }}
                    />
                  </motion.div>
                </Grid>

                <Grid item xs={12}>
                  <motion.section variants={staggerContainer(0.2)}>
                    <motion.div
                      variants={fadeInPlaceVariant}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <img
                        src={projectPage.takenote.design3}
                        alt="Design 3"
                        style={{
                          width: "100%",
                          height: " auto",
                          marginBottom: "1rem",
                        }}
                      />
                    </motion.div>
                  </motion.section>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* End of Design */}

      <Container // a container for Takenote Carousel
        sx={{
          paddingX: { xs: 2, md: 10 },
          marginY: 5,
        }}
        maxWidth="xl"
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "800",
            mb: 5,
          }}
        >
          Introducing TakeNote
        </Typography>
        <TakenoteCarousel />
      </Container>
      {/* End of Takenote Carousel */}

      <Box // a box for Impact
        sx={{
          backgroundColor: "#E1CCBE",
          padding: "1rem",
          my: "2rem",
        }}
      >
        <Container
          sx={{
            py: { xs: 2, md: 8 },
            paddingX: { xs: 2, md: 10 },
            marginY: 5,
          }}
          maxWidth="xl"
        >
          <TakenoteImpactAccordion />
        </Container>
      </Box>
      {/* End of Impact */}

      {/* Live Website */}
      <Container // a container for the live website
        sx={{
          paddingX: { xs: 2, md: 10 },
          marginY: 5,
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            py: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component={"img"}
            src={projectPage.takenote.banner}
            alt="Banner"
            sx={{
              width: "40%",
              height: "auto",
              mb: { xs: 2, md: 8 },
            }}
          />
          <Button
            variant="contained"
            href="https://takenote.tech/"
            target="_blank"
            rel="noreferrer"
            sx={{
              bgcolor: "black",
              ":hover": { bgcolor: "#333" },
              color: "#E1CCBE",
              borderRadius: "50px",
              padding: "20px 80px",
              textTransform: "none",
              fontWeight: "200",
            }}
          >
            Launch TakeNote
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TakeNote;
