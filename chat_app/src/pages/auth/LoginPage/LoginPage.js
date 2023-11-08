import React, {useState, useCallback} from 'react';
import { Link } from 'react-router-dom';


import styles from './styles.module.css'

import Logo from '../../../assets/images/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import CreateAccount from '../../../components/form/CreateAccount/CreateAccount';
import Social from '../../../components/Social/Social';

import getUserList from '../../../api/account'


const eye = <FontAwesomeIcon icon={faEye} />;

const LoginPage = () => {
  const [test, setTest] = useState(getUserList)
  const [account, setAccount] = useState({
    email: "",
    password: ""
  });
  const [showCreate, setCreate] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  
  const [isSuccess, setSuccess] = useState(true)

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePopup = () => {
    setCreate(!showCreate)
    if(isSuccess){
      setSuccess(true)
    }
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAccount((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    getUserList()
    console.log(account)
  };

 

  return (
    <>
    <div className={styles.container}>
      <img src={Logo} className={styles.logo}></img>
      <h1 className={styles.chatapp}>CHAT APP</h1>
      <h2>LET'S HAVE A CHAT WITH YOUR FRIENDS</h2>
      

      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <h3>Sign in</h3>
          <div className={styles.inputBox}>
            <input
              placeholder='Email...'
              type="text"
              name="email"
              value={account.email}
              onChange={handleInputChange}
              required='required'
            />          
          </div>
          <div className={styles.inputBox}>
            <input
              placeholder='Password...'
              type={passwordShown ? "text" : "password"}
              name="password"
              value={account.password}
              onChange={handleInputChange}
              required='required'
            />
            <i className={styles.showPasswordIcon} onClick={togglePasswordVisiblity}>{eye}</i>{" "}
          </div>

          <div className={styles.forget}>
            <Link>Forget Password?</Link>
          </div>

          <button type='submit'>Sign in</button>

          <label style={{width: "300px", textAlign:'center', marginTop: '10px', alignItems: 'center'}}>
              <span style={{fontSize: "14px"}}>Not registered?</span>
              <button onClick={togglePopup} className={styles.signup}>Sign up</button>
          </label>

          <Social/>
      </form>
      
      {showCreate ? <CreateAccount toggle={togglePopup} /> : null}
      
    </div>
    </>
  )
}

export default LoginPage