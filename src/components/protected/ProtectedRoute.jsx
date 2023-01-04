import React from 'react';
import useAuth from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/signin' />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
