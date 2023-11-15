//tạo chat room

import { useAuth } from "../context/AuthContext"

async function APICreateChatRoom({group}) {
  const payload = {
    user_id: group.user_id,
    name: group.name,
    avatar: ""
  }
const auth = useAuth()
const body = JSON.stringify(group)
const options = {
  headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
  },
  method: "POST",
  body: body,
  mode: 'cors'        
}
  
const URL = "https://chat-2865.onrender.com/chat-room/"+auth.user+"/create"
return await fetch(URL, options).then(response => {
  return response.json();
}).then(result => {
  console.log("result", result)
  return result
}).catch (error => {
  console.log(error)
  
console.log("response", response)
})
}
export default APICreateChatRoom
