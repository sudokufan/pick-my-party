import React from "react";

const Results = ({ selectedPolicies, policies }) => {
  const partyCount = {};
  const partyPolicies = {};

  selectedPolicies.forEach((policyId) => {
    const policy = policies.find((p) => p.id === policyId);
    if (policy) {
      if (!partyCount[policy.party]) {
        partyCount[policy.party] = 0;
        partyPolicies[policy.party] = [];
      }
      partyCount[policy.party]++;
      partyPolicies[policy.party].push(policy.name);
    }
  });

  const sortedParties = Object.entries(partyCount).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      <h2>Your Results</h2>
      {sortedParties.length ? (
        <div>
          <h3>Most Aligned Party: {sortedParties[0][0]}</h3>
          <p>Selected Policies:</p>
          <ul>
            {selectedPolicies.map((policyId) => {
              const policy = policies.find((p) => p.id === policyId);
              return (
                <li key={policyId}>
                  {policy.name} ({policy.party})
                </li>
              );
            })}
          </ul>
          <h4>Policy Breakdown:</h4>
          {sortedParties.map(([party, count]) => (
            <div key={party}>
              <h5>
                {party}: {count} policies
              </h5>
              <ul>
                {partyPolicies[party].map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No policies selected.</p>
      )}
    </div>
  );
};

export default Results;
