import React, { useState, useEffect } from 'react'
import { Stack, Image, Row, Col, Tab, Nav, Form} from 'react-bootstrap'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faUser } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import { useAuth } from '../context/AuthContext'
import APIFriends from '../api/APIFriends'
import ListRequested from './ListRequested'

//tab2 - tất cả bạn bè

function ListFriends() {
    const [isAvatar, setAvatar] = useState(false)
    const [list, setList] = useState([])
    const auth = useAuth() //context

    const require = {
        user_id: auth.user,
        type: "3"
    }
    const options = {
        headers: {
            'accept': 'application/json'
        }        
    }
    
    const fetchMesasage = () => {
        APIFriends(require)
        .then(result => {
            const data = result.data
            console.log('data', data)
            setList(data.list)
        })
        console.log('list',list)
    }

    useEffect(() => {
        fetchMesasage()
    }, [])
    


    return (

            <Row style={{paddingTop: "60px"}} className='h-100 border-light'>
                <Col>
                    <Nav variant="pills" ><Search/></Nav>
                    <Form.Label htmlFor="basic-url" style={{color: "#1A4C5B"}} className='mt-2 border-bottom'>All frieds</Form.Label>
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
                    
                     <ListRequested/>
                </Col>
        </Row>
    )
}

export default ListFriends