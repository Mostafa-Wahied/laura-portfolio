import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { alightCards, projectPage } from "../../constants/projectPage";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  fadeInPlaceVariant,
} from "../../utils/motion.js";

export const Alight = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${projectPage.alight.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 40%",
          height: "35vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.section // a motion container for the title and subtitle
          variants={staggerContainer(0.2)}
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // viewport={{ once: true, amount: 0.25 }}
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
                  color: "white",
                  fontFamily: "Inter",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)",
                }}
                gutterBottom
              >
                {projectPage.alight.title}
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
                {projectPage.alight.subTitle}
              </Typography>
            </Box>
          </motion.div>
        </motion.section>
      </Box>
      <Container // a container for the challenge and opportunity
        sx={{
          paddingX: { xs: 2, md: 10 },
          marginY: { xs: 5, md: 5 },
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
                // initial="hidden"
                // animate="show"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
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
                      fontWeight: "bold",
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
                    {projectPage.alight.challenge.part1}
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
                    {projectPage.alight.challenge.part2}
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
                    {projectPage.alight.challenge.part3}
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
                    {projectPage.alight.challenge.part4}
                  </Typography>
                </motion.div>
              </motion.section>
            </Box>
          </Grid>

          {/* Details Box */}
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
                  marginTop: "2rem",
                  width: "100%",
                  // maxWidth: "350px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <motion.section
                      variants={staggerContainer(0.2)}
                      // initial="hidden"
                      // animate="show"
                      // whileInView="show"
                      // viewport={{ once: true, amount: 0.25 }}
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
                            fontWeight: "bold",
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
                            fontWeight: "bold",
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
                            fontWeight: "bold",
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
                            fontWeight: "bold",
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
                            fontWeight: "bold",
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
                      // initial="hidden"
                      // animate="show"
                      // whileInView="show"
                      // viewport={{ once: true, amount: 0.25 }}
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
                          Human-centered designer
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
                          Thomas J. Watson Fellowship
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
                          Thomas J. Watson Foundation
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
                          Jul 2016 - Aug 2018
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
                          UX Research, Service Design
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
                // initial="hidden"
                // animate="show"
                // whileInView="show"
                // viewport={{ once: true, amount: 0.25 }}
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
                      fontWeight: "bold",
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
                    {projectPage.alight.opportunity.part1}
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
                    {projectPage.alight.opportunity.part2}
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
                    {projectPage.alight.opportunity.part3}
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
                    {projectPage.alight.opportunity.part4}
                  </Typography>
                </motion.div>
              </motion.section>
            </Box>
          </Grid>
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
              style={{ width: "100%" }}
            >
              <Box // a container for the opportunity image
                sx={{
                  // padding: "1rem",
                  // marginTop: "2rem",
                  width: { xs: "100%", md: "350px" },
                }}
              >
                {/* <img
                  src={projectPage.alight.opportunityImage}
                  alt="Opportunity Image"
                  style={{
                    width: "100%",
                    // maxWidth: "380px",
                    height: "auto",
                  }}
                /> */}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Cards */}
      <Box
        sx={{
          backgroundColor: "#E1CCBE",
          padding: "1rem",
          my: "2rem",
        }}
      >
        <Container
          sx={{
            paddingX: { xs: 2, md: 10 },
            marginY: { xs: 5, md: 5 },
          }}
          maxWidth="xl"
        >
          <motion.section // a motion container for the cards
            variants={staggerContainer(0.2)}
          >
            <motion.div
              variants={fadeInPlaceVariant}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Grid container spacing={7} sx={{}}>
                {alightCards.map((card, index) => (
                  <Grid item xs={12} md={4} key={index}>
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
                          minWidth: { xs: "100%", md: "400px" },
                          minHeight: { xs: "auto", md: "400px" },
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.name}
                          style={{
                            width: "150px",
                            height: "auto",
                            borderRadius: "50%",
                            marginBottom: "1rem",
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "800", color: "#E1CCBE" }}
                        >
                          {card.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            textTransform: "uppercase",
                            color: "#E1CCBE",
                            fontWeight: "300",
                          }}
                        >
                          {card.role}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            marginTop: 2,
                            color: "#E1CCBE",
                            fontWeight: "200",
                          }}
                        >
                          {card.description[0]}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            marginTop: 2,
                            color: "#E1CCBE",
                            fontWeight: "200",
                          }}
                        >
                          {card.description[1]}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            fontSize: "0.76rem",
                            backgroundColor: "#E1CCBE",
                            color: "black",
                            marginTop: "1rem",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "#C4B3A6",
                            },
                          }}
                          href={card.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {card.buttonText}
                        </Button>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </motion.section>
          {/* End of cards */}
        </Container>
        {/* box for Research & Discovery ends here */}
      </Box>
    </>
  );
};

export default Alight;
