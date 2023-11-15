import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { SideBar } from '../components/SideBar/SideBar'
import ChatWindowDetail from '../components/ChatWindowDetail'

import {Container, Row, Col} from 'react-bootstrap'
import WelcomeChatApp from '../components/WelcomeChatApp'
import ChatWindow from '../components/Chat/ChatWindow'



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
          {
            auth.room==null?
            <Col xs={9}>
                <WelcomeChatApp/>
            </Col>
            :
            <>
            
            <Col xs={6}><ChatWindow/></Col>
            
            <Col xs={3}><ChatWindowDetail/></Col>
            </>
          }
          
        </Row>
    </Container>
   </>
   
    
  )
}

export default Chat