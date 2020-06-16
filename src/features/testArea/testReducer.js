import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../reducerUtil";

const intialState = {
  data: 24,
};

const incrementCounter = (state) => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = (state) => {
  return { ...state, data: state.data - 1 };
};

// const testReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

export default createReducer(intialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
});
