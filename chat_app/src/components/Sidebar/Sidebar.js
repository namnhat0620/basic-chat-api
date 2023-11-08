import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faUserGroup, faCommentDots, faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'
import './style.css'
import AllMessages from '../Messages/AllMessages';
import AllFriends from '../AllFriends/AllFriends';

const Sidebar = () => {
  const [isClick, setClick] = useState(false)
  const [showComponent, setComponent] = useState(1)
  const icons = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faCommentAlt} />,
    
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faUserGroup} />,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faCommentDots} />,
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faTrash} />,
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faGear} />
    }
  ]

    const handleClickIcon = (id) => {
      setClick(!isClick)
      setComponent(id)
      console.log(showComponent)
    }
  return (
    <div className={styles.Sidebar_container}>
      <div style={{marginLeft: '20px'}}>
        {icons.map(icon => (
          
          <button className={isClick? "wrapper_icon" : "wrapper_icon"} onClick={()=>handleClickIcon(icon.id)}>          
              <i className={styles.icon_sidebar}>
                  {icon.icon}
              </i>
          </button>
        ))}
      </div>      
      <div className={styles.list_side}>
          {showComponent == 1 && <AllMessages/>}
          {showComponent == 2 && <AllFriends/>}
        
      </div>
    </div>
  )
}

export default Sidebar