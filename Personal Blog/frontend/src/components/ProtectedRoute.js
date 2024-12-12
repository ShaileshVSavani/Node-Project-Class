import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component to protect routes
function ProtectedRoute({ element }) {
  const loggedIn = localStorage.getItem('loggedIn'); // Check if user is logged in

  if (!loggedIn) {
    // Redirect to login if the user is not logged in
    return <Navigate to="/login" />;
  }

  return element;
}

export default ProtectedRoute;
