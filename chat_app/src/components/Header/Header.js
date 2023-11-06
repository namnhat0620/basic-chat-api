import React from 'react'
import Logo from '../../assets/images/logo.png'
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const noti = <FontAwesomeIcon icon={faBell} />
const avatar = <FontAwesomeIcon icon={faCircleUser} />
const Header = () => {
  return (
    <div className={styles.Header_container}>
      <div className={styles.Header}>
      <img src={Logo} className={styles.Header_logo_img}></img>
        <h1>Chat App</h1>
      </div>

      <div className={styles.Header}>
        <i className={styles.Header_logo_icon}>{noti}</i>
        <i className={styles.Header_logo_icon}>{avatar}</i>
      <div>

        </div>
      </div>
    </div>
  )
}

export default Header