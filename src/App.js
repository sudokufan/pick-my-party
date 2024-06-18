import React, { useState } from "react";
import PolicySection from "./components/PolicySection";
import Results from "./components/Results";
import { Button } from "@mui/material";
import sections from "./policies.json";

const App = () => {
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handlePolicySelect = (policyId) => {
    setSelectedPolicies((prevState) => {
      if (prevState.includes(policyId)) {
        return prevState.filter((id) => id !== policyId);
      } else {
        return [...prevState, policyId];
      }
    });
  };

  const policies = Object.values(sections).flat();

  return (
    <div>
      <h1>Policy Selector</h1>
      {!showResults ? (
        <div>
          {Object.keys(sections).map((section) => (
            <PolicySection
              key={section}
              section={section}
              policies={sections[section]}
              onPolicySelect={handlePolicySelect}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowResults(true)}
          >
            Find Your Party
          </Button>
        </div>
      ) : (
        <Results selectedPolicies={selectedPolicies} policies={policies} />
      )}
    </div>
  );
};

export default App;
