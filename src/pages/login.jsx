
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Images/LGU-2-scaled.jpg'; // Adjust this path based on your folder structure

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  // Username validation: must be at least 6 alphabetic characters
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (/^[A-Za-z]{6,}$/.test(value)) {
      setIsUsernameValid(true);
      setUsernameError('');
    } else {
      setIsUsernameValid(false);
      setUsernameError('Username must be at least 6 alphabetic characters.');
    }
  };

  // Password validation: must be at least 6 characters with digits and special characters
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (passwordRegex.test(value)) {
      setIsPasswordValid(true);
      setPasswordError('');
    } else {
      setIsPasswordValid(false);
      setPasswordError(
        'Password must be at least 6 characters and include both numbers and special characters.'

      );
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUsernameValid && isPasswordValid) {
      onLogin();
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            className={`w-full px-3 py-2 mb-1 border ${
              isUsernameValid ? 'border-gray-300' : 'border-red-500'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {username && !isUsernameValid && (
            <p className="text-red-500 text-xs mb-4">{usernameError}</p>
          )}
          
          {/* Password Input, disabled until username is valid */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            disabled={!isUsernameValid}
            className={`w-full px-3 py-2 mb-1 border ${
              isPasswordValid ? 'border-gray-300' : 'border-red-500'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
              !isUsernameValid && 'bg-gray-100 cursor-not-allowed'
            }`}
          />
          {password && !isPasswordValid && (
            <p className="text-red-500 text-xs mb-4">{passwordError}</p>
          )}
          
          {/* Submit Button, disabled until both fields are valid */}
          <button
            type="submit"
            disabled={!isUsernameValid || !isPasswordValid}
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-blue-800 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-800 font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



