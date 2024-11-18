// import React from 'react';

// const pendingProjects = [
//   {
//     title: 'Nanotechnology-based Water Purification',
//     author: 'Haider',
//   },
//   {
//     title: 'AI-driven Climate Modeling',
//     author: 'Abdul Rehman',
//   },
// ];

// const users = [
//   {
//     name: 'Ahmad',
//     email: 'Ahmad@lgu.com',
//   },
//   {
//     name: 'Alina',
//     email: 'Ali@na.com',
//   },
// ];

// function Admin() {
//   return (
//     <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         Admin Dashboard
//       </h2>

//       {/* Pending Projects */}
//       <h3 className="text-xl font-semibold text-teal-800 mb-2">Pending Projects</h3>
//       <ul className="mb-8">
//         {pendingProjects.map((project, index) => (
//           <li
//             key={index}
//             className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2"
//           >
//             <span className="mb-2 lg:mb-0">
//               {project.title} <em>(by {project.author})</em>
//             </span>
//             <div className="flex space-x-2 w-full lg:w-auto">
//               <button className="w-full lg:w-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
//                 Approve
//               </button>
//               <button className="w-full lg:w-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
//                 Reject
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* User Management */}
//       <h3 className="text-xl font-semibold text-teal-800 mb-2">User Management</h3>
//       <ul>
//         {users.map((user, index) => (
//           <li
//             key={index}
//             className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2"
//           >
//             <span className="mb-2 lg:mb-0">
//               {user.name} <em>({user.email})</em>
//             </span>
//             <div className="flex space-x-2 w-full lg:w-auto">
//               <button className="w-full lg:w-auto px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Edit Role
//               </button>
//               <button className="w-full lg:w-auto px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
//                 Deactivate
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

// export default Admin;




import React, { useState } from 'react';

const pendingProjects = [
  {
    title: 'Nanotechnology-based Water Purification',
    author: 'Haider',
  },
  {
    title: 'AI-driven Climate Modeling',
    author: 'Abdul Rehman',
  },
];

const users = [
  {
    name: 'Ahmad',
    email: 'Ahmad@lgu.com',
  },
  {
    name: 'Alina',
    email: 'Ali@na.com',
  },
];

function Admin() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-3xl font-bold text-teal-800 border-b-4 border-teal-600 pb-2 mb-6 text-center">
        Admin Dashboard
      </h2>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-bold text-teal-700">5</h3>
          <p className="text-gray-600">Pending Projects</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-bold text-teal-700">20</h3>
          <p className="text-gray-600">Active Users</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center">
          <h3 className="text-2xl font-bold text-teal-700">15</h3>
          <p className="text-gray-600">Activity Logs</p>
        </div>
      </div>

      {/* Pending Projects */}
      <h3 className="text-xl font-semibold text-teal-800 mb-4">Pending Projects</h3>
      <ul className="mb-8">
        {pendingProjects.map((project, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 animate-slide-in"
          >
            <span className="mb-2 lg:mb-0">
              {project.title} <em>(by {project.author})</em>
            </span>
            <div className="flex space-x-2 w-full lg:w-auto">
              <button className="w-full lg:w-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300">
                Approve
              </button>
              <button className="w-full lg:w-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* User Management */}
      <h3 className="text-xl font-semibold text-teal-800 mb-4">User Management</h3>
      <input
        type="text"
        placeholder="Search users..."
        className="mb-4 p-2 w-full border border-gray-300 rounded focus:ring-2 focus:ring-teal-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="space-y-4">
        {filteredUsers.map((user, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center animate-fade-in"
          >
            <span>
              {user.name} <em>({user.email})</em>
            </span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Edit Role
              </button>
              <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300">
                Deactivate
              </button>
            </div>
          </li>
        ))}
        {filteredUsers.length === 0 && (
          <li className="text-center text-gray-500">No users found.</li>
        )}
      </ul>

      {/* Activity Logs Section */}
      <h3 className="text-xl font-semibold text-teal-800 mt-8 mb-4">Activity Logs</h3>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-gray-600">No recent activities.</p>
      </div>
    </section>
  );
}

export default Admin;
