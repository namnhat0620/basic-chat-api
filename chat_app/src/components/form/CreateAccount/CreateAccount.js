import React, {useState} from 'react'
import styles from './styles.module.css'

import UserDatePicker from '../../DatePicker/DatePicker';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import Success from './Success';
const eye = <FontAwesomeIcon icon={faEye} />;

const CreateAccount = (props) => {
    const [account, setAccount] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        date: "",
        gender: "",
      });

    const [passwordShown, setPasswordShown] = useState(false);
    const [isSuccess, setSuccess] = useState(false)
    
    function handleSignup(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAccount((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isSuccess)
        setSuccess(true)
      };
    return (
        <div className={styles.popup}>
            
                {isSuccess ? 
                    <Success toggle={props.toggle}/>

                    :

                    <form onSubmit={handleSubmit} className={styles.formSignup}>
                    
                    <h1 style={{color: "var(--main-color)"}}>Create Account</h1>
                        <label>
                            Full Name:
                            <div className={styles.inputBox}>
                            <input type="text" value={account.fullname} onChange={handleInputChange} name='fullname' required='required'/>
                            </div>                        
                        </label>
                        <label>
                            Email:
                            <div className={styles.inputBox}>
                                <input type="text" value={account.email} onChange={handleInputChange}  name='email' required='required'/>
                            </div>
                            
                        </label>
                        <label>
                            Phone:
                            <div className={styles.inputBox}>
                                <input type="text" value={account.phone} onChange={handleInputChange}  name='phone' required='required'/>
                            </div>
                            
                        </label>
                        <label>
                            Password:
                            <div className={styles.inputBox}>
                                <input
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                value={account.password}
                                onChange={handleInputChange}
                                required='required'
                                />
                                <i className={styles.showPasswordIcon} onClick={togglePasswordVisiblity}>{eye}</i>{" "}
                            </div>
                        </label>
                        <label>
                            Confirm Password:
                            <div className={styles.inputBox}>
                                <input 
                                    type={passwordShown ? "text" : "password"} 
                                    value={account.confirmpassword} onChange={handleInputChange}  
                                    name='confirmpassword' 
                                    required='required'
                                    />
                                <i className={styles.showPasswordIcon} onClick={togglePasswordVisiblity}>{eye}</i>{" "}
                            </div>
                        </label>
                        
                        <div className={styles.optionbox}>
                            <label>
                            <span style={{paddingTop: "20px"}}>Date</span>
                                
                                <UserDatePicker/>
                           
                            </label>
                            
                            <div>
                                <div>Gender</div>
                                <select value={account.gender} onChange={handleInputChange} name="gender" type="text" defaultValue="Others">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
    
                        <button type='submit'>Sign up</button>
    
                        <label style={{width: "300px", textAlign:'center', marginTop: '10px', alignItems: 'center'}}>
                            <span style={{fontSize: "12px", }}>Already have an account?</span>
                            <button onClick={props.toggle} className={styles.signin}>Sign in</button>
                        </label>
                    </form>
                }
                
                
        </div>
    )
}


export default CreateAccount