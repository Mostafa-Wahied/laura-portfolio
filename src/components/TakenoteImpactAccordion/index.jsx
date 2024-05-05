import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import { sections } from "../../constants/AccordionData";

export const TakenoteImpactAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("SECTIONS:",sections["takenote"]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "800",
            fontSize: "1.5rem",
            mt: 4,
            mb: 3,
          }}
        >
          Impact
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            mb: 4,
          }}
        >
          TakeNote is a transformative tool within the educational landscape,
          with the potential for profound impact on equitable education.
        </Typography>
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
          {sections["takenote"].map((section, index) => (
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
              {/* Add a divider after each section except the last one */}
              <Divider />
            </div>
          ))}
          {/* <Divider /> */}
        </Box>
      </Grid>
    </Grid>
  );
};
