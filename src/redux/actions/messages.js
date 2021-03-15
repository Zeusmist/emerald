/* eslint-disable */

import { SET_MESSAGES } from "../type";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";

export const setMessages = (
  creds,
  onSuccess = () => {},
  onFailure = () => {}
) => async (dispatch) => {
  try {
    await fetch(`${baseUrl}/api/v1/users/getMessages`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${creds?.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data?.status == "fail") {
          if (data?.code == 401) {
            // window.location.replace("/");
          }
          toast.error(data?.message);
        }

        // if (data?.data) {
        //   this.setState({ farms: data.data });
        // } else
        //   toast.error("Unable to get farms.\nCheck your internet connection");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error.response?.data?.message);
        onError();
      });

    // dispatch({ type: SET_USER_INFO, payload: data?.data });
    onSuccess();
  } catch (error) {
    onFailure();
  }
};
