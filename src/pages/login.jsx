// import React from 'react';

// const LoginForm = ({ switchToSignUp, switchToForgotPassword, onLogin }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(); // Trigger login logic from parent (App.jsx)
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-80">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             required
//             className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <button onClick={switchToForgotPassword} className="text-blue-500 hover:underline">
//             Forgot Password?
//           </button>
//         </div>
//         <div className="text-center mt-4">
//           <p>
//             Don't have an account?{' '}
//             <button onClick={switchToSignUp} className="text-green-500 font-bold hover:underline">
//               Sign Up
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Images/LGU-2-scaled.jpg'; // Adjust this path based on your folder structure

const LoginForm = ({ onLogin }) => {
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
        <form onSubmit={onLogin}>
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
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


