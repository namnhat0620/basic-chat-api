import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import RouterApp from './../routes/RouteApp'
import Header from '../components/Header'
import { SideBar } from '../components/SideBar/SideBar'
import ChatWindowDetail from '../components/ChatWindowDetail'
import ChatWindow from '../components/Chat/ChatWindow'

import {Container, Row, Col} from 'react-bootstrap'
function Chat() {
  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }
  return (
   <>
      <Container fluid={true} className="px-0 overflow-hidden">
        <Row >
          <Header/>
          <Col xs={3} lg={3}><SideBar/></Col>
          <Col xs={7}><ChatWindow/></Col>
          <Col xs={2}><ChatWindowDetail/></Col>
        </Row>
    </Container>
   </>
   
    
  )
}

export default Chat