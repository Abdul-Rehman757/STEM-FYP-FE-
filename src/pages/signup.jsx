
// import React from 'react';
// import backgroundImage from './Images/LGU-2-scaled.jpg';

// const SignUpForm = ({ onSignUp }) => {
//   return (
//     <div
//       className="min-h-screen flex justify-center items-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
//         <form onSubmit={onSignUp} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <p>
//             Already have an account?{' '}
//             <a href="/login" className="text-blue-600 font-bold hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;





import React, { useState } from 'react';
import backgroundImage from './Images/LGU-2-scaled.jpg';

const SignUpForm = ({ onSignUp }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validation checks
  const validateFullName = () => {
    const nameRegex = /^[A-Za-z]{6,}$/;
    if (!nameRegex.test(fullName)) {
      setErrors((prev) => ({ ...prev, fullName: 'Full name must be at least 6 letters and contain only alphabetic characters.' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, fullName: '' }));
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: '' }));
    return true;
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password must be at least 6 characters and include both numbers and special characters.',
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, password: '' }));
    return true;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isFullNameValid && isEmailValid && isPasswordValid) {
      onSignUp(); // Proceed with sign-up
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onBlur={validateFullName}
            required
            className={`w-full px-3 py-2 border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

          {/* Email Address */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
            className={`w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            required
            className={`w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-bold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
