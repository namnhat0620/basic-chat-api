import React, { useState, useEffect } from 'react'
import { Image, Row, Col, Nav, Form, ButtonGroup, Button} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import Avatar from "./../assets/images/avatar.jpg"

import { useAuth } from '../context/AuthContext'
import APIFriends from '../api/APIFriends'
import APICreateChatRoom from '../api/APICreateChatRoom'

//tất cả lời mời kết bạn -
const listresquest = [
    //test design
    {
        user_id: 31,
       username: "namnhat",
       email: "namnhat@gmail.com",
       avatar: "namnhat.png"
    },
    {
        user_id: 2,
       username: "namnhat",
       email: "namnhat@gmail.com",
       avatar: "namnhat.png"
    },
    {
        user_id: 3,
       username: "namnhat",
       email: "namnhat@gmail.com",
       avatar: "namnhat.png"
    },

]
function ListRequested() {
    const auth = useAuth()
    const [isAvatar, setAvatar] = useState(false)
    const [list, setList] = useState([])

    const [temp, setTemp] = useState(listresquest)
    const [createChat, setCreate] = useState([auth.user])

    const handleAccept = (id) => {
        console.log(id)
        setCreate([...createChat, [id]])
        console.log(createChat)

        const res = APICreateChatRoom(createChat)
    }

    const fetchRequested = async () => {
        const require = {
            user_id: auth.user,
            type: "3"
        }
        const res = APIFriends(require)
        console.log(res)
    }

    useEffect(() => {
        fetchRequested()
    }, [])
    


    return (

        <Row style={{paddingTop: "60px", overflow: "hidden"}} className='h-100 border-light'>
            <Col>
                
                <Form.Label htmlFor="basic-url" style={{color: "#1A4C5B"}} className='mt-2 border-bottom'>All requested</Form.Label>
                <Nav  className="bottom-top">
                    {temp.map((user, index)=>(
                        <Nav.Item className=''  >
                            <Nav.Link eventKey="1" className='d-flex' style={{paddingLeft: "0px",}} >
                            <Col xs={3}>     
                                <Image src={Avatar} roundedCircle style={{width: '30px', height: '30px'}} />
                            </Col>
                            <Col style={{color: "black"}} xs={8}>
                                <h6 className='m-2'>{user.username}</h6>
                            </Col>
                            <Col>
                            <ButtonGroup aria-label="Basic example" clas>
                                <Button variant="secondary" onClick={e=>handleAccept(user.user_id)}className='rounded-pill mx-1 border-success bg-transparent'><FontAwesomeIcon icon={faCheck}  style={{color: '#1A4C5B', fontSize: '10px'}}/></Button>
                                <Button variant="secondary" className='rounded-pill  border-danger bg-transparent'><FontAwesomeIcon icon={faXmark} style={{color: 'red', fontSize: '10px'}} /></Button>
                            </ButtonGroup>
                            </Col>

                            </Nav.Link>
                        </Nav.Item >
                    ))}
                </Nav>
            </Col>
        </Row>
    )
}

export default ListRequested