import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
const RedirectIfLoggedIn = ({ children }) => {
  const { currentUser } = useAuthStore();

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RedirectIfLoggedIn;
