/* eslint-disable */
import { SET_INVESTMENTS } from "../type";
import { toast } from "react-toastify";
import { baseUrl } from "../../config";

export const setInvestments = (
  creds,
  onSuccess = () => {},
  onFailure = () => {}
) => async (dispatch) => {
  const { user_id, token } = creds;
  try {
    await fetch(`${baseUrl}/api/v1/users/getAllInvestments?_owner=${user_id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("investments", data);
        if (data?.code == 200) {
          dispatch({ type: SET_INVESTMENTS, payload: data.data });
          // toast.success(data?.message);
        } else {
          if (data?.code == 401) {
            // window.location.replace("/");
          }
          toast.error(data?.message);
        }
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
