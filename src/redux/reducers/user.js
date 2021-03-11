import { SET_USER_INFO, GET_WALLETS } from "../type";

const initialState = {
  data: {},
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        data: payload,
      };
// case GET_WALLETS:
//   return{
//     ...state,
   
//   }
    default:
      return state;
  }
};

export default UserReducer;
