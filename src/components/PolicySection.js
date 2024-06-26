import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./policySection.css";

const PolicySection = ({ section, policies, onPolicySelect }) => {
  const handleCheckboxChange = (policyId) => {
    onPolicySelect(policyId);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {section}
      </AccordionSummary>
      <AccordionDetails className="policies">
        {policies.map((policy) => (
          <FormControlLabel
            key={policy.id}
            control={
              <Checkbox onChange={() => handleCheckboxChange(policy.id)} />
            }
            label={policy.name}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default PolicySection;
