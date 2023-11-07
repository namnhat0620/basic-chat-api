import React, { useEffect, useState, useContext } from 'react'
import Friend from './Message'
import Search from '../Search/Search'
import styles from './styles.module.css'
const testData = [
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 2,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do di',
    img: '...',
    timestamp: '2 giờ trước',
    status: false, /* true: đã đọc, false: chưa đọc*/
    user: true /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },{
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 2,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do di',
    img: '...',
    timestamp: '2 giờ trước',
    status: false, /* true: đã đọc, false: chưa đọc*/
    user: true /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 2,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do di',
    img: '...',
    timestamp: '2 giờ trước',
    status: false, /* true: đã đọc, false: chưa đọc*/
    user: true /*true: người gửi là user, false: người gửi là bạn */
  },
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do that daaaaaiiiiii',
    img: '...',
    timestamp: '2 phút trước',
    status: true, /* true: đã đọc, false: chưa đọc*/
    user: false /*true: người gửi là user, false: người gửi là bạn */
  },
]

const AllMessages = (props) => {
  const [friends, setFriends] = useState(testData)
  
  return (
    <div className={styles.container}>
      <Search/>
      <h1>All messages</h1>
      <div className={styles.Friends_container}>

        {friends.map((item, index)=>{
          return ( 
            <Friend friend = {item}/>)
        })}
      </div>
    </div>
  )
}

export default AllMessages