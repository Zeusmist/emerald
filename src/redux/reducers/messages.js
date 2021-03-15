import { SET_MESSAGES } from "../type";

const initialState = {
  messages: {},
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      const { message } = action;

      return state;
    default:
      return state;
  }
};

export default MessagesReducer;
