import React, { useState } from 'react';
import './index.css'; // We'll use this for additional CSS

function RetirementCalculator() {
  // State to hold user input values
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [annualSavings, setAnnualSavings] = useState('');
  const [returnRate, setReturnRate] = useState('');
  const [finalSavings, setFinalSavings] = useState(null);

  // Function to calculate savings at retirement
  const calculateRetirementSavings = () => {
    const yearsToGrow = retirementAge - currentAge;
    const interestRate = returnRate / 100;
    let totalSavings = parseFloat(currentSavings) || 0;

    // Compound savings over the years
    for (let year = 1; year <= yearsToGrow; year++) {
      totalSavings += parseFloat(annualSavings) || 0;
      totalSavings *= 1 + interestRate;
    }

    setFinalSavings(totalSavings.toFixed(2)); // Set final savings after calculation
  };

  return (
    <div className="calculator-container">
      <h2>Retirement Savings Calculator</h2>

      <div className="input-group">
        <label>
          Current Age:
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            placeholder="Enter your current age"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Retirement Age:
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            placeholder="Enter desired retirement age"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Current Savings ($):
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            placeholder="Enter current savings"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Annual Savings ($):
          <input
            type="number"
            value={annualSavings}
            onChange={(e) => setAnnualSavings(e.target.value)}
            placeholder="Enter annual savings"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Expected Annual Return Rate (%):
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
            placeholder="Enter return rate"
          />
        </label>
      </div>

      <button className="calculate-button" onClick={calculateRetirementSavings}>
        Calculate
      </button>

      {finalSavings !== null && (
        <div className="result">
          <h3>Estimated Savings at Retirement: ${finalSavings}</h3>
        </div>
      )}
    </div>
  );
}

export default RetirementCalculator;