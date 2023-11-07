import React, {useState} from 'react'
import styles from './styles.module.css'

import avatar from './../../assets/images/avatar.jpg'
const Friend = (props) =>{
    const [friend, setFriend] = useState(props.friend)

  return (
    <div className={styles.Friend_container}>
        <div className={styles.avatar_wrapper}>

            <img src={avatar} className={styles.avatar_message}></img>
            <div className={ friend.active ? styles.actived_friend : styles.inactived_friend}></div>
            
        </div>       

        <div className={styles.friend_content}>
          <label>
            {friend.username}
          </label>
        </div>
    </div>
  )
}

export default Friend