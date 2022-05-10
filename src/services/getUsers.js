import axios from "axios"

const getUsers= async()=>{

const URL='https://users-crud1.herokuapp.com/users/'
const request= await axios.get(URL)

return request
}

export default getUsers