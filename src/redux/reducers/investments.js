import { SET_INVESTMENTS } from "../type";

const initialState = {};

const InvestmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVESTMENTS:
      const { investments } = action;

      return state;
    default:
      return state;
  }
};

export default InvestmentsReducer;
