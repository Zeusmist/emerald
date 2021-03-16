import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import swal from "sweetalert";

export const transferFunds = (creds, onSuccess, onError) => async (
  dispatch
) => {
  const { token, transferData } = creds;
  console.log(creds);
  try {
    await fetch(`${baseUrl}/api/v1/users/wallet/transfer`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transferData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res?.status === "success") {
          swal(`${res.message}`, ` With ${transferData.amount}`, "success");
        } else {
          swal(`${res.message}`, "Try again when issue resolved", "error");
        }
      })
      .catch((e) => {
        console.log(e);
        // toast.error()
      });
  } catch {
    onError();
  }
};

export const fundWallet = (creds, onSuccess, onError) => async (dispatch) => {
  const { token, amount } = creds;
  const redirect_url = window.location.origin + "/wallet";

  await fetch(`${baseUrl}/api/v1/users/wallet/fundWallet`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, redirect_url }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Fund wallet data", data);
      if (data?.code == 200) {
      } else {
        toast.error(data?.message);
      }
    })
    .catch((e) => {
      console.log(e);
      toast.error(e.response?.data?.message);
      onError && onError();
    });
};
