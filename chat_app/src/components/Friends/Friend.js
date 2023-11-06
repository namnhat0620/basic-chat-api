import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import styles from './styles.module.css'
import avatar from './../../assets/images/avatar.jpg'


const Friend = (props) => {
  const [friend, setFriend] = useState(props.friend)


  const handleAddtoCart = (id) => {
    
  }

  return (
    <div className={styles.Friend_container}>
        <img src={avatar} className={styles.avatar_message}></img>
        
    </div>
  )
}

export default Friend