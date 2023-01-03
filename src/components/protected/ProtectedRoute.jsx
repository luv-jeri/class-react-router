import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/signin' replace />;
  }

  return children;
};

export default ProtectedRoute;
