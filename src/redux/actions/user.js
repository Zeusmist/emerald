import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import { GET_WALLETS, GET_CARDS } from "../type";

export const getWallets = (token) => {
  console.log({ GettingWallets: token });
  return async (dispatch) => {
    await fetch(`${baseUrl}/api/v1/users/getWallets`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data?.status == "fail") {
          if (data?.code == 401) {
            window.location.replace("/");
          }
          toast.error(data?.message);
          return;
        }
        dispatch({
          type: GET_WALLETS,
          payload: {
            wallet: data?.data,
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error?.message);
      });
  };
};

export const getCards = (token) => {
  return async (dispatch) => {
    await fetch(`${baseUrl}/api/v1/users/getAllCards`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data?.data);
        dispatch({
          type: GET_CARDS,
          payload: {
            cards: data?.data,
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};

export const getTransactions = (token, owner, sort, limit, page, type) => {
  return async (dispatch) => {
    await fetch(
      `${baseUrl}/api/v1/users/getTransactions?_owner=${owner}&sort=-${sort},-createdAt&limit=30&page=${page}&type=${type}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data?.data);
        dispatch({
          type: GET_CARDS,
          payload: {
            cards: data?.data,
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
