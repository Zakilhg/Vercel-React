import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addDecimal,
  addOperator,
  calculate,
  clear,
  backspace,
  addNumber,
  calculateError,
} from "./store/actions";

import "./style.css";

const Button = () => {
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  const handleAddDecimal = (e) => {
    if (!display.includes(".") && display !== "Error") {
      dispatch(addDecimal(e.target.name));
    }
  };

  const handleOperator = (e) => {
    if (display !== "Error") {
      dispatch(addOperator(e.target.name));
    }
  };

  const handleCalculate = () => {
    try {
      dispatch(calculate());
    } catch (e) {
      dispatch(calculateError());
    }
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const handleBackspace = () => {
    if (display !== "Error") {
      dispatch(backspace());
    }
  };

  const handleClick = (e) => {
    if (display === "0" || display === "Error") {
      dispatch(addNumber(e.target.name));
    } else {
      dispatch(addNumber(e.target.name));
    }
  };

  return (
    <div className="calc">
      <div className="result">{display}</div>
      <div className="buttons">
        <button className="half lightColor" name="C" onClick={handleClear}>
          C
        </button>
        <button
          className="quarter lightColor"
          name="B"
          onClick={handleBackspace}
        >
          ←
        </button>
        <button
          className="quarter middleColor"
          name="+"
          onClick={handleOperator}
        >
          +
        </button>

        <button
          className="quarter lightestColor noBorder"
          name="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="quarter lightestColor"
          name="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="quarter lightestColor"
          name="3"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="quarter middleColor"
          name="-"
          onClick={handleOperator}
        >
          -
        </button>

        <button
          className="quarter lightestColor noBorder"
          name="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="quarter lightestColor"
          name="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="quarter lightestColor"
          name="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="quarter middleColor"
          name="*"
          onClick={handleOperator}
        >
          *
        </button>

        <button
          className="quarter lightestColor noBorder"
          name="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="quarter lightestColor"
          name="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="quarter lightestColor"
          name="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="quarter middleColor"
          name="/"
          onClick={handleOperator}
        >
          /
        </button>

        <button className="half lightestColor" name="0" onClick={handleClick}>
          0
        </button>
        <button
          className="quarter lightestColor"
          name="."
          onClick={handleAddDecimal}
        >
          .
        </button>
        <button
          className="quarter middleColor"
          name="="
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Button;
