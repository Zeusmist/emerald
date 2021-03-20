import { toast } from "react-toastify";
import { baseUrl } from "../../config";
import swal from "sweetalert";

const redirect_url = window.location.origin + "/wallet";

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
      .then((data) => {
        console.log("data", data);
        if (data?.code === 200) {
          swal(`${data.message}`, ` With ${transferData.amount}`, "success");
          setTimeout(() => {
            window.open(redirect_url, "_self");
          }, 2000);
        } else {
          swal(`${data.message}`, "Try again when issue resolved", "error");
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

  await fetch(
    `${baseUrl}/api/v1/users/wallet/fundWallet?amount=${amount}&redirect_url=${redirect_url}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ amount, redirect_url }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Fund wallet data", data);
      if (data?.code == 200) {
        window.open(data?.data?.link, "_blank");
        toast.success(data?.message + "\n Make payment in the opened tab");
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
