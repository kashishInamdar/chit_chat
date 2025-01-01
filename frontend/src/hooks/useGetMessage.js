import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch messages: ${res.statusText}`);
                }
                const data = await res.json();
                setMessages(data);
            } catch (error) {
                toast.error(error.message || "An error occurred while fetching messages.");
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id, setMessages]);

    // Return messages and loading state as an object
    return { messages, loading };
}

export default useGetMessages;