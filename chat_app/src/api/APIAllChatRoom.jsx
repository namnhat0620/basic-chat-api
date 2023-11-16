
//lấy danh sách chat room
async function APIAllChatRoom(user_id) {
  
    const options = {
        headers: {
            'accept': 'application/json'
        }        
    }
    const API = 'https://chat-2865.onrender.com/chat-room/'+user_id+'/list?page=1&limit=20'
    console.log(API)
    
    return await fetch(API, options).then(response => {
    return response.json();
    }).then(result => {
        console.log('data',result.data)
     return result
    }).catch (error => {
    console.log(error)
    })
}
export default APIAllChatRoom
