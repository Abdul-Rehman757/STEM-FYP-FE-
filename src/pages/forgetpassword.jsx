// import React from 'react';

// const ForgotPassword = ({ switchToLogin }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle forgot password logic
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-80">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//             className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Send Reset Link
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <p>
//             Remembered your password?{' '}
//             <button onClick={switchToLogin} className="text-blue-600 font-bold hover:underline">
//               Login
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Images/LGU-2-scaled.jpg';  

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}  // Use the imported image
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-80" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}> 
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="text-center mt-4 text-green-500">{message}</p>}
        <div className="text-center mt-4">
          <p>
            Remembered your password?{' '}
            <Link to="/login" className="text-blue-800 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


