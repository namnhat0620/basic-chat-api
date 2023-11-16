
//đăng nhập

async function APILogin(account) {
  let headers = new Headers()
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('Access-Control-Allow-Origin', '*');

  const payload = {
      email: account.email,
      username: account.username,
      password: account.password,
    }
    
  const body = JSON.stringify(payload)
  const options = {
    headers: headers,
    method: "POST",
    body: body,   
    mode: 'cors',
  }
    
  return await fetch('https://chat-2865.onrender.com/user/sign-in', options).then(response => {
    return response.json();
  }).then(result => {
    console.log(result)
    return result
  }).catch (error => {
    console.log(error)
  })      

}

export default APILogin
