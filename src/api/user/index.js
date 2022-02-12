import baseURL from "../baseURL";
import axios from '@/utils/http'

// const UserService  = {
//     sayHello (url) {
//         return axios.get(baseURL + url)
//     }
// }
//
// export default UserService


export class UserService {
    static async sayHello (url) {
        console.log(import.meta.env.VITE_API_HOST)

        return axios.get(baseURL + url)
    }
}