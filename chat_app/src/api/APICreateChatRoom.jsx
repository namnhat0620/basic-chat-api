//tạo chat room

async function APICreateChatRoom(users) {
  const payload = {
    user_id: users,
    name: " ",
    avatar: " ",
  }

const body = JSON.stringify(payload)
const options = {
  headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
  },
  method: "POST",
  body: body,
  mode: 'cors'        
}
  
const URL = "https://qldapm.onrender.com/chat-room/"+users[0]+"/create"
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
