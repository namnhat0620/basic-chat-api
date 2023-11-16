//gửi lời mời kết bạn

async function APISendRequest(id) {
  const payload = {
    'user_id': id
  }
  
    const body = JSON.stringify(payload)
    console.log("body", body)
    const options = {
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
    method: "POST",
    body: body,     
    }
    
    return await fetch('https://chat-2865.onrender.com/friend/'+id+'/request', options)
    .then(response => {
    return response.json();
    }).then(result => {
    console.log("result", result)
    return result
    }).catch (error => {
    console.log(error)
    
    console.log("response", response)
    })
}
export default APISendRequest
