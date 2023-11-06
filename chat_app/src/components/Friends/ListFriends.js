import React, { useEffect, useState, useContext } from 'react'
import Friend from './Friend'
import Search from '../Search/Search'
import styles from './styles.module.css'
const testData = [
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do di',
    img: '...'
  },
  {
    id: 1,
    username: 'Nguyen Van A',
    lastestMessage: 'noi gi do di',
    img: '...'
  },
]

const ListFriends = (props) => {
  const [friends, setFriends] = useState(testData)
  


  return (
    <div className={styles.Friends_container}>
      <Search/>
      <div>

        {friends.map((item, index)=>{
          return ( 
            <Friend friend = {item}/>)
        })}
      </div>
    </div>
  )
}

export default ListFriends