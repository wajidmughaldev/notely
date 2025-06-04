import React, { useEffect,useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import Button from '../components/Button';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import Slideup from '../components/framer-motion/Slideup';
import account  from '../appwrite/auth'
import { useNavigate  } from 'react-router-dom';
import {ID} from 'appwrite'
import useAuthStore from '../store/authStore'
const Signup = () => {
  const navigate = useNavigate();
const [userData,setUserData]=useState({
  name:'',
  email:'',
  password:''
})
  const createUser= ()=>{
    const promise = account.create(
      ID.unique(),
      userData.email,
      userData.password,
    userData.name
    );

    promise.then(function (response) {
      // console.log(response);
      navigate ('/login')

    }, function (error) {
      console.log(error); 
  });

  }
  return (
    <AuthLayout title="Sign up Notely">
        <Slideup>

      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input-field"  onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
        <input type="text" placeholder="Username" className="input-field" onChange={(e) => setUserData({ ...userData, name: e.target.value })}/>
        <input type="password" placeholder="Password" className="input-field" onChange={(e) => setUserData({ ...userData, password: e.target.value })}/>

        <p className=" text-gray-500 text-xs">
          Password must be at least 8 characters long and include 1 capital letter and 1 number.
        </p>

        <Button text="Sign up" variant="primary" size='lg' onClick={createUser}/>

        <p className="text-sm text-red-500 text-center">Already have an account? <Link to="/login" className="underline">Login</Link></p>
      </form>
        </Slideup>

    </AuthLayout>
  );
};

export default Signup;
