// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import LoginForm from './pages/login';
// import SignUpForm from './pages/signup';
// import ForgotPassword from './pages/forgetPassword';
// import Home from './pages/Home';
// import Projects from './pages/Project';
// import Submit from './pages/Submit';
// import Admin from './pages/Admin';
// import Account from './pages/Account';
// import Industrialist from './pages/Industrialist';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => setIsAuthenticated(true);
//   const handleLogout = () => setIsAuthenticated(false);

//   return (
//     <Router>
//       <div className="app-container">
//         {isAuthenticated && (
//           <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//         )}

//         <main className="main-content">
//           <Routes>
//             <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
//             <Route path="/signup" element={isAuthenticated ? <Navigate to="/home" /> : <SignUpForm onSignUp={handleLogin} />} />
//             <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/home" /> : <ForgotPassword />} />

//             {isAuthenticated ? (
//               <>
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/projects" element={<Projects />} />
//                 <Route path="/submit" element={<Submit />} />
//                 <Route path="/admin" element={<Admin />} />
//                 <Route path="/account" element={<Account />} />
//                 <Route path="/industrialist" element={<Industrialist />} />
//                 <Route path="*" element={<Navigate to="/home" />} />
//               </>
//             ) : (
//               <Route path="*" element={<Navigate to="/login" />} />
//             )}
//           </Routes>
//         </main>

//         {isAuthenticated && <Footer />}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  // A function to show a "Please login" message when accessing a protected route
  const requireAuth = (Component) => {
    return isAuthenticated ? Component : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page accessible to everyone */}
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" replace /> : <LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={isAuthenticated ? <Navigate to="/" replace /> : <SignUpForm onSignUp={handleLogin} />}
            />
            <Route
              path="/forgot-password"
              element={isAuthenticated ? <Navigate to="/" replace /> : <ForgotPassword />}
            />

            {/* Protected Routes */}
            <Route path="/projects" element={requireAuth(<Projects />)} />
            <Route path="/submit" element={requireAuth(<Submit />)} />
            <Route path="/admin" element={requireAuth(<Admin />)} />
            <Route path="/account" element={requireAuth(<Account />)} />
            <Route path="/industrialist" element={requireAuth(<Industrialist />)} />

            {/* Redirect all other paths to home if not logged in */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
};

export default App;



