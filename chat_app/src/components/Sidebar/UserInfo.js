import React, { useState } from 'react'
import styles from './styles.module.css'

const icons = [
  {
    label: "Profile",
    img: require('./../../assets/images/profile.png')
  },
  {
    label: "Notification",
    img: require('./../../assets/images/noti.png')
  },
  {
    label: "Search",
    img: require('./../../assets/images/search.png')
  },
]

const testData = {
  name: "Thanh Triet",
  phone: '0123456789',
  birth: 'gender',
  avatar: ''
}


const UserInfo = () => {
    const [user, setUser] = useState(testData)
    const [showComponent, setComponent] = useState('')
    const isClick = true
    const handleClickIcon = (id) => {
      setComponent(id)
    }
  return (
    <div className={styles.right_side_container}>
      <div className={styles.avatar}><img></img></div>
      <div className={styles.message_features}>
      {icons.map(icon => (
          
          <button  onClick={()=>handleClickIcon(icon.id)}>          
              <img src={icon.img}/>
              {icon.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default UserInfo