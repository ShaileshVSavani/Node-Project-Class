import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null); // State to store user data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get logged in user from localStorage
    const loggedIn = localStorage.getItem('loggedIn');
    const userEmail = localStorage.getItem('userEmail');

    if (loggedIn === 'true') {
      // Retrieve user data based on stored email
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const currentUser = users.find(user => user.email === userEmail);

      if (currentUser) {
        setUser(currentUser); // Set user data in state
      } else {
        setError('User not found.');
      }
    } else {
      setError('You must be logged in to access the profile.');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = '/login'; // Redirect to login page after logout
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
          <p className="text-red-500 text-xl">{error}</p>
          <Link to="/login" className="text-blue-600 mt-4 block">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Profile</h2>

        {user ? (
          <>
            <div className="mb-4">
              <p className="text-lg font-medium">Email: <span className="text-gray-700">{user.email}</span></p>
            </div>

            {/* You can add more user information here, such as name, address, etc. */}

            <div className="mt-6">
              <button
                onClick={handleLogout}
                className="w-full py-3 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-700 text-lg">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
