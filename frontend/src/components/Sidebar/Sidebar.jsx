import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";
const Sidebar = ()=>{

    const { selectedConversation, setSelectedConversation } = useConversation();
     useEffect(() => {
        // Cleanup function on unmount
        return () => setSelectedConversation(null);
      }, [setSelectedConversation]);
    
    return(
        <div className={`border-r border-slate-500  p-4 sm:flex sm:flex-col sm:w-[25vw] ${selectedConversation ? "hidden" : ""} `}>
            <SearchInput />
            <div className="sm:divider sm:px-3"> </div>
           <Conversations /> 
            <LogoutButton />
            
            
        </div>
    )
}

export default Sidebar ;

// STARTING CODE 

// import SearchInput from "./SearchInput.jsx";
// import Conversations from "./Conversations.jsx";
// const Sidebar = ()=>{
//     return(
//         <div>
//             <SearchInput />
//             <div className="divider px-3"> </div>
//            <Conversations /> 
//             {/* <LogoutButton /> */}
            
            
//         </div>
//     )
// }

// export default Sidebar ; 