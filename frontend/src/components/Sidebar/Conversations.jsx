import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversation.js";
import { getRandomEmoji } from "../../utils/emojis.js";

const Conversations = () => {
  const { loading, conversations = [] } = useGetConversations(); // Ensure default value for conversations

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {Array.isArray(conversations) && conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()} // Call function to get emoji
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;


// STARTING CODE ;
// import Conversation from "./Conversation.jsx";

// const Conversations =  ()=> {
//   return (
//     <div className='py-2 flex flex-col overflow-auto  '>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations;