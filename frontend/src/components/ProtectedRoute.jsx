import React from 'react';
import { Navigate } from 'react-router-dom';
import { getTokenFromCookie } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  const token = getTokenFromCookie();
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
