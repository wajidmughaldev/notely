import React from "react";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Slideup from "../components/framer-motion/Slideup";
const Login = () => {
  return (
    <AuthLayout title="Login Notely">
      <Slideup>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />

          <div className="flex items-center justify-between">
            <Button text="Login" variant="primary" size="lg" />
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
