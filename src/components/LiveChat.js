
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'
import ChatMessage from './chatMessage'
import { generateRandomName, generateRandomString, } from '../Utils/helper'


const LiveChat = () => {

    const [liveMessage,setLiveMessage] =useState("")

    const dispatch = useDispatch()
    const chatMessages = useSelector((store)=> store.chat.messages)

    useEffect(()=>{
    const i= setInterval(()=>{
    console.log("API polling")

    dispatch (addMessage({
        name: generateRandomName(),
        message: generateRandomString()
    })
)
        },1500)

        return ()=>clearInterval(i)

    },[])

  return (
    <>
    <div className='ml-2 w-full h-[400px] p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
<div>
  {Array.isArray(chatMessages) && chatMessages.map((msg, index) => (
  <ChatMessage
  key={index}
  name={msg.name}
  message={msg.message}
          />))
        }
    </div>
    </div>
    
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
      e.preventDefault()
      console.log("ON Form Submit",liveMessage)
      dispatch(addMessage({
        name : "ankit",
        message:liveMessage
      }))
    }}>
          <input className='w-96' type='text' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
          <button className='px-2 mx-2 bg-green-300'>send  </button>
    </form>
    </>
  
  )
}

 export default LiveChat


