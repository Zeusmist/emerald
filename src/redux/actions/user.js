import {GET_WALLETS} from '../type'


export const getWallets = (token)=>{
    return dispatch=>{
         fetch(
            "https://desolate-anchorage-42140.herokuapp.com/api/v1/users/getWallets",
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
              console.log("Success:", data.data);
              dispatch({type: GET_WALLETS, payload: {
                  walletOne:data?.data
              }})
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    }
}