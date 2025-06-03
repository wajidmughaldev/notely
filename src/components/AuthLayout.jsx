import { Link } from "react-router-dom";
import Slideup from "./framer-motion/Slideup";
import Button from "./Button";
const AuthLayout = ({ title, children }) => {
  return (
    <Slideup>

    <div className="min-h-screen flex">
      <div className="w-2/3 flex flex-col justify-center px-8 ">
        <h1 className="text-6xl font-bold mb-4 text-left">
          Your Digital Notebook<br />
          <span className="text-[#141414]">Safe, Simple, Notely.</span>
        </h1>
        <p className="text-2xl text-gray-600 text-left">
          Jot down ideas, capture inspirations, or keep important info – all in one place. 
          Notely is your personal, secure, and clutter-free note-taking platform designed to 
          protect your privacy while keeping your thoughts organized and always accessible.
        </p>
      </div>

      {/* Right Content (dynamic form) */}
      <div className="w-1/3 flex items-center justify-center px-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-semibold mb-6 text-left">{title}</h2>
          {children}
          <Button variant="link">
          <Link to='/' ><small>Quest Account</small></Link>
          </Button>
        </div>
      </div>
    </div>
    </Slideup>
  );
};

export default AuthLayout