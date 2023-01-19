export const ADD_DECIMAL = "ADD_DECIMAL";
export const ADD_OPERATOR = "ADD_OPERATOR";
export const CALCULATE = "CALCULATE";
export const CLEAR = "CLEAR";
export const BACKSPACE = "BACKSPACE";
export const ADD_NUMBER = "ADD_NUMBER";
export const CALCULATE_ERROR = "CALCULATE_ERROR";

export const calculateError = () => {
  return {
    type: CALCULATE_ERROR,
  };
};

export const addDecimal = (decimal) => {
  return { type: ADD_DECIMAL, decimal };
};

export const addOperator = (operator) => {
  return { type: ADD_OPERATOR, operator };
};

export const calculate = () => {
  return { type: CALCULATE };
};

export const clear = () => {
  return { type: CLEAR };
};

export const backspace = () => {
  return { type: BACKSPACE };
};

export const addNumber = (number) => {
  return { type: ADD_NUMBER, number };
};
