//lấy danh sách bạn bè/lời mời kết bạn

import { useAuth } from "../context/AuthContext"

async function APIFriends(type) {
    const auth= useAuth()
    const required = {
        user_id: require.user_id,
        page: 1,
        limit: 20,
        type: require.type

    }
    const options = {
        headers: {
            'accept': 'application/json'
        }        
    }
    
    const API = 'https://chat-2865.onrender.com/friend/'+auth.user+'/list?page=1&limit=20&type='+type
    console.log(API)
    
    return await fetch(API, options).then(response => {
    return response.json();
    }).then(result => {
    return result
    }).catch (error => {
    console.log(error)
    })
}
export default APIFriends
