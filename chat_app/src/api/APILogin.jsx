
//đăng nhập

async function APILogin(account) {

    const payload = {
        email: account.email,
        username: account.username,
        password: account.password,
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
      
    return await fetch('https://qldapm.onrender.com/user/sign-in', options).then(response => {
      return response.json();
    }).then(result => {
      console.log(result)
      return result
    }).catch (error => {
      console.log(error)
    })      

}

export default APILogin
