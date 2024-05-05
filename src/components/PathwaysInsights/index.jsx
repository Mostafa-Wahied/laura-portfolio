import { Typography } from "@mui/material";
import { InsightsAccordion } from "../InsightsAccordion";
import { sections } from "../../constants/AccordionData";

export const PathwaysInsights = () => (
  <InsightsAccordion
    project="pathways"
    sections={sections}
    hasImages={true}
  />
);
