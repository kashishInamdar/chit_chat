import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MessageContainer from "../../components/Message/MessageContainer.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[98vh] sm:py-7 sm:mb-7  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
        <Sidebar  />
        <MessageContainer />

    </div>
  );
};

export default Home;
