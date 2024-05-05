import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import pathwaysInsightsImage1 from "../../assets/pathways-insights-image1.jpg";
import pathwaysInsightsImage2 from "../../assets/pathways-insights-image2.jpg";

export const InsightsAccordion = ({ project, sections }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.8rem",
            mb: 4,
          }}
        >
          Insights
        </Typography>
        <Box sx={{ mt: 2, py: 3 }}>
          <img
            src={pathwaysInsightsImage1}
            alt={`Descriptive text for ${project}`}
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              "&::before": { content: '"“"' }, // CSS for adding opening quotation mark
              "&::after": { content: '"”"' }, // CSS for adding closing quotation mark
              fontSize: "1rem", // Adjust font size as needed
              color: "#333",
            }}
          >
            If there’s anything I can do to help, help me help you. Respect is
            like an investment. You get it returned to you with something more.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#333",
              marginLeft: { xs: 0, md: 3 },
              fontWeight: "200",
            }}
          >
            — Afghan refugee and former HR director
          </Typography>
        </Box>
        <Box sx={{ mt: 2, py: 3 }}>
          <img
            src={pathwaysInsightsImage2}
            alt={`Descriptive text for ${project}`}
            style={{ width: "100%", marginBottom: "8px" }}
          />
          <Typography
            variant="body1"
            sx={{
              mt: 3,
              "&::before": { content: '"“"' }, // CSS for adding opening quotation mark
              "&::after": { content: '"”"' }, // CSS for adding closing quotation mark
              fontSize: "1rem", // Adjust font size as needed
              color: "#333", 
            }}
          >
            I thought I’d come in and help, but they’ve helped me.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#333",
              marginLeft: { xs: 0, md: 3 },
              fontWeight: "200",
            }}
          >
            — Humanitarian aid worker in Za'atari camp
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box
          sx={{
            // maxWidth: 650,
            //  mx: "auto",
            marginLeft: { xs: 0, md: 6 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Divider />
          {sections[project].map((section, index) => (
            <div key={index}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  bgcolor: "transparent", // Make the background transparent
                  boxShadow: "none", // Optional: remove box-shadow if you prefer
                  "&::before": {
                    display: "none",
                  },
                  "&:not(:last-child)": {
                    borderBottom: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      my: 1.5,
                    }}
                  >
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>{section.content}</Typography> */}
                  {typeof section.content === "string" ? (
                    <Typography>{section.content}</Typography>
                  ) : (
                    Object.keys(section.content).map((part, index) => (
                      <Typography key={index} sx={{ mb: 2 }}>
                        {section.content[part]}
                      </Typography>
                    ))
                  )}
                </AccordionDetails>
              </Accordion>
              {index < sections.length - 1 && <Divider />}
              <Divider />
            </div>
          ))}
          {/* <Divider /> */}
        </Box>
      </Grid>
    </Grid>
  );
};
