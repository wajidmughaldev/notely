import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const ProtectedRoute = ({ children }) => {
  const currentUser = useAuthStore((state) => state.currentUser);
  return currentUser ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;