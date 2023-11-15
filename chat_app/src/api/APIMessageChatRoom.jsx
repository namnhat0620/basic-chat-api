//lấy danh sách tin nhắn

import { useAuth } from "../context/AuthContext"

async function APIMesasgeChatRoom(require) {
    const auth = useAuth()
    const required = {
        user_id: require.user_id,
        page: 1,
        limit: 20,
        room_id: require.room

    }
    const API = 'https://chat-2865.onrender.com/message/'+auth.user+'/list?page=1&limit=20&room_id='+auth.room
    console.log(API)
    
    return await fetch(API).then(response => {
    return response.json();
    }).then(result => {
    return result
    }).catch (error => {
    console.log(error)
    })
}
export default APIMesasgeChatRoom
