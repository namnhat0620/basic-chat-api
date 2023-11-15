//lấy danh sách bạn bè/lời mời kết bạn

async function APIFriends(require) {
  
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
    
    const API = 'https://qldapm.onrender.com/friend/'+require.user_id+'/list?page=1&limit=20&type='+required.type
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
