import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function nextClick() {
    setStep(step + 1);
    if (step >= 3) setStep(3);
  }
  function previousClick() {
    setStep(step - 1);
    if (step <= 1) setStep(1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">{`step ${step} : ${messages[step - 1]}`}</p>

      <div className="buttons">
        <button
          className="previous"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={previousClick}
        >
          Previous
        </button>
        <button
          className="next"
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={nextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
