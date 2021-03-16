/* eslint-disable */

import {
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_START,
  SET_USER_INFO,
  ADD_USER,
  UPDATE_USER,
} from "../type";
import { signInRequest } from "../../services";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";

export const signInStart = (
  creds,
  onSuccess = () => {},
  onFailure = () => {}
) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_SIGN_IN_START });
    let data = await signInRequest(creds);
    console.log({ data });
    dispatch({
      type: AUTH_SIGN_IN,
      payload: {
        token: data?.token,
        role: data?.data?.user?.role,
        email: data?.data?.user?.email,
        firstName: data?.data?.user?.firstName,
        lastName: data?.data?.user?.lastName,
        id: data?.data?.user?._id,
      },
    });

    dispatch({ type: SET_USER_INFO, payload: data?.data });
    toast.success(data?.message);
    onSuccess();
  } catch (error) {
    dispatch({ type: AUTH_SIGN_IN, payload: {} });
    toast.error(error.response?.data?.message);
    onFailure();
  }
};

export const addUsers = (creds, onSucces = () => {}, onError = () => {}) => {
  return (dispatch) => {
    fetch(`${baseUrl}/api/v1/users/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.status == "fail") {
          toast.error(data?.message);
          onFailure();
          return;
        }
        dispatch({
          type: ADD_USER,
          payload: {
            firstName: data?.data?.user?.firstName,
            lastName: data?.data?.user?.lastName,
            email: data?.data?.user?.email,
            otp: data?.data?.user?.otp,
          },
        });
        onSucces();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error.response?.data?.message);
        onError();
      });
  };
};

export const updateUser = (creds, onSucces, onError) => async (dispatch) => {
  await fetch(`${baseUrl}/api/v1/users/updateMe`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${creds?.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds.changes),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      if (res?.code == 200) {
        toast.success(res?.message);
        dispatch({
          type: UPDATE_USER,
          payload: creds.changes,
        });
      } else {
        toast.error(res?.message);
        if (res?.code == 401) window.location.replace("/");
      }
    })
    .catch((e) => {
      console.log("error", e);
      toast.error(e.response?.data?.message);
    });
};
