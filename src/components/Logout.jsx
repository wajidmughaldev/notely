import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import account  from "../appwrite/auth"; // adjust the path as needed
import useAuthStore from "../store/authStore";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import useNoteStore from '../store/noteStore';

const Logout = ({className,text}) => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
  
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      setUser(null); // Clear Zustand auth store
      navigate("/login"); // Redirect to login page
      localStorage.removeItem('note-storage');
      // Optional: redirect or update UI state

useNoteStore.getState().resetFilter(); // custom clear logic if needed
useNoteStore.setState({ notes: [], filteredNotes: [] })
    } catch (error) {
      console.error("Error during logout:", error.message);
    }


    
  // const handleLogout = async () => {
  //   try {
  //     await account.deleteSession("current"); // Delete current session
  //     setUser(null); // Clear Zustand auth store
  //     navigate("/login"); // Redirect to login page
  //   } catch (error) {
  //     console.error("Logout error:", error.message);
  //   }
  // };
  }
  return (
    // <button onClick={handleLogout} className="cursor-pointer select-none text-red-500 hover:underline">
    //   {text}
    // </button>
    <button  className="cursor-pointer select-none text-red-500 hover:underline" onClick={handleLogout}>
    {text}
  </button>
  );
};

export default Logout;
