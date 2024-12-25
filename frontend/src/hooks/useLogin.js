import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false); // Correctly use useState
    const { setAuthUser } = useAuthContext(); // Ensure this function exists in the context

    const login = async (userName, password) => {

        const success = handleInputErrors({ userName, password });
        if (!success) {
            return;
        }
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });
            console.log(JSON.stringify({ userName, password }));

            if (!res.ok) {
                // Check if response status is not OK (e.g., 400 or 500)
                const errorData = await res.json();
                throw new Error(errorData.error || "Login failed");
            }

            const data = await res.json();

            // Handle successful login
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Login successful!");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false); // Ensure loading state is reset
        }
    };

    return { loading, login };
};

export default useLogin;

function handleInputErrors({ userName, password }) {
    if (!userName || !password ) {
        toast.error('Please fill in all fields');
        return false;
    }

    return true; // Correctly return true if there are no errors
}