import React from 'react'

async function APIRegister(account) {
    const payload = {
        "email": account.email,
        "username": account.username,
        "password": account.password,
        "avatar": "avatar.png",
      }
      
      const body = JSON.stringify(payload)
      console.log("body", body)
      const options = {
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        method: "POST",
        body: payload,
        mode: 'cors'        
      }
      
    const response = await fetch('https://qldapm.onrender.com/user/create', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        return response.json();
      }).then(result => {
        console.log(result.statusCode);
        const statusCode = result.statusCode
        if(statusCode == 200) return true 
        else {
          console.log("loi_api", result.message)
          return false
        }
      }).catch (error => {
        console.log(error)
      })

    return true
}
export default APIRegister
