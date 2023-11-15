
import { useState, useContext } from "react"
import { useAuth } from "../context/AuthContext";
import Validation from "./Validation";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom'
import APIRegister from "../api/APIRegister";

function Register({handleToggle, show, setShow, isSuccess, setSuccess}) {
    const auth = useAuth() //context

    const toggleError = () => setSuccess(!isSuccess);
    const [errorMessage, setErrorMessage] = useState('')

    const [passwordShown, setPasswordShown] = useState(false);
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        phone: "",
        confirmpassword: "",
        date: "dd/mm/yyyy",
        gender: "Other"
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (event) => {
        const value = {...user, [event.target.name]: event.target.value}
        setUser(value)    
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrors(Validation(user))   

        const res = await APIRegister(user)
        console.log(res)
        if(res.statusCode == 200){    
            setShow(false)          
            setSuccess(true) 
        }
        else{
            setSuccess(false)
            setErrorMessage(res.message)
        }
        
    }

    
  return (
    <Modal 
        show={show} 
        onHide={handleToggle} 
        centered
        aria-labelledby="example-custom-modal-styling-title-sm"
    >


        <Modal.Header closeButton className="px-4">
          <Modal.Title className="ms-auto border-0" style={{color: '#1687A7'}}>Create Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            {!isSuccess && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errorMessage}</div>}
            <Col>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label className="fw-bolder">Fullname</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleInputChange} className='rounded-pill' required/>
                    {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.username}</div>}
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bolder">Email:</Form.Label>
                    <Form.Control type="text" name="email" onChange={handleInputChange}  rows={1} size="sm" className='rounded-pill' required/>
                    {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.email}</div>}
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bolder">Phone:</Form.Label>
                    <Form.Control type="text" name="phone" onChange={handleInputChange}  rows={1} size="sm" className='rounded-pill' required/>
                    {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.phone}</div>}
                </Form.Group>
                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bolder">Password:</Form.Label>
                    <Form.Control 
                        type={passwordShown ? "text" : "password"}                         
                        name = "password"
                        onChange={handleInputChange}  
                        rows={1} 
                        size="sm" 
                        className='rounded-pill' 
                        required/>
                    {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.password}</div>}
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bolder">Confirm Password:</Form.Label>
                    <Form.Control type="text" name="confirmpassword" onChange={handleInputChange}  rows={1} size="sm" className='rounded-pill' required/>
                    {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.corfirmpassword}</div>}
                </Form.Group>
                    <Row>
                     <Col>
                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fw-bolder">Date:</Form.Label>
                            <Form.Control                         
                                type="date"
                                name="date"
                                onChange={handleInputChange}
                                placeholder="Due date"
                                className='rounded-pill'
                                size="sm"
                                required
                                />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fw-bolder">Gender:</Form.Label>
                            <Form.Control
                                as="select"
                                value={user.gender}
                                name="gender"
                                onChange={handleInputChange}
                                className="form-select form-select-override"
                                required
                                >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Button onClick={handleSignUp} variant='primary' size="w-100" className='rounded-pill'>Signup</Button>
                </Form.Group>

                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-normal fs-7 ms-auto">Already have an account?     
                        <Link onClick={handleToggle} className='pw-2'> Signup</Link>
                    </Form.Label>
                </Form.Group>
                    
            </Col>
               
          </Form>  
        </Modal.Body>
           
      </Modal>
  )
}

export default Register
