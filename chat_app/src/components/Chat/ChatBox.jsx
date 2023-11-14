import React, { useState} from 'react'

export default function ChatBox(mess) {
    const [message, setMessage] = useState(mess)
  return (
    <div>{message}</div>
  )
}
