import React, { useState } from "react";

import "./App.css";

function Morgage() {
  const [mortgageAmount, setMortgageAmount] = React.useState(0);
  const [mortgageTerm, setMortgageTerm] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [mortgageType, setMortgageType] = React.useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);

  const [totalPayment, setTotalPayment] = useState(0)

  const calculateMortgage = () => {
    const principal = parseFloat(mortgageAmount);
    const years = parseFloat(mortgageTerm);
    const rate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = years * 12;
    let payment = 0;

    if (mortgageType === "repayment") {
     
      const totalRepayment = payment * numberOfPayments;
      setTotalPayment(totalRepayment)

      payment =
        (principal * rate * Math.pow(1 + rate, numberOfPayments)) /
        (Math.pow(1 + rate, numberOfPayments) - 1);
      setMonthlyPayment(isNaN(payment) ? 0 : payment.toFixed(2));
    } else {



      payment = principal * rate;
      setMonthlyPayment(isNaN(payment) ? 0 : payment.toFixed(2));
    } 

    const totalRepayment = (payment * numberOfPayments).toFixed(2);
    setTotalPayment(totalRepayment)

  };

  const clearAll = () => {
    setMortgageAmount(0);
    setMortgageTerm(0);
    setInterestRate(0);
    setMortgageType("repayment");
    setMonthlyPayment(0);
  };

  return (
    <div className="genCon">
      <div className="con">
        <div className="part1">
          <div className="part1Div">
            <h2>Mortgage Calculator</h2>
            <button onClick={clearAll}>clear All</button>
          </div>

          <div className="amountDiv">
            <label>Mortgage Amount</label>
            <span>£</span>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
          </div>

          <div className="shortPart1">
            <div className="shortPart1div">
              <label>Mortgage Term</label>
              <input
                type="number"
                id="terms"
                value={mortgageTerm}
                onChange={(e) => setMortgageTerm(e.target.value)}
                className="input1"
              />
              <span>Years</span>
            </div>

            <div className="interest">
              <label>Interest Rate</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <span>%</span>
            </div>
          </div>

          <div className="mortgagelast">
            <h3>Mortgage Type</h3>
            <div className="mortgagelastdiv2">
              <input
                type="radio"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
              />
              <span>Repayment</span>
            </div>

            <div className="mortgageLastDiv3">
              <input
                type="radio"
                checked={mortgageType === "interest-only"}
                onChange={() => setMortgageType("interest-only")}
              />
              <span>Interest Only</span>
            </div>
          </div>

          <div className="mortgageBtn">
            <button onClick={calculateMortgage}>Calculator Repayments</button>
          </div>
        </div>

        <div className="mortgage2">
          {monthlyPayment === 0 && (
            <>
                <h3>Results shown here.</h3>
              <p className="showon">
                complete the form and click "calculate repayments" see what your
                monthly repayments would be
              </p>
            </>
          )}

          <div className="showoff">
            {monthlyPayment != 0 && (
              <>
                <div className="repayment">
                  <p>Your monthly repayments</p>

                  <h3> £{monthlyPayment}</h3>
                </div>

                <div className="totalRepay">
                  <p>Total you'll repay over the term</p>

                  <h3>£ {totalPayment} </h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morgage;
