import React, {useState} from 'react'
import { Modal, Button, Row, Col, Form, Container, Image } from 'react-bootstrap'
import APISearchFriend from '../../api/APISearchFriend'

import AddIcon from './../../assets/images/add.png'
import Avatar from './../../assets/images/avatar.jpg'
import APISendRequest from '../../api/APISendRequest'
import { useAuth } from '../../context/AuthContext'

export default function ModalAddFriend({handleToggle, show}) {
    const [searchinput, setInput] = useState("")
    const [isRequested, setRequest] = useState(false)
    const [isNoResult, setNoResult] = useState(false)
    const auth = useAuth()
    const [user, setUser] = useState({
    })

    const handleSendRequest = async (e) => {
        //setRequest(!isRequested)
        e.preventDefault();
        console.log("id", user.id)
        const res= await APISendRequest(auth.user)
    }
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }
    const handleSearch = async () => {
        await APISearchFriend(searchinput).then(result => {
            console.log("res", result)
            setUser(getUser => ({
                ...user, ...result
            }))

            console.log("user", user)
            if(Object.keys(user).length==0){
                setNoResult(true)
            }
        })
    }
  return (
    <Modal show={show} 
        onHide={handleToggle} 
        centered
        aria-labelledby="example-custom-modal-styling-title-sm"
        dialogClassName="modal-40w"
        >

        <Modal.Header className='border-0 mx-auto h1' style={{color: "#1687A7"}}>
          <Modal.Title>Add a New Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container className='px-4'>
                <Row>
                <Form.Label className='fw-bolder'>Enter Email or Username</Form.Label>
                <Form.Control
                    type='text'
                    autoFocus
                    value={searchinput}
                    placeholder='example@gmail.com'
                    onChange={handleInputChange}
                    className='rounded-pill border-secondary border-1'
                />
                </Row>
                <Row>
                    <Form.Label className='fw-bolder mt-3'>{isNoResult?<span>You may know</span> : <span>No reult</span>}</Form.Label>
                    {
                        isNoResult && 
                    <Row>
                        <Col xs={2}>
                            <Image src={Avatar} roundedCircle style={{width: '40px', height: '40px'}}/>
                        </Col>
                        <Col xs={9}>
                            <Row className='h5' style={{color: "#1A4C5B"}}>{user.username}</Row>
                            <Row style={{ fontSize: "12px"}}>{user.content}</Row>  
                        </Col>
                        <Col xs={1} style={{fontSize: "13px"}} className='px-0 align-self-center h6' >
                            {isRequested ? 
                                <span>Requested sent</span>
                            :
                                <Button onClick={handleSendRequest} style={{backgroundColor: "white", marginLeft: "-15px"}} className='border-0'>
                                    <Image src={AddIcon} style={{width: '30px', height: '30px'}}/>
                                </Button>
                            }
                            
                        </Col>
                    </Row>
                    }
                    
                </Row>
            </Container>
        </Modal.Body>
        
        <Modal.Footer className='border-0 mx-auto' style={{marginTop:"40px"}}>
          <Button variant="secondary" onClick={handleToggle} style={{backgroundColor: "#D3E0EA", color: "#1687A7", width: "120px", }} className='rounded-pill mx-3 fw-bolder'>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleSearch} style={{backgroundColor: "#276678", color: "white", width: "120px"}} className='rounded-pill mx-3 fw-bolder'>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
