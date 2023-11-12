import { faTemperatureDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const API = 'https://qldapm.onrender.com/user/sign-in'

async function APILogin(account) {

    const payload = {
        'email': account.email,
        'username': account.username,
        'password': account.password,
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
      
    const response = await fetch('https://qldapm.onrender.com/user/sign-in', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // body: '{\n  "email": "test2@gmail.com",\n  "username": "test2",\n  "password": "123456",\n  "avatar": ""\n}',
        body: JSON.stringify({
            'email': 'test3@gmail.com',
            'username': 'test3',
            'password': '123456',
            'avatar': ''
        })
    }).then(response => {
        return response.json();
      }).then(result => {
        console.log(result.statusCode);
        const statusCode = result.statusCode
        if(statusCode == 200) return true 
        else if(statusCode == 400) return result.message
      }).catch (error => {
        console.log(error)
      })

    return response
}

export default APILogin
