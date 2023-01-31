import React, { useState, useEffect } from "react";

function GradeOneLesson() {
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", input, ans);
    {
      if (input == ans) {
        console.log("correct");
      } else {
        console.log("try again");
      }
    }
  };

  function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }

  function mathCalc() {
    setNum1(Math.ceil(Math.random() * 10)),
    setNum2(Math.ceil(Math.random() * 10));
  }

  useEffect(() => {
    mathCalc();
  }, []);

  const ans = num1 + num2;

  let score = JSON.parse(localStorage.getItem("score"));
  if (!score) {
    score = 0;
  }
  return (
    <div>
      <h1 className="g-1-lesson-head">GradeOneLesson</h1>
      <div className="g-1-lesson-1">
        <p className="g-1-question">
          what is {num1} + {num2} ?
        </p>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="g-1-lesson-input"
        />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={mathCalc}>Next</button>
        <p className="score"> Score: {score}</p>
      </div>
    </div>
  );
}

export default GradeOneLesson;
