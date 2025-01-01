import { useEffect, useState } from "react";
import toast from "react-hot-toast"; // Ensure toast is imported

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true); // Start loading
      try {
        const res = await fetch("/api/users");

        if (!res.ok) {
          throw new Error("Failed to fetch conversations.");
        }

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data); // Set conversations
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
