import React, { useState } from 'react'
import Friend from './Friend'

import styles from './styles.module.css'



import avatar from './../../assets/images/avatar.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
const acceptd = <FontAwesomeIcon icon={faCircleCheck} />
const denied = <FontAwesomeIcon icon={faCircleXmark} />

const testData = [
    {
      id: 1,
      username: 'Nguyen Van A',
      lastestMessage: 'noi gi do that daaaaaiiiiii',
      img: '...',
      timestamp: '2 phút trước',
      status: true, /* true: đã đọc, false: chưa đọc*/
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: true
    },
    {
      id: 2,
      username: 'Nguyen Van B',
      lastestMessage: 'noi gi do di',
      img: '...',
      timestamp: '2 giờ trước',
      status: false, /* true: đã đọc, false: chưa đọc*/
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: true
    },
    {
      id: 1,
      username: 'Nguyen Van C',
      lastestMessage: 'noi gi do that daaaaaiiiiii',
      img: '...',
      timestamp: '2 phút trước',
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: true
    },{
      id: 1,
      username: 'Nguyen Van D',
      lastestMessage: 'noi gi do that daaaaaiiiiii',
      img: '...',
      timestamp: '2 phút trước',
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: false
    },
    {
      id: 2,
      username: 'Nguyen Van A',
      lastestMessage: 'noi gi do di',
      img: '...',
      timestamp: '2 giờ trước',
      status: false, /* true: đã đọc, false: chưa đọc*/
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: false
    },
    {
      id: 1,
      username: 'Nguyen Van A',
      lastestMessage: 'noi gi do that daaaaaiiiiii',
      img: '...',
      timestamp: '2 phút trước',
      status: true, /* true: đã đọc, false: chưa đọc*/
      user: false, /*true: người gửi là user, false: người gửi là bạn */
      active: false
    },
  ]
const RequestList = (props) => {
    const [friends, setFriend] = useState(testData)
  return (
    <>
        <h1>Friend Requests</h1>
          <div className={styles.list_container}>
            {friends.map((friend, index)=>{
              return ( 
                  <div className={styles.Friend_container}>
                      <div className={styles.avatar_wrapper}>

                          <img src={avatar} className={styles.avatar_message}></img>
                          
                      </div>       

                      <div className={styles.requests_content}>
                          <label>
                              {friend.username}
                          </label>
                          <div className={styles.button_container}>
                              
                              <button><i id='accepted'>{acceptd}</i></button>
                              <button><i id='denied'>{denied}</i></button>
                          </div>

                      </div>
                  </div>
                  )
              })}
          </div>
            
    </>
  )
}

export default RequestList