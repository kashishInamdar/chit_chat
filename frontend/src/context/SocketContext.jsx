import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socketInstance = io("http://localhost:5000", {
                query: {
                    userId: authUser?._id, // Use authUser._id if that's your convention
                },
            });

            setSocket(socketInstance);

            // Listen for events
            socketInstance.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            socketInstance.on("connect_error", (err) => {
                console.error("Socket connection error:", err);
            });

            socketInstance.on("disconnect", (reason) => {
                console.log("Socket disconnected:", reason);
            });

            // Cleanup on unmount
            return () => {
                socketInstance.off("getOnlineUsers");
                socketInstance.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
