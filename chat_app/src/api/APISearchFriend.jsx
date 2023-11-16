//tìm kiếm bạn bè

async function APISearchFriend(keyword) {
    
    const options = {
        headers: {
            'accept': 'application/json'
        }        
    }

    
    const API = 'https://chat-2865.onrender.com/user/detail?'+ keyword +'&username=' + keyword
    
    
    
    return await fetch(API, options).then(response => {
    return response.json();
    }).then(result => {
    console.log("result", result.data)
    return result.data
    }).catch (error => {
    console.log(error)
    
    console.log("response", response)
    })
}
export default APISearchFriend
