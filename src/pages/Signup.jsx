import React from 'react';
import AuthLayout from '../components/AuthLayout';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Slideup from '../components/framer-motion/Slideup';
const Signup = () => {
  return (
    <AuthLayout title="Sign up Notely">
        <Slideup>

      <form className="space-y-4">
        <input type="email" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <p className="text-sm text-gray-500 text-xs">
          Password must be at least 8 characters long and include 1 capital letter and 1 number.
        </p>

        <Button text="Sign up" variant="primary" size='lg' />

        <p className="text-sm text-red-500 text-center">Already have an account? <Link to="/login" className="underline">Login</Link></p>
      </form>
        </Slideup>
    </AuthLayout>
  );
};

export default Signup;
