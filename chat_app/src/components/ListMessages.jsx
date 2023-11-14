import React, { useState, useEffect } from 'react'
import { Stack, Image, Row, Col, Tab, Nav, Form} from 'react-bootstrap'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ChatWindow from './Chat/ChatWindow'
import Search from './Search'
import { useAuth } from '../context/AuthContext'
import APIAllChatRoom from '../api/APIAllChatRoom'

//tab1 - tất cả tin nhắn

function ListMessages() {
    const [isAvatar, setAvatar] = useState(false)
    const [list, setList] = useState([])
    const [messageroom, setMesasgeRoom] = useState({})
    const [userinfor, setUserInfo] = useState({
        email: "",
        username: "",
        password: "",
        avatar: ""
    })
    const auth = useAuth() //context
    const checkLoadImage = async (path) => {
       return false
    }

    const handleChooseMessage = (e) => {
        setMesasgeRoom(e.tager.value.message_id.toString())
    }
    const options = {
        headers: {
            'accept': 'application/json'
        }        
    }
    
    const fetchMesasage = () => {
        const res = APIAllChatRoom(auth.user)
        console.log(res)
    }

    useEffect(() => {
        fetchMesasage()
    }, [])
    


    return (

            <Row style={{paddingTop: "60px"}} className='h-100 border-light'>
                <Col>
                    <Nav variant="pills" ><Search/></Nav>
                    <Form.Label htmlFor="basic-url" style={{color: "#1A4C5B"}} className='mt-2 border-bottom'>All messages</Form.Label>
                    <Nav variant="pills" className="bottom-top">
                        {list.map((message, index)=>(
                            <Nav.Item className=''  >
                                <Nav.Link eventKey="1" className='d-flex' style={{backgroundColor:"white", paddingLeft: "0px",}} >
                                
                                <div className="p-2 rounded-pill align-self-center" style={{width: "60px", height: "60px", backgroundColor: "red"}}><FontAwesomeIcon size='lg' icon={faUser} className='py-auto mt-2'/></div>
                                <Col style={{color: "black"}}>
                                    <Row className='h6 m-2' style={{color: "#1A4C5B"}}>{user.username}</Row>
                                    <Row style={{width: "150px", fontSize: "12px", margin: "0px"}}>
                                        <Col className=' text-truncate'>{message.content}</Col>
                                        .
                                        <Col xs={2} style={{}}>{message.timestamp}</Col>
                                    </Row>
                                </Col>

                                </Nav.Link>
                            </Nav.Item >
                        ))}
                    </Nav>
                </Col>

                <Col className='mt-6 h-100 d-inline-block '>
                    <Tab.Content>
                        <Tab.Pane eventKey="1"><ChatWindow/></Tab.Pane>
                    </Tab.Content>
                </Col>
        </Row>
    )
}

export default ListMessages