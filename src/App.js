import React, { useState, useEffect } from "react";
import PolicySection from "./components/PolicySection";
import Results from "./components/Results";
import { Button } from "@mui/material";
import { shuffleArray } from "./utils/shuffle";
import policiesData from "./policies.json";
import "./App.css";

const App = () => {
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [sections, setSections] = useState({});

  useEffect(() => {
    const shuffledSections = {};
    for (const [section, policies] of Object.entries(policiesData)) {
      shuffledSections[section] = shuffleArray([...policies]);
    }
    setSections(shuffledSections);
  }, []);

  const handlePolicySelect = (policyId) => {
    setSelectedPolicies((prevState) => {
      if (prevState.includes(policyId)) {
        return prevState.filter((id) => id !== policyId);
      } else {
        return [...prevState, policyId];
      }
    });
  };

  const allPolicies = Object.values(sections).flat();

  return (
    <div className="container">
      {!showResults ? (
        <>
          <h1>Policy Selector</h1>
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
        </>
      ) : (
        <Results selectedPolicies={selectedPolicies} policies={allPolicies} />
      )}
    </div>
  );
};

export default App;
