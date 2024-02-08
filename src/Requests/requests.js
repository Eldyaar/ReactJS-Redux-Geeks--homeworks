import axios from "axios"

export const request = async (url) => {
   const response = await axios.get(url)
   const postData = response.data
}