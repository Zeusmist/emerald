import {
  SET_USER_INFO,
  GET_CARDS,
  GET_WALLETS,
  GET_TRANSACTIONS,
  SET_BANKS,
} from "../type";

const initialState = {
  data: {},
  cards: [],
  banks: [],
  wallets: [],
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SET_USER_INFO:
    //   return {
    //     ...state,
    //     data: payload,
    //   };
    case GET_WALLETS:
      return {
        ...state,
        wallets: payload?.wallet,
      };

    case GET_CARDS:
      return {
        ...state,
        cards: payload?.cards,
      };

    case SET_BANKS:
      return {
        ...state,
        banks: payload?.banks,
      };

    case GET_TRANSACTIONS:
      console.log(payload);
    default:
      return state;
  }
};

export default UserReducer;
