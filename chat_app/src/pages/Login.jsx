import { Button, Form, Row, Col, Container, FloatingLabel} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import Validation from "./Validation";

import Logo from './../assets/images/logo.png'
import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Register from "./Register";
import AlertError from "../components/AlertError";
import BySocial from "../components/BySocial";


function Login() {
    const auth = useAuth() //context
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    })
    
    //path
    const location = useLocation()
    const redirectPath = location.state?.path || '/'



    //register open   

    const [isRegister, setisRegister] = useState(false);
    const toggleOpen = () => setisRegister(!isRegister);


    //login success error?
    const [isSuccess, setSuccess] = useState(false);
    const toggleError = () => setSuccess(!isSuccess);
    const [errorMessage, setErrorMessage] = useState('')
    const handleErrorMessage = (message) => setErrorMessage(message)

    const [passwordShown, setPasswordShown] = useState(false);
    
    //inputform
    const [errors, setErrors] = useState({})
    const handleInputChange = (event) => {
        const value = {...user, [event.target.name]: event.target.value}
        setUser(value)    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validation(user))        

        const result = auth.login(user)
        if(result){
            navigate(redirectPath, {replace: true})
        }   
        else handleErrorMessage(result.message)    
      };
  return (
   <Container fluid={true} className="p-0 h-100" style={{backgroundColor: "#1687A7"}}>
    <Row className="text-center" style={{color: "white"}}>
            <Col style={{marginTop: '20px'}}>
                <Image src={Logo} style={{height:'200px',width:'200px'}} fluid/>
                <h1>CHATAPP</h1>
                <h4>LET'S HAVE A CHAT WITH YOUR FRIENDS</h4>
            </Col>           
    </Row>
        <Form onSubmit={handleSubmit}>
            <Row style={{
                height: "60vh",
                justifyContent: "center",
                backgroundColor: "white",
                paddingTop: "5%"
            }}
            className="text-center"
            >
                <Col xs={6}>
                    
                    <h2 style={{color: "#1687A7"}} className="fw-bolder">Sign in</h2>
                    <FloatingLabel
                        id="floatingInput"
                        label="Email or Phone Number..."
                        
                    >
                        <Form.Control 
                            type="text" 
                            placeholder="Email or Phone Number..."
                            name="email"
                            onChange={handleInputChange}
                            required
                            className='rounded-pill'
                            />
                        {errors && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errors.email}<br/>{errors.username}</div>}
                    </FloatingLabel>
                    <FloatingLabel
                        id="floatingInput"
                        label="Password..."
                    >
                        <Form.Control 
                        type={passwordShown ? "text" : "password"}
                        id="password"
                        placeholder="Password..."
                        name = "password"
                        onChange={handleInputChange}
                        required
                        className='rounded-pill'
                        />
                        
                        {errors && <p style={{color: "red", fontSize: '13px', marginLeft: '10px'}}>{errors.email}</p>}
                    </FloatingLabel>

                    <Form.Group className="mb-2">
                        <Link  style={{color: "#1687A7", fontWeight: "700"}}>Forgot Password?</Link> 
                    </Form.Group>
                    
                    
                    <Form.Group  className="mb-2">
                        <Button variant="primary" type="submit" style={{backgroundColor: "#276678", width: "100px"}} className='rounded-pill fw-bold'>
                            Sign in
                        </Button>
                    </Form.Group>

                    <Form.Group  controlId="exampleForm.ControlTextarea1" className="fw-bold fs-7 ms-auto">
                        <Form.Label className="fw-bold">Not registered?     
                            <Link onClick={toggleOpen} style={{color: "#1687A7", fontWeight: "700"}}> Signup</Link>
                        </Form.Label>
                    </Form.Group>

                        

                        <BySocial/>
                        
                        <Register handleToggle={toggleOpen} show={isRegister}/>

                        <AlertError handleToggle={toggleError} show={isSuccess} message={errorMessage}/>
                </Col>
            </Row>
        </Form>
   </Container>
  )
}

export default Login