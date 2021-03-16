import {
  AUTH_SIGN_IN_START,
  AUTH_SIGN_IN,
  ADD_USER,
  UPDATE_USER,
} from "../type";

const initialState = {
  token: "",
  role: "",
  loading: false,
  firstName: "",
  lastName: "",
  email: "",
  otp: "",
  id: "",
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_SIGN_IN:
      return {
        ...state,
        loading: false,
        token: payload?.token,
        role: payload?.role,
        email: payload?.email,
        firstName: payload?.firstName,
        lastName: payload?.lastName,
        id: payload?.id,
      };

    case ADD_USER:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        otp: payload.otp,
        id: payload?.id,
      };

    case UPDATE_USER:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
