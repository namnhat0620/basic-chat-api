import { useState, useEffect } from 'react'

import { ChatBoxReciever, ChatBoxSender } from './ChatBox'

export const ChatList = ({listMessages}) => {
    const [mess, setListMessage] = useState([]) //api danh sach tin nhan trong chat room
    
  useEffect(async () => {  //cập nhật danh sách tin nhắn
    
    const API = 'https://qldapm.onrender.com/message/'+auth.user+'/list?page=1&limit=20&room_id='+auth.room
        console.log(API)
        
        return await fetch(API).then(response => {
        return response.json();
        }).then(result => {
          console.log(result.data)
          setListMessage()
        console.log('after', listMessages)
        }).catch (error => {
        console.log(error)
        })
  }, []);
  return (
    <div className='h-100 overflow-auto d-flex flex-column'>
        {/**Box chat */}
        
        {
         listMessages.map((message, index)=>{
          {
            message.user.user_id
            ? 
            <ChatBoxSender content={message.content} timestamp={message.timestamp}/>
            :
            <ChatBoxReciever content={message.content} timestamp={message.timestamp}/>
          }
        })}
      </div>
  )
}
