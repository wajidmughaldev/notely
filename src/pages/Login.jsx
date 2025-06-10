import React,{useState} from "react";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Slideup from "../components/framer-motion/Slideup";
// import account from '../appwrite/auth'
import useAuthStore from "../store/authStore";
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase/config'
const Login = () => {
  const setUser  = useAuthStore((state)=>state.setUser)
  const user  = useAuthStore((state)=>state.currentUser)
  const navigate = useNavigate()
  const [userData,setUserData]=useState({
    email:'admin@gmail.com  ',
    password:'admin123'
  })
  // const login = async () => {
  //   try {
  //     // OPTIONAL: Clear previous sessions only if needed
  //     try {
  //       await account.deleteSessions(); // Only if you suspect old sessions
  //     } catch (err) {
  //       // Ignore this error, it just means no session exists yet
  //       if (err.code !== 401) {
  //         throw err;
  //       }
  //     }
  
  //     const session = await account.createEmailPasswordSession(userData.email.trim(), userData.password);
  //     const user = await account.get();
  //     setUser(user); // your Zustand auth store
  //     navigate('/'); // or dashboard
  //   } catch (err) {
  //     console.log('Login error:', err.message);
  //   }
  // };
  
  
  
  const login=async()=>{
    try{
      const response = await signInWithEmailAndPassword(auth,userData.email.trim(),userData.password)  
      setUser(response.user)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <AuthLayout title="Login Notely">
      <Slideup>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="password"
            value={userData.password}
            placeholder="Password"
            className="input-field"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />

          <div className="flex items-center justify-between">
            {/* <Button text="Login" variant="primary" size="lg" onClick={login} /> */}
            <Button text="Login" variant="primary" size="lg" onClick={login} />
            <label className="text-sm">
              <input type="checkbox" className="mr-1" /> Remember Me
            </label>
          </div>

          <p className="text-sm text-red-500 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>{" "}
          </p>
        </form>
      </Slideup>
    </AuthLayout>
  );
};

export default Login;
