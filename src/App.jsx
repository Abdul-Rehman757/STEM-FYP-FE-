// import React, { useState } from 'react';
// import Header from './components/Header';
// import Nev from './components/Navbar';
// import LoginForm from './pages/login';
// import SignUpForm from './pages/signup';
// import ForgotPassword from './pages/forgetpassword';
// import Footer from './components/Footer';
// import Home from './pages/Home'; // Import the STEM Project Dashboard
// import Admin from './pages/Admin';
// import Project from './pages/Project';
// import Submit from './pages/Submit';
// import Account from './pages/Account';
// import Industrialist from './pages/Industrialist';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState('login'); // Tracks the current form (login/signup/forgot password)
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the user is authenticated
//   const [activeSection, setActiveSection] = useState('home'); // Tracks active section in the dashboard

//   // Function to simulate login
//   const handleLogin = () => {
//     setIsAuthenticated(true); // Set the user as authenticated
//     setCurrentPage('dashboard'); // Redirect to dashboard after login
//   };

//   // Function to simulate logout
//   const handleLogout = () => {
//     setIsAuthenticated(false); // Set the user as not authenticated
//     setCurrentPage('login'); // Go back to login after logout
//   };

//   // Function to render different sections of the dashboard
//   const renderSection = () => {
//     switch (activeSection) {
//       case 'projects':
//         return <Project/>; // Replace with your actual projects section
//       case 'submit':
//         return <Submit/>; // Replace with your actual submit project section
//       case 'account':
//         return <Account/>; // Replace with your account details section
//       case 'industrialist':
//         return <Industrialist/>; // Replace with industrialists section
//       case 'admin':
//         return <Admin/>; // Replace with admin section
//       default:
//         return <Home />; // Default to home section
//     }
//   };

//   // Function to render different pages based on authentication state
//   const renderPage = () => {
//     if (isAuthenticated) {
//       return (
//         <>
//           <Nev
//             activeSection={activeSection}
//             setActiveSection={setActiveSection}
//             setAuthenticated={setIsAuthenticated}
//           />
//           {renderSection()}
//         </>
//       ); // Render the dashboard with the navbar
//     }

//     switch (currentPage) {
//       case 'signup':
//         return (
//           <SignUpForm
//             switchToLogin={() => setCurrentPage('login')}
//             onSignUp={handleLogin}
//           />
//         );
//       case 'forgotPassword':
//         return (
//           <ForgotPassword switchToLogin={() => setCurrentPage('login')} />
//         );
//       default:
//         return (
//           <LoginForm
//             switchToSignUp={() => setCurrentPage('signup')}
//             switchToForgotPassword={() => setCurrentPage('forgotPassword')}
//             onLogin={handleLogin}
//           />
//         );
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
 import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './pages/login';
import SignUpForm from './pages/signup';
import ForgotPassword from './pages/forgetPassword';
import Home from './pages/Home';
import Projects from './pages/Project';
import Submit from './pages/Submit';
import Admin from './pages/Admin';
import Account from './pages/Account';
import Industrialist from './pages/Industrialist';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the user is authenticated

  // Function to simulate login
  const handleLogin = () => {
    setIsAuthenticated(true); // Set the user as authenticated
  };

  // Function to simulate logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Set the user as not authenticated
  };

  return (
    <Router>
      <div className="app-container">
        {/* Show Header and Navbar only if authenticated */}
        {isAuthenticated && <Header />}
        {isAuthenticated && <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />}

        <main className="main-content">
          <Routes>
            {/* Public Routes: Login, Signup, ForgotPassword */}
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
            <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" /> : <SignUpForm onSignUp={handleLogin} />} />
            <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/home" /> : <ForgotPassword />} />

            {/* Protected Routes: User can access only after login */}
            {isAuthenticated ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/account" element={<Account />} />
                <Route path="/industrialist" element={<Industrialist />} />
                <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect unknown routes to Home */}
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} /> /* Redirect unknown routes to Login */
            )}
          </Routes>
        </main>

        {/* Show Footer only if authenticated */}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;
