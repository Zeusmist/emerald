import { SET_INVESTMENTS } from "../type";

const initialState = [];

const InvestmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVESTMENTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default InvestmentsReducer;
