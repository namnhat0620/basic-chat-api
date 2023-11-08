import React, {useState} from 'react'
import styles from './styles.module.css'



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const success = <FontAwesomeIcon icon={faCircleCheck} />

const Success = (props) => {
    const [isSuccess, setSuccess] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isSuccess)
        setSuccess(true)
    }
    return (
        <div className={styles.popup}>
                <form onSubmit={handleSubmit} className={styles.formSignup}>
                    
                 <h1 style={{fontSize: '22px', textAlign: 'center'}}>Your account has been created succesfully!</h1>
                 <i className={styles.successIcon}>{success}</i>
                 <h1 style={{fontSize: '22px'}}>Welcome to Chat App!</h1>
                 <button onClick={props.toggle} className={styles.signin}>Sign in</button>
                </form>
                
        </div>
    )
}


export default Success