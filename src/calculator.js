import './calculator.css';
import React, { useState, useEffect } from 'react';

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  useEffect(() => {
    setResult(0);
  }, [num1, num2]);

  return (
    <div id="calculator">
      <header className="App-header">
       <p>
          Assigment1
        </p>
       </header>
      <h1>Simple Calculator</h1>
      <label className="label" htmlFor="num1">Number 1:</label>
      <input type="number" id="num1" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <br />
      <label className="label" htmlFor="num2">Number 2:</label>
      <input type="number" id="num2" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <br />
      <button className="button" onClick={handleAdd}>Add</button>
      <button className="button" onClick={handleSubtract}>Subtract</button>
      <button className="button" onClick={handleMultiply}>Multiply</button>
      <button className="button" onClick={handleDivide}>Divide</button>
      <br />
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;