import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = Function("return " + display)();
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <input
        type="text"
        value={display}
        readOnly
        className="display"
      />

      <div className="buttons">
        <button onClick={clearDisplay} className="clear">C</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => handleClick("%")}>%</button>
        <button onClick={() => handleClick("/")}>÷</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>×</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>−</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("0")} className="zero">0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;