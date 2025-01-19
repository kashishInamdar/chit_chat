import React from 'react'
import {useAuthContext} from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation.js';
import extractTime from '../../utils/extractTime.js';

function Message({message }) {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id ;
  const formattedTime = extractTime(message.createdAt) ;
  const chatClassName = fromMe ? 'chat-end' : "chat-start" ;
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic ;
  const bubbuleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "" ;

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="sm:chat-image sm:avatar hidden ">  
            <div className="w-10 rounded-full ">
                <img alt="tailwind css chat buvvle "
                  src={profilePic}
                // src={"https://img.jagrantv.com/article/rc1055978/1730710095-kashish.jpg" }
                />
            </div>
        </div>
        <div className={`chat-bubble text-white sm:text-[17px] text-[13px] ${bubbuleBgColor} ${shakeClass} pb-2`} >{message.message}</div>
        <div className='chat-footer  opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>

    </div>
  )
}

export default Message ;