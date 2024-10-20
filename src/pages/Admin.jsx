import React from 'react';

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
  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Admin Dashboard
      </h2>

      {/* Pending Projects */}
      <h3 className="text-xl font-semibold text-teal-800 mb-2">Pending Projects</h3>
      <ul className="mb-8">
        {pendingProjects.map((project, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2"
          >
            <span className="mb-2 lg:mb-0">
              {project.title} <em>(by {project.author})</em>
            </span>
            <div className="flex space-x-2 w-full lg:w-auto">
              <button className="w-full lg:w-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                Approve
              </button>
              <button className="w-full lg:w-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* User Management */}
      <h3 className="text-xl font-semibold text-teal-800 mb-2">User Management</h3>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2"
          >
            <span className="mb-2 lg:mb-0">
              {user.name} <em>({user.email})</em>
            </span>
            <div className="flex space-x-2 w-full lg:w-auto">
              <button className="w-full lg:w-auto px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit Role
              </button>
              <button className="w-full lg:w-auto px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Deactivate
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Admin;