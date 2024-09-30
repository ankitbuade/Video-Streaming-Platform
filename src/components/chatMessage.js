import React from 'react'

const ChatMessage = ({name , message}) => {
 
    return (
        <div className='flex items-center shadow-sm px-2'>
            
              <img className='w-7'
                   alt='userIcon'
                   src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png'
                 />
            <span className='ml-2 font-bold px-2 p-2'>
                {name}
            </span>
        
            <span>
                {message}
            </span>
            </div>
          )
}

export default ChatMessage
