import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faUserGroup, faCommentDots, faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'
import ListFriends from '../Messages/AllMessages';
import './style.css'

const chat = <FontAwesomeIcon icon={faCommentAlt} />
const group = <FontAwesomeIcon icon={faUserGroup} />
const waitingmessage = <FontAwesomeIcon icon={faCommentDots} />
const trash = <FontAwesomeIcon icon={faTrash} />
const setting = <FontAwesomeIcon icon={faGear} />

const Sidebar = () => {
  const [isClick, setClick] = useState(false)
  const icons = [
    {
      id: 1,
      path: '/allmessages',
      icon: <FontAwesomeIcon icon={faCommentAlt} />,
    },
    {
      id: 2,
      path: '/allfriends',
      icon: <FontAwesomeIcon icon={faUserGroup} />,
    },
    {
      id: 3,
      path: '/allwaitings',
      icon: <FontAwesomeIcon icon={faCommentDots} />,
    },
    {
      id: 4,
      path: '/alltrashs',
      icon: <FontAwesomeIcon icon={faTrash} />,
    },
    {
      id: 5,
      path: '/setting',
      icon: <FontAwesomeIcon icon={faGear} />
    }
  ]
    const handleClickIcon = () => {
      setClick(!isClick)
    }
  return (
    <div className={styles.Sidebar_container}>
      <div style={{marginLeft: '20px'}}>
        {icons.map(icon => (
          
          <Link id={icon.id} className={isClick? "wrapper_icon" : "wrapper_icon"} to={icon.path} onClick={handleClickIcon}>
          
              <i className={styles.icon_sidebar}>
                  {icon.icon}
              </i>
          </Link>
        ))}
      </div>
      
        <ListFriends/>
    </div>
  )
}

export default Sidebar