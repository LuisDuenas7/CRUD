import axios from "axios"

const editUser= async (id,data)=>{


const URL=`https://users-crud1.herokuapp.com/users/${id}/`
const request= await axios.put(URL,data)
return request
}

export default editUser