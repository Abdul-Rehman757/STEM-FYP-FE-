import React from 'react';

const LogoutButton = ({ setAuthenticated }) => {
  const handleLogout = () => {
    // Clear stored authentication tokens or user data
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Update the state to reflect the user is logged out
    setAuthenticated(false); // This will hide the dashboard and show the login form
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
