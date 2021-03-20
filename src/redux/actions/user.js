import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import { GET_WALLETS, GET_CARDS, UPDATE_AUTH, SET_BANKS } from "../type";

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
            dispatch({ type: UPDATE_AUTH, payload: { token: null } });
            setTimeout(() => window.location.replace("/"), 2000);
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

export const getBanks = (token) => {
  return async (dispatch) => {
    await fetch(`${baseUrl}/api/v1/users/getBankDetails`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Get bank data:", data);
        if (data?.code == 200) {
          dispatch({
            type: SET_BANKS,
            payload: {
              banks: data?.data,
            },
          });
        } else {
          toast.error(data?.message);
        }
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
