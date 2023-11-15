import React, {useState, useEffect} from 'react'
import { Modal, Button, Form, Row, Col, InputGroup, Image } from 'react-bootstrap'

import { useAuth } from '../../context/AuthContext'

import UploadingImage from './../../assets/images/uploadimage.png'
import APICreateChatRoom from '../../api/APICreateChatRoom'
import APIFriends from '../../api/APIFriends'
import APISearchFriend from '../../api/APISearchFriend'

const test = [
  {
    username: 'vy02',
    user_id: 32,
  },
  {
    username: 'vy03',
    user_id: 33,
  }
]
export default function ModalCreateGroup({handleToggle, show}) {
    const [listfriend, setList] = useState(test)
    const [users, setUsers] = useState([])
    const [groupName, setName] =useState('')
    const [introduces, setIntroduce] = useState([])
    
    const [groupInfo, setGroupInfo] = useState({
      user_id: [31,32,33,35],
      name: '',
      avatar: ''
    })

    const auth = useAuth()

    const fetchMesasage = () => {
      APIFriends(3)
      .then(result => {
          const data = result.data
          console.log('data', data)
          setList(data.list)
      })
      console.log('list',listfriend)
  }

  const fetchSomepeople =  async () => {
    
  }

  useEffect(() => {
      fetchMesasage()
  }, [])
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
      
    const URL = "https://chat-2865.onrender.com/chat-room/"+auth.user+"/create"
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
      const target = event.target
      const value = target.value
      const check = target.checked
      console.log(check, value)
      if(check === true){
        //add
        
        setUsers(users => [...users, value]);
      }
      else{
        //remove
        const temp = users.filter((user)=>String(user.user_id) != value)
        setUsers(temp)
        
      }
      console.log(users)
      
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
            <Image src={UploadingImage} width={18}/>
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
            {test.map((user, index)=>(
              <Form.Group as={Row} className="mb-1 ps-5">

                <Form.Label column sm="7">
                  {user.username}
                </Form.Label>

                <Col sm="5" className=''>
                  <Form.Check
                    type="checkbox" 
                    id={user.user_id}
                    className='ps-5 border-2 border-secondary'
                    onChange={handleInputChange}
                    value={user.user_id}
                    name={user.user_id}
                  />
                </Col>
              </Form.Group>
            ))}
            </Form>
          
        </Modal.Body>
        
        <Modal.Footer className='mx-4'>
          <Button variant="secondary" onClick={handleToggle} style={{backgroundColor: '#D9D9D9', color: '#276678'}} className='rounded-pill border-0 px-4 fw-bold'>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateGroup} style={{backgroundColor: '#276678', color: 'white'}} className='rounded-pill px-4 text-center border-0 fw-bold'>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
