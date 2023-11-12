import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import RouterApp from './../routes/RouteApp'
import Header from '../components/Header'
import { SideBar } from '../components/SideBar/SideBar'
import ChatWindowDetail from '../components/ChatWindowDetail'
function Chat() {
  const auth = useAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }
  return (
   <>
      <SideBar/>
      <Header/>
   </>
   
    
  )
}

export default Chat