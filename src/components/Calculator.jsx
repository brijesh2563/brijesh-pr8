import React, { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("+");
  const [history, setHistory] = useState([]);

  const operatorSymbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };

  const calculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }
    let answer;
    switch (operator) {
      case "+":
        answer = a + b;
        break;
      case "-":
        answer = a - b;
        break;
      case "*":
        answer = a * b;
        break;
      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        answer = a / b;
        break;
      default:
        answer = 0;
    }
    setResult(answer);
    setHistory((prev) =>
      [{ num1: a, num2: b, op: operatorSymbols[operator], answer }, ...prev].slice(0, 3)
    );
  };
  const clearCalculator = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("+");
    setHistory([]);
  };

  const operators = ["+", "-", "*", "/"];

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        {/* Practical Title */}
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Practical 8
        </p>
        <h1 className="mt-2 mb-8 text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          Simple Calculator
        </h1>

        {/* Calculator Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-indigo-500/10">
          <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          />

          {/* Segmented Operator Control */}
          <div className="mb-4 grid grid-cols-4 gap-1 rounded-lg bg-gray-800 p-1">
            {operators.map((op) => (
              <button
                key={op}
                onClick={() => setOperator(op)}
                className={`rounded-md py-2.5 text-lg font-bold transition ${
                  operator === op
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {operatorSymbols[op]}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="mb-6 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
          />

          <div className="flex gap-3">
            <button
              onClick={calculate}
              className="flex-1 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Calculate
            </button>
            <button
              onClick={clearCalculator}
              className="flex-1 rounded-lg bg-gray-700 px-5 py-3 font-semibold text-white transition hover:bg-gray-600"
            >
              Clear
            </button>
          </div>

          {/* Result with Full Expression */}
          {result !== "" && (
            <div className="mt-6 rounded-xl bg-gray-950 p-4 ring-1 ring-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <p className="text-sm text-gray-400">Result</p>
              {typeof result === "number" ? (
                <>
                  <p className="mt-1 text-sm text-gray-500">
                    {num1} {operatorSymbols[operator]} {num2}
                  </p>
                  <p className="mt-1 text-4xl font-bold text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                    {result}
                  </p>
                </>
              ) : (
                <p className="mt-1 text-lg font-semibold text-rose-400">
                  {result}
                </p>
              )}
            </div>
          )}

          {/* Calculation History */}
          {history.length > 0 && (
            <div className="mt-4 rounded-lg bg-gray-800/50 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Recent
              </p>
              <div className="space-y-1">
                {history.map((h, i) => (
                  <p key={i} className="text-sm text-gray-400">
                    {h.num1} {h.op} {h.num2} = <span className="text-indigo-300 font-medium">{h.answer}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Calculator;
