import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import styles from './styles.module.css'
import avatar from './../../assets/images/avatar.jpg'


const Message = (props) => {
  const [friend, setFriend] = useState(props.friend)
  
  const customStylesContentMessage = {
    fontWeight: friend.status? "bold" : "normal",
    display: "flex",
    whiteSpace: "nowrap"
  }


  return (
    <div className={styles.Friend_container}>
        <img src={avatar} className={styles.avatar_message}></img>

        <div className={styles.content}>
          <label>
            {friend.username}
          </label>
          <br/>

          <div style={customStylesContentMessage}>
            <span className={styles.content_message}>
              {friend.lastestMessage}
            </span>
             . {friend.timestamp}
          </div>

        </div>
    </div>
  )
}

export default Message