import React, { useState } from 'react'

import APISearchFriend from '../api/APISearchFriend'

import { InputGroup, Form, Button, Image, Row, Col, Stack } from 'react-bootstrap'

//--nút tìm kiếm trên đầu danh sách bạn

import AddIcon from "./../assets/images/add.png"
import SearchIcon from "./../assets/images/search.png"
import GroupIcon from "./../assets/images/group.png"
import ModalAddFriend from './Modals/ModalAddFriend'
import ModalCreateGroup from './Modals/ModalCreateGroup'

export default function Search() {
  const [searchinput, setInput] = useState("")
  const [user, setUser] = useState({
    user_id: null,
    username: "",
    email: "",
    avatar: ""
  })
  const handleInputChange = (e) =>{
    setInput(e.target.value)
  }



  //modal add friend
  
  const [isOpenAddFriend, setOpenAddfriend] = useState(false);
  const toggleOpenAddfriend = () => setOpenAddfriend(!isOpenAddFriend)

  
  const [isOpenCreateGroup, setOpenCreateGroup] = useState(false);
  const toggleOpenGroupChat = () => setOpenCreateGroup(!isOpenCreateGroup)
  return (
        <Stack  style={{ paddingTop: "20px"}} direction='horizontal' className=''>
          <Button style={{backgroundColor:"white", }}className='border-0'>
            <Image src={AddIcon} style={{width: '17px'}}/>
          </Button>
          <Form.Control
            placeholder="Search mesasges"
            className='rounded p-1'
            style={{backgroundColor: "#F5F5F5", width: "140px", fontSize: "15px"}}
            onChange={handleInputChange}
            value={searchinput}
            name="searchinput"
          />
          <Button onClick={toggleOpenAddfriend} style={{backgroundColor:"white", }}className='border-0'>
            <Image src={SearchIcon} style={{width: '17px'}}/>
          </Button>
          <Button onClick={toggleOpenGroupChat} style={{backgroundColor:"white", }}className='border-0'>
            <Image src={GroupIcon} style={{width: '17px'}}/>
          </Button>
        
        {isOpenAddFriend&& <ModalAddFriend handleToggle={toggleOpenAddfriend} show={isOpenAddFriend}/>}
        {isOpenCreateGroup&& <ModalCreateGroup handleToggle={toggleOpenGroupChat} show={isOpenCreateGroup}/>}
        </Stack>

      
    
  )
}
