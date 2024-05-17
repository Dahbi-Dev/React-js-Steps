import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function nextClick() {
    if (step < 3) setStep(step + 1);
  }
  function previousClick() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}
          </StepMessage> 

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={previousClick}
            ><span>👈</span>Previous</Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={nextClick}
            >Next <span>👉</span></Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>step {step}</h3>
      {children}
    </div>

  )
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
