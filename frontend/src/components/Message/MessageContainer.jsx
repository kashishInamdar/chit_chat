import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext.jsx";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const profilePic = selectedConversation?.profilePic ;

  useEffect(() => {
    // Cleanup function on unmount
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={`sm:w-[70vw] w-fit px-2 sm:flex sm:flex-col  ${
        selectedConversation ? "" : "hidden"
      }`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="  px-4 py-2 flex items-center gap-2  mb-2">
            {/* <span className="label-text">To:</span>{" "} */}
            <div className="chat-image avatar ">
              <div className="w-5 sm:w-8 rounded-full ">
                <img
                  alt="tailwind css chat buvvle "
                  src={profilePic}
                  // src={"https://img.jagrantv.com/article/rc1055978/1730710095-kashish.jpg" }
                />
              </div>
            </div>

            <span className=" text-white sm:text-[15px] font-bold">
              {selectedConversation?.fullName || "Unknown"}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName || "User"} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// STATER CODE SNIPPET

// import Messages from "./Messages.jsx";
// import MessageInput from "./MessageInput.jsx";
// function MessageContainer() {
//   return (
//     <div className="md:min-w-[450px] flex flex-col ">
//       <>
//       {/* Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text" >To:</span>{""}
//           <span  className=" text-gray-900 font-bold ">John doe</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   )
// }

// export default MessageContainer ;
