import {
  ADD_DECIMAL,
  ADD_OPERATOR,
  CALCULATE,
  CLEAR,
  BACKSPACE,
  ADD_NUMBER,
  CALCULATE_ERROR,
} from "./actions";

const initialState = {
  display: "0",
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECIMAL:
      if (!state.display.includes(".") && !state.error) {
        return { ...state, display: state.display + action.decimal };
      } else {
        return state;
      }
    case ADD_OPERATOR:
      if (!state.error) {
        return { ...state, display: state.display + action.operator };
      } else {
        return state;
      }
    case CALCULATE:
      try {
        return { ...state, display: eval(state.display), error: false };
      } catch (e) {
        return { ...state, display: "Error", error: true };
      }
    case CLEAR:
      return { ...state, display: "0", error: false };
    case BACKSPACE:
      if (!state.error) {
        return { ...state, display: state.display.slice(0, -1) };
      } else {
        return state;
      }
    case ADD_NUMBER:
      if (state.display === "0" || state.error) {
        return { ...state, display: action.number, error: false };
      } else {
        return { ...state, display: state.display + action.number };
      }
    case CALCULATE_ERROR:
      return { ...state, display: "Error", error: true };
    default:
      return state;
  }
};
