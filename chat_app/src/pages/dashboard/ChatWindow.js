import React, { useState } from 'react'
import styles from './styles.module.css'

const ChatWindow = () => {
  const [isChat, setChat] = useState("")
  return (
    <div className={styles.chatapp_container}>
        
          <img src={Logo}></img>
        <h1>CHAT APP</h1>
        <h2>LET'S HAVE A CHAT WITH YOUR FRIENDS!</h2>
        <button>How to use Chat App</button>
          
        
      </div>
  )
}

export default ChatWindow