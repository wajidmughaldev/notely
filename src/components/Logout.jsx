import React from "react";
import { useNavigate } from "react-router-dom";
import account  from "../appwrite/auth"; // adjust the path as needed
import useAuthStore from "../store/authStore";

const Logout = ({className,text}) => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Delete current session
      setUser(null); // Clear Zustand auth store
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer select-none text-red-500 hover:underline">
      {text}
    </button>
  );
};

export default Logout;
