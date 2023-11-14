import React, { useState, useEffect, useRef } from 'react'
import { Stack, InputGroup, Form, Image, Button } from 'react-bootstrap'
import socketIOClient from "socket.io-client";

import SendIcon from './../../assets/images/send.png'
import FileIcon from './../../assets/images/file.png'
import ImageIcon from './../../assets/images/loadimage.png'
import StickerIcon from './../../assets/images/sticker.png'
import EmojiIcon from './../../assets/images/emoji.png'


import { useAuth } from '../../context/AuthContext'


const host = "http://localhost:9000";  //host socket


const testlist = [
  {
    user_id: 28,
    content: "chat1",
  },
  {
    user_id: 2,
    content: "chat1",
  },
  {
    user_id: 28,
    content: "chat1",
  },
]
export default function ChatWindow() {
  const [send, setSend] =useState({
    user_id: "",
    content: "",
  })
  
  const [listMessages, setListMessage] = useState([]) //api danh sach tin nhan trong chat room

  const [input, setInput] = useState("") //nhập message
  const auth = useAuth()  //context
  
  const handleInputChange = (e) =>{
    setInput(e.target.value)
  }


  //socket
  
  const [id, setId] = useState();
  const socketRef = useRef();
  const messagesEnd = useRef()

  useEffect(() => {  //cập nhật danh sách tin nhắn
    socketRef.current = socketIOClient.connect(host)
  
    socketRef.current.on('getId', data => {
      setId(data)
    })

    socketRef.current.on('GatewayListenEnum', dataGot => {
      setListMessage(oldMsgs => [...oldMsgs, dataGot.data])  
      console.log("list", listMessages)
      scrollToBottom()
    })
    
    return () => {
      socketRef.current.disconnect();
    };
  }, []);


  const handleSend = () => {
    if(input !== null) {
      const msg = {
        content: input, 
        user_id: auth.user
      }
    
      console.log("send ne", msg)
      socketRef.current.emit('sendDataClient', msg)
      setInput('')
    }
  }
  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }

  const renderMess =  listMessages.map((m, index) => 
        <div key={index} className={`${m.user_id === id ? 'your-message' : 'other-people'} chat-item`}>
          {m.content}
        </div>
      )

  ///----socket---


  return (
    <Stack style={{height: "100vh"}} className='col border'>
      {/* */}
      <div className='h-100 overflow-auto'>
         {/**Box chat */}
      {renderMess}     
        <div class="box-chat_message">
        <div style={{ float:"left", clear: "both" }}
              ref={messagesEnd}>
          </div>
        </div>
      </div>


      {/**Input */}
         <InputGroup className="footer mb-2">
          <InputGroup.Text className='bg-transparent border-0'><Image src={FileIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
          <InputGroup.Text className='bg-transparent border-0'><Image src={ImageIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
          <InputGroup.Text className='bg-transparent border-0'><Image src={StickerIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
          <InputGroup.Text className='bg-transparent border-0'><Image src={EmojiIcon} sizes='sm' width={"30px"} /></InputGroup.Text>
          
          <Form.Control
            placeholder="Aa"
            aria-label="Username"
            aria-describedby="basic-addon1"
            className='rounded-pill p-2 mx-2 border-2'
            autoComplete='off'
            value={input}
            onChange={handleInputChange}
            name="input"
        />
          <Button onClick={handleSend} className='bg-transparent border-0'>
            <Image src={SendIcon} sizes='sm' width={"30px"} />   
          </Button>
      </InputGroup>
    </Stack>
  )
}
