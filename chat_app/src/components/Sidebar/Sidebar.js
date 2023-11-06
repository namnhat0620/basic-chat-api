import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faUserGroup, faCommentDots, faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css'
import ListFriends from '../Friends/ListFriends';

const chat = <FontAwesomeIcon icon={faCommentAlt} />
const group = <FontAwesomeIcon icon={faUserGroup} />
const waitingmessage = <FontAwesomeIcon icon={faCommentDots} />
const trash = <FontAwesomeIcon icon={faTrash} />
const setting = <FontAwesomeIcon icon={faGear} />

const Sidebar = () => {
    const icons = [
        <FontAwesomeIcon icon={faCommentAlt} />,
        <FontAwesomeIcon icon={faUserGroup} />,
        <FontAwesomeIcon icon={faCommentDots} />,
        <FontAwesomeIcon icon={faTrash} />,
        <FontAwesomeIcon icon={faGear} />
    ]
  return (
    <div className={styles.Sidebar_container}>
      <div style={{marginLeft: '20px'}}>
        {icons.map(icon => (
          <div className={styles.wrapper_icon}>
              <i className={styles.icon_sidebar}>
                  {icon}
              </i>
          </div>
        ))}
      </div>
      
        <ListFriends/>
    </div>
  )
}

export default Sidebar