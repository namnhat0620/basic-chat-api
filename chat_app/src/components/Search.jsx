import React, { useState } from 'react'

import APISearchFriend from '../api/APISearchFriend'

import { InputGroup, Form, Button, Image, Row, Col, Stack } from 'react-bootstrap'

//--nút tìm kiếm trên đầu danh sách bạn

import AddIcon from "./../assets/images/add.png"
import SearchIcon from "./../assets/images/search.png"
import GroupIcon from "./../assets/images/group.png"
import ModalAddFriend from './Modals/ModalAddFriend'
import ModalCreateGroup from './Modals/ModalCreateGroup'

export default function Search({list}) {
  const [listFriends, setFriends] = useState(list)
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
        <Stack  style={{ paddingTop: "20px"}} direction='horizontal' className='ms-auto'>
          <InputGroup className="p-0">
            <InputGroup.Text  style={{backgroundColor:"#D9D9D9", }}>              
              <Button onClick={toggleOpenAddfriend}className='border-0 p-0'  style={{backgroundColor:"#D9D9D9", }}>
                <Image src={SearchIcon} width={20} className="p-0"/>
              </Button>
            </InputGroup.Text>
          <Form.Control
            placeholder="Search mesasges"
            className='rounded p-1'
            style={{backgroundColor: "#D9D9D9", width: "140px", fontSize: "15px"}}
            onChange={handleInputChange}
            value={searchinput}
            name="searchinput"
          />
          <Button onClick={toggleOpenAddfriend} style={{backgroundColor:"white", }}className='border-0 p-0 m-1'>
            <Image src={AddIcon} width={22} className="p-0 m-0"/>
          </Button>
          
          <Button onClick={toggleOpenGroupChat} style={{backgroundColor:"white", }}className='border-0 p-0'>
            <Image src={GroupIcon} width={22} className="p-0" />
          </Button>
          </InputGroup>

        
        {isOpenAddFriend&& <ModalAddFriend handleToggle={toggleOpenAddfriend} show={isOpenAddFriend}/>}
        {isOpenCreateGroup&& <ModalCreateGroup handleToggle={toggleOpenGroupChat} show={isOpenCreateGroup} list={listFriends}/>}
        </Stack>

      
  
  )
}
