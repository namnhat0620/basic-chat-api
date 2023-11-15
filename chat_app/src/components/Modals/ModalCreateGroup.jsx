import React, {useState} from 'react'
import { Modal, Button, Form, Row, Col, InputGroup, Image } from 'react-bootstrap'

import { useAuth } from '../../context/AuthContext'

import UploadingImage from './../../assets/images/uploadimage.png'
import APICreateChatRoom from '../../api/APICreateChatRoom'

const testlistFriends = [
  {
    user_id: 32,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 33,
    username: 'vy03',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 34,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 35,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 36,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 37,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
  {
    user_id: 38,
    username: 'vy02',
    email:'vy02@gmail.com',
    avatar: "",
  },
]
export default function ModalCreateGroup({handleToggle, show}) {
    const [list, seList] = useState(testlistFriends)
    const [users, setUsers] = useState([])
    const [groupName, setName] =useState('')

    const [groupInfo, setGroupInfo] = useState({
      user_id: [31,32,33,35],
      name: '',
      avatar: ''
    })
    const auth = useAuth()

    const handleCreateGroup = async (e) => {
      e.preventDefault()

      setGroupInfo({
        user_id: [31,32,33,35],
        name: groupName,
        avatar: ""
      })
      console.log("cai group", groupInfo)
      
    const body = JSON.stringify(groupInfo)
    console.log(body)
    const options = {
      headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
      },
      method: "POST",
      body: body,
      mode: 'cors'        
    }
      
    const URL = "https://qldapm.onrender.com/chat-room/"+auth.user+"/create"
    return await fetch(URL, options).then(response => {
      return response.json();
    }).then(result => {
      console.log("result", result)
      return result
    }).catch (error => {
      console.log(error)
      
    console.log("response", response)})
    }






    const handleInputChange = (event) =>{
      setName(event.target.value)
      console.log(groupName)
       /* const target = event.target;
        if(target.type==='input'){
          
        console.log('checked', target.checked)
          //setInput(value)
        }
        else{
          if(check){
            
        const check = target.checked
        const value = target.name;
            //setUsers([...users, value])
          }
          else{
            //const updateUsers = users.filter(x=> x != value)
            setUsers(updateUsers)
          }
          console.log(users)/
      }*/
      
    }

  return (
    <Modal show={show} 
        onHide={handleToggle} 
        centered
        aria-labelledby="example-custom-modal-styling-title-sm"
        dialogClassName="modal-40w"
        scrollable={true}
        style={{maxHeight: '600px', overflowX: 'none'}}
        >

        <Modal.Header className=' mx-5 h1 d-flex flex-column' style={{color: "#1687A7"}}>
        <Modal.Title>Create a Group Chat</Modal.Title>

          <InputGroup className="mb-1 mt-3">
          <Button variant="outline-secondary" id="button-addon1" className='rounded-pill text-center' style={{borderColor: '#1687A7', backgroundColor: "lightgray"}}>
            <Image src={UploadingImage} width={15}/>
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={groupName}
            name='groupName'
            onChange={handleInputChange}
            placeholder='Group Chat`s Name...'
            className='rounded-pill ms-3 border-dark p-2'
          />
        </InputGroup>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label className='mb-1 ps-4 fw-bolder'>Friend List:</Form.Label>
            {list.map((user, index)=>(
              <Form.Group as={Row} className="mb-1 ps-5">

                <Form.Label column sm="7">
                  {user.username}
                </Form.Label>

                <Col sm="5" className=''>
                  <Form.Check
                    type="checkbox" 
                    id={user.user_id}
                    className='ps-5'
                    onChange={handleInputChange}
                    value={user.user_id}
                    name={user.user_id}
                  />
                </Col>
              </Form.Group>
            ))}
            </Form>
          
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateGroup}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
