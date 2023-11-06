import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faTwitter} from  "@fortawesome/free-brands-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebookF} />
const google = <FontAwesomeIcon icon={faGoogle} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

const Social = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>   
         <div
        style={{
          background: 'lightgray',
          height: '1.5px',
          width: '400px',
          marginTop: '20px'
        }}
        />        
        <div style={{position: 'relative', top: '-12px', padding: '0px 10px', backgroundColor: '#F6F5F5'}}>Or sign in with</div>
        <div className={styles.socialIcon_container}>
            <i className={styles.socialIcon}>{facebook}</i>
            <i className={styles.socialIcon}>{google}</i>
            <i className={styles.socialIcon}>{twitter}</i>
        </div>

    </div>
  )
}

export default Social