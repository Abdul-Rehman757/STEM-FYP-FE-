import React from 'react';

function Account() {
  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        My Account
      </h2>
      <form className="grid gap-4 mb-8">
        <input
          type="text"
          placeholder="Full Name"
          value="Ali"
          readOnly
          className="w-full p-3 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="email"
          placeholder="Email"
          value="ali@example.com"
          readOnly
          className="w-full p-3 border border-gray-300 rounded bg-gray-100"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full p-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
        >
          Update Profile
        </button>
      </form>
      <h3 className="text-xl font-semibold text-teal-800 mb-2">My Projects</h3>
      <ul className="list-disc list-inside">
        <li>Advanced Cryptography System (Under Review)</li>
        <li>Sustainable Energy Harvesting (Approved)</li>
      </ul>
    </section>
  );
}

export default Account;
