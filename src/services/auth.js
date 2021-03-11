import axios from 'axios'
import {baseUrl} from "../config"

export const signInRequest = (creds) => {
    //console.log({creds})
   return axios.post(`${baseUrl}/api/v1/users/login`, creds).then(res => {
        return res.data
    })
}

// export const signUpRequest = (creds) => {
//    return axios.post(`${baseUrl}/api/v1/users/signUp`, creds).then(res => {
//         return res.data
//     })
// }