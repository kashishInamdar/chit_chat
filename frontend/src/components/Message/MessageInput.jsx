import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSentMessage from "../../hooks/useSentMessage";

function MessageInput() {
   const [message, setMessage] = useState("");
   const { loading, sendMessage } = useSentMessage();

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!message) return;
      await sendMessage(message);
      setMessage("");
   };

   return (
      <form className="px-4 my-3" onSubmit={handleSubmit}>
         <div className="w-full relative">
            <input
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
               placeholder="Send a message"
            />
            <button
               type="submit"
               className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
               {loading ? (
                  <div className="loading loading-spinner"></div>
               ) : (
                  <BsSend />
               )}
            </button>
         </div>
      </form>
   );
}

export default MessageInput;


// STARTING CODE SNIPPET 
// import { BsSend } from "react-icons/bs"
// function MessageInput() {
//   return (
//    <form className="px-4 my-3">
//     <div className="w-full relative ">
//         <input 
//             type="text"
//             className="border text-sm rounded-lg selection:block w-full p-2.5 bg-gray-700 border-gray-600 text-white "
//             placeholder="Send a message"
//          />

//          <button type="submit" className="absolute inset-y-0 end-0 flex item items-center pe-3">
//             <BsSend />
//          </button>
//     </div>
//    </form>
//   )
// }

// export default MessageInput
