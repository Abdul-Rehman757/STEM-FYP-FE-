// import React from 'react';

// function Nev({ activeSection, setActiveSection, setAuthenticated }) {
//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Submit Project', id: 'submit' },
//     { name: 'My Account', id: 'account' },
//     { name: 'Industrialists', id: 'industrialist' },
//     { name: 'Admin', id: 'admin' },
//     { name: 'Logout', id: 'logout' },
//   ];

//   const handleLogout = () => {
//     // Clear stored authentication tokens or user data
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');

//     // Set authentication state to false
//     setAuthenticated(false);

//     // Optional: Reset active section to login or any default page
//     setActiveSection('home'); // Redirect to 'home' or any section after logout
//   };

//   return (
//     <nav className="bg-teal-600 py-2">
//       <ul className="flex justify-center flex-wrap">
//         {navItems.map((item) => (
//           <li key={item.id} className="m-2">
//             {item.id === 'logout' ? (
//               <button
//                 onClick={handleLogout}
//                 className="text-white px-4 py-2 rounded hover:bg-teal-700"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               <button
//                 onClick={() => setActiveSection(item.id)}
//                 className={`text-white px-4 py-2 rounded hover:bg-teal-700 ${
//                   activeSection === item.id ? 'bg-teal-700' : ''
//                 }`}
//               >
//                 {item.name}
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Nev;




// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar({ isAuthenticated, onLogout }) {
//   return (
//     <nav className="bg-teal-600 py-2">
//       <ul className="flex justify-center flex-wrap">
//         <li className="m-2">
//           <Link to="/home" className="text-white px-4 py-2 rounded hover:bg-teal-700">Home</Link>
//         </li>
//         {isAuthenticated && (
//           <>
//             <li className="m-2">
//               <Link to="/projects" className="text-white px-4 py-2 rounded hover:bg-teal-700">Projects</Link>
//             </li>
//             <li className="m-2">
//               <Link to="/submit" className="text-white px-4 py-2 rounded hover:bg-teal-700">Submit Project</Link>
//             </li>
//             <li className="m-2">
//               <Link to="/account" className="text-white px-4 py-2 rounded hover:bg-teal-700">My Account</Link>
//             </li>
//             <li className="m-2">
//               <Link to="/industrialist" className="text-white px-4 py-2 rounded hover:bg-teal-700">Industrialists</Link>
//             </li>
//             <li className="m-2">
//               <Link to="/admin" className="text-white px-4 py-2 rounded hover:bg-teal-700">Admin</Link>
//             </li>
//             <li className="m-2">
//               <Link to="/logout" className="text-white px-4 py-2 rounded hover:bg-teal-700" onClick={onLogout}>
//                 Logout
//               </Link>
//             </li>
//           </>
//         )}
//         {!isAuthenticated && (
//           <li className="m-2">
//             <Link to="/login" className="text-white px-4 py-2 rounded hover:bg-teal-700">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false); // State to control the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-teal-600 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo or Branding (optional) */}
        <div className="text-white text-xl font-bold">STEM PROJECTS SHOWCASE</div>

        {/* Hamburger menu button for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navbar links */}
        <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center lg:space-x-4 text-center lg:text-left`}>
          <li className="m-2">
            <Link to="/home" className="text-white px-4 py-2 rounded hover:bg-teal-700">Home</Link>
          </li>
          {isAuthenticated && (
            <>
              <li className="m-2">
                <Link to="/projects" className="text-white px-4 py-2 rounded hover:bg-teal-700">Projects</Link>
              </li>
              <li className="m-2">
                <Link to="/submit" className="text-white px-4 py-2 rounded hover:bg-teal-700">Submit Project</Link>
              </li>
              <li className="m-2">
                <Link to="/account" className="text-white px-4 py-2 rounded hover:bg-teal-700">My Account</Link>
              </li>
              <li className="m-2">
                <Link to="/industrialist" className="text-white px-4 py-2 rounded hover:bg-teal-700">Industrialists</Link>
              </li>
              <li className="m-2">
                <Link to="/admin" className="text-white px-4 py-2 rounded hover:bg-teal-700">Admin</Link>
              </li>
              <li className="m-2">
                <button onClick={onLogout} className="text-white px-4 py-2 rounded hover:bg-teal-700">Logout</button>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <li className="m-2">
              <Link to="/login" className="text-white px-4 py-2 rounded hover:bg-teal-700">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

