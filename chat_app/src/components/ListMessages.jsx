import React, { useState, useEffect } from 'react'
import { Stack, Image, Row, Col, Tab, Nav, Form, Button} from 'react-bootstrap'

import Avatar from './../assets/images/avatar.jpg'
import Search from './Search'
import { useAuth } from '../context/AuthContext'
import APIAllChatRoom from '../api/APIAllChatRoom'

//tab1 - tất cả tin nhắn

const ListMessages =()=>{

    const [isAvatar, setAvatar] = useState(false)
    const [listRoom, setList] = useState([])
    
    const auth = useAuth() //context
    const [isUser, setUser] = useState(auth.user)
    const checkUser = (id)=>{
        if(id===isUser){
            return true
        }
        else return false
    }
    const fetchMesasage = () => {
        
        APIAllChatRoom(auth.user)   
        .then(result => {
            const data = result.data
            const list=data.list
            console.log('sad', list.user)
            setList(list)
        })
    }

    useEffect(() => {
        fetchMesasage()
        //console.log('danh sach tat ca tin nhan ', list)
    }, [])
    


    return (

            <Row style={{paddingTop: "60px"}} className='h-100 border-light'>
                <Col>
                    <Nav variant="pills" ><Search/></Nav>
                    <Form.Label htmlFor="basic-url" style={{color: "#1A4C5B"}} className='mt-2 border-bottom'>All messages</Form.Label>
                    <Nav variant="pills" className="bottom-top">
                        {listRoom.map((room, index)=>(
                                <Button  className='d-flex border-0' style={{backgroundColor:"white", paddingLeft: "0px",}} 
                                onClick={() => auth.chooseRoom(room.room_id)}
                                >
                                
                                <div className="rounded-pill align-self-center" style={{width: "50px", height: "50px", backgroundColor: "red"}}><Image src={Avatar} width={50} height={50} roundedCircle/></div>
                                <Col style={{color: "black"}}>
                                    <Row className=' ms-2 mt-1' style={{color: "#1A4C5B", alignContent: 'center', fontSize: '16px', fontWeight: '500'}}>{room.room_name}</Row>
                                    <Row style={{width: "150px", fontSize: "12px", margin: "0px"}}>
                                        <Col className=' text-truncate text-left d-flex flex-start align-items-center' style={{fontSize: "15px", marginBottom: "10px"}}>
                                            {
                                                room.last_message.user.user_id = auth.user
                                                ?
                                                <>You: </>
                                                :
                                                <>{room.user.username}</>
                                            }
                                            {room.last_message.content}
                                        </Col>
                                        .
                                        <Col xs={3} style={{fontSize: "10px", marginBottom: "12px"}}>{room.last_message.timestamp}</Col>
                                    </Row>
                                </Col>

                                </Button>
                        ))}
                    </Nav>
                </Col>

        </Row>
    )
}

export default ListMessages