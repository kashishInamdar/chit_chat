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


  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar ">
            <div className="w-10 rounded-full ">
                <img alt="tailwind css chat buvvle "
                  src={profilePic}
                // src={"https://img.jagrantv.com/article/rc1055978/1730710095-kashish.jpg" }
                />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbuleBgColor} pb-2`} >{message.message}</div>
        <div className='chat-footer  opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>

    </div>
  )
}

export default Message ;