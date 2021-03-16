import { SET_MESSAGES } from "../type";

const initialState = [];

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return [...action.payload];
    default:
      return state;
  }
};

export default MessagesReducer;
