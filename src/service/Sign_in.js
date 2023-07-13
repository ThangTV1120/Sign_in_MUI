import axios from "./CallAPI";
const fetAllUser=()=>{
    return axios.get("/user")
}

export {fetAllUser}