import { AUTH_SIGN_IN_START, AUTH_SIGN_IN, ADD_USER } from "../type";

const initialState = {
  token: "",
  role: "",
  loading: false,
  firstName: '',
  lastName: '',
  email: '',
  otp: '',
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
      firstName:payload?.firstName,
      lastName:payload?.lastName
    };

    case ADD_USER:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        otp: payload.otp,
      };

    default:
      return state;
  }
};

export default AuthReducer;
