import { Button, Form, Row, Col, Container, FloatingLabel, InputGroup} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "react-bootstrap/Image"
import Validation from "./Validation";

import Logo from './../assets/images/logo.png'
import { useContext, useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Register from "./Register";
import AlertError from "../components/AlertError";
import BySocial from "../components/BySocial";

import APILogin from "../api/APILogin";
import RegisterSuccess from "../components/Modals/RegisterSuccess";


function Login() {
    const auth = useAuth() //context
    //const [auth,setAuth] =useContext()
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
    const toggleSuccess = () => setSuccess(!isSuccess);

    const [errorMessage, setErrorMessage] = useState('')

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

        const res = await APILogin(user)
        
        if(res.statusCode == 200){    
            auth.login(res.data.user_id)
            navigate(redirectPath, {replace: true})           
        }
        else{
            setErrorMessage(res.message)
            
        }
        
        
      };
  return (
   <Container fluid={true} className="p-0 h-100 overflow-hidden" style={{backgroundColor: "#1687A7"}}>
    <Row className="text-center" style={{color: "white"}}>
            <Col style={{marginTop: '20px'}}>
                <Image src={Logo} style={{height:'200px',width:'200px'}} fluid/>
                <h1>CHATAPP</h1>
                <h4>LET'S HAVE A CHAT WITH YOUR FRIENDS</h4>
            </Col>           
    </Row>
        <Form onSubmit={handleSubmit}>
        
            <Row style={{
                justifyContent: "center",
                backgroundColor: "white",
                paddingTop: "2%"
            }}
            className="text-center"
            >

                <Col xs={5} className="d-flex flex-column">
                    
                    <h2 style={{color: "#1687A7"}} className="fw-bolder">Sign in</h2>
                    <InputGroup
                        controlId="floatingTextarea"
                        label="Comments"
                        className="mt-3"
                    >
                        <Form.Control
                            type="text" 
                            placeholder="Email or Phone Number..."
                            name="email"
                            onChange={handleInputChange}
                            required
                            className='rounded-pill ps-4 border-1 border-secondary'
                            />
                        
                    </InputGroup>
                    {errors && <div style={{color: "red", fontSize: '14px'}} className="mb-4">{errors.email}</div>}
                    <InputGroup
                        
                        id="floatinglabel"
                        label="Password"
                    >
                        <Form.Control 
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            placeholder="Password..."
                            name = "password"
                            onChange={handleInputChange}
                            required
                            className='rounded-pill ps-4 border-1 border-secondary'
                        />                        
                        {errors && <p style={{color: "red", fontSize: '13px', marginLeft: '10px'}}>{errors.password}</p>}
                    </InputGroup>

                    {!isSuccess && <div style={{color: "red", fontSize: '14px', margin: '0px 0px 10px 10px'}}>{errorMessage}</div>}
                    <Form.Group className="mb-2">
                        <Link  style={{color: "#1687A7", fontWeight: "700"}}>Forgot Password?</Link> 
                    </Form.Group>
                    
                    
                    <Form.Group  className="mb-2">
                        <Button variant="primary" type="submit" style={{backgroundColor: "#276678", width: "100px"}} className='rounded-pill fw-bold'>
                            Sign in
                        </Button>
                    </Form.Group>

                    <Form.Group  controlId="exampleForm.ControlTextarea1" className="fw-bold fs-7 ">
                        <Form.Label className="fw-bold">Not registered?     
                            <Link onClick={toggleOpen} style={{color: "#1687A7", fontWeight: "700"}}> Signup</Link>
                        </Form.Label>
                    </Form.Group>

                        
                        
                        <Register handleToggle={toggleOpen} show={isRegister} setShow={setisRegister} isSuccess={isSuccess} setSuccess={setSuccess}/>
                        <RegisterSuccess handleToggle={toggleSuccess} show={isSuccess}/>
                </Col>
            </Row>
        </Form>
   </Container>
  )
}

export default Login