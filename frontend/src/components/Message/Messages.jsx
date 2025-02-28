import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessage.js';
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import Message from './Message.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
  const {messages , loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
 
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({ behavior : "smooth"});
    },100);
  },[messages])
  return (
    <div className='px-2 sm:px-4 h-[75vh] flex-1 sm:overflow-auto overflow-scroll  '>
      {!loading && messages.length > 0 && 
      messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef} >
          <Message message={message} />
        </div>
      )

      )}

      {loading && [...Array(3)].map((_ , idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the Conversation</p>
      )}
    </div>
  )
}

export default Messages;

// STATER CODE SNIPPET 
// import Message from './Message.jsx';

// function Messages() {
//   return (
//     <div className='px-4 flex-1 overflow-auto '>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages;
