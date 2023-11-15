//đăng ký

async function APIRegister(account) {
  const payload = {
    email: account.email,
    username: account.username,
    password: account.password,
    avatar: ""
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
  
return await fetch('https://chat-2865.onrender.com/user/create', options).then(response => {
  return response.json();
}).then(result => {
  console.log("result", result)
  return result
}).catch (error => {
  console.log(error)
  
console.log("response", response)
})
}
export default APIRegister
