import { Route, Routes, Navigate } from "react-router-dom"; // Add Navigate here
import "./App.css";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={`/login`} />} />
          <Route path="/login" element={authUser ? <Navigate to="/" /> :<Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
