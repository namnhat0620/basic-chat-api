//lấy danh sách tin nhắn

async function APIMesasgeChatRoom(require) {
  
    const required = {
        user_id: require.user_id,
        page: 1,
        limit: 20,
        room_id: 1

    }
    const API = 'https://qldapm.onrender.com/message/'+required.user_id+'/list?page=1&limit=20&room_id='+required.room_id
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
