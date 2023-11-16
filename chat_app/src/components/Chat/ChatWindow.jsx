import React, { useState, useEffect, useRef } from 'react'
import { Stack, InputGroup, Form, Image, Button } from 'react-bootstrap'
import socketIOClient from "socket.io-client";

import SendIcon from './../../assets/images/send.png'
import FileIcon from './../../assets/images/file.png'
import ImageIcon from './../../assets/images/loadimage.png'
import StickerIcon from './../../assets/images/sticker.png'
import EmojiIcon from './../../assets/images/emoji.png'


import { useAuth } from '../../context/AuthContext'
import { ChatBoxReciever, ChatBoxSender } from './ChatBox';


const host = "http://localhost:3000";  //host socket


const testlist = [
  {
    timestamp: 28,
    content: "chat1",
  },
  {
    timestamp: 2,
    content: "chat1",
  },
  {
    timestamp: 28,
    content: "chat1",
  },
]
const ChatWindow = () => {

  const [listMessages, setListMessage] = useState([]) 

  const [message, setMessage] = useState({})
  const [checkSender, setSender] = useState(false)
  const [input, setInput] = useState("") //nhập message
  const auth = useAuth()  //context

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const renderMessages = listMessages.map((message)=>{
      <ChatBoxReciever content={message.content} timestamp={message.timestamp}/>
  })


  //socket

  const socketRef = useRef();
  const messagesEnd = useRef()

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  
  useEffect(() => {  //cập nhật danh sách tin nhắn
    // Tạo đối tượng cấu hình với biến header
    const config = {
      extraHeaders: {
        'user_id': auth.user,
      }
    };

    socketRef.current = socketIOClient.connect(host, config)

    socketRef.current.on('getId', data => {
      setId(data)
    })

    socketRef.current.on('listen_message_text', dataGot => {
      const newMess = {
        content: dataGot.content,
        timestamp: dataGot.content,
      }
      if(dataGot.user.user_id === auth.user){
        setSender(true)
      }else{
        setSender(false)
      }
      setMessage(newMess)
      setListMessage([...listMessages, message])
      
      console.log("list", listMessages)
    })
    
    
    return () => {
      socketRef.current.disconnect();
    };
  }, [listMessages]);
  

  const handleSend = () => {
    if (input !== false) {
      const msg = {
        content: input,
        room_id: auth.room
      }
      console.log("send", msg)
      socketRef.current.emit('message_text', msg)
      setInput('')
    }
  }
  
  const handleEnter = (e) => {
    if(e.key === 'key'){
      const msg = {
        content: input,
        room_id: auth.room
      }
      console.log("send", msg)
      socketRef.current.emit('message_text', msg)
      setInput('')
    }
    
  }


  ///----socket---  

  return (
    <Stack style={{ height: "100vh" }} className='col border-start border-end border-1 border-secondary'>
      <div className='h-100 overflow-auto d-flex flex-column'>
       
          {
            checkSender ? 
            <ChatBoxSender content={message.content} timestamp={message.timestamp}/>
            :
            <ChatBoxReciever content={message.content} timestamp={message.timestamp}/>
          }

      </div>
      <InputGroup className="footer pb-2">
        <InputGroup.Text className='bg-transparent border-0'><Image src={FileIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
        <InputGroup.Text className='bg-transparent border-0'><Image src={ImageIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
        <InputGroup.Text className='bg-transparent border-0'><Image src={StickerIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
        <InputGroup.Text className='bg-transparent border-0'><Image src={EmojiIcon} sizes='sm' width={"30px"} /></InputGroup.Text>

        <Form.Control
          placeholder="Aa"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className='rounded-pill p-2 mx-2 border-1 border-secondary'
          autoComplete='off'
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          name="input"
        />
        <Button onClick={handleSend} className='bg-transparent border-0'>
          <Image src={SendIcon} sizes='sm' width={"30px"} />
        </Button>
      </InputGroup>
    </Stack>
  )
}

export default ChatWindow