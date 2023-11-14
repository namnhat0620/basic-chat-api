import React, {useState} from 'react'
import { Modal, Button, Row, Col, Form, Container, Image } from 'react-bootstrap'
import APISearchFriend from '../../api/APISearchFriend'

import AddIcon from './../../assets/images/add.png'
import Avatar from './../../assets/images/avatar.jpg'
import APISendRequest from '../../api/APISendRequest'
import { useAuth } from '../../context/AuthContext'

export default function ModalCreateGroup({handleToggle, show}) {
    const [searchinput, setInput] = useState("")
   
    const auth = useAuth()

    const handleSendRequest = async (e) => {
        
    }
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }

  return (
    <Modal show={show} 
        onHide={handleToggle} 
        centered
        aria-labelledby="example-custom-modal-styling-title-sm"
        dialogClassName="modal-40w"
        >

        <Modal.Header className='border-0 mx-auto h1' style={{color: "#1687A7"}}>
        <Modal.Title>Create a Group Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleToggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
