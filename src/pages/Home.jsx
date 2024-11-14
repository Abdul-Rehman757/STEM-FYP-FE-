// import React from 'react';

// // Define projects with title and description
// const projects = [
//   {
//     title: 'Quantum-Enhanced Machine Learning',
//     description: 'Leveraging quantum computing to revolutionize AI algorithms.',
//   },
//   {
//     title: 'Biodegradable Smart Materials',
//     description: 'Developing eco-friendly materials with programmable properties.',
//   },
//   {
//     title: 'Neuromorphic Computing Architecture',
//     description: 'Brain-inspired computing systems for efficient AI processing.',
//   },
//   {
//     title: 'Autonomous Drone Swarm Technology',
//     description: 'Coordinated drone systems for complex tasks and emergencies.',
//   },
// ];

// // Utility function to generate a random rating between 4.4 and 4.9
// const getRandomRating = () => {
//   return (Math.random() * 0.5 + 4.4).toFixed(1);
// };

// // Component to render star rating based on a decimal rating
// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const halfStar = rating % 1 >= 0.5 ? 1 : 0;
//   const emptyStars = 5 - fullStars - halfStar;

//   return (
//     <div className="flex items-center mt-2">
//       {Array(fullStars).fill(0).map((_, index) => (
//         <span key={index} className="text-yellow-500">&#9733;</span>
//       ))}
//       {halfStar === 1 && <span className="text-yellow-500">&#9733;</span>}
//       {Array(emptyStars).fill(0).map((_, index) => (
//         <span key={index} className="text-gray-300">&#9733;</span>
//       ))}
//       <span className="ml-2 text-sm text-gray-600">({rating})</span>
//     </div>
//   );
// };

// function Home() {
//   return (
//     <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         Welcome to STEM PROJECT SHOWCASE
//       </h2>
//       <p className="mb-4">
//         Discover groundbreaking projects from the brightest STEM minds at our university. Our platform bridges the gap between academic innovation and industry needs, fostering collaboration and driving technological advancement.
//       </p>
//       <h3 className="text-xl font-semibold text-teal-800 mb-2">Why STEM PROJECT SHOWCASE?</h3>
//       <ul className="list-disc list-inside mb-6">
//         <li>Showcase your innovative STEM projects to a global audience</li>
//         <li>Connect with industry leaders and potential employers</li>
//         <li>Collaborate with peers and receive expert feedback</li>
//         <li>Stay at the forefront of technological trends and breakthroughs</li>
//       </ul>

//       {/* Featured Projects Section */}
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         Featured Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         {projects.map((project, index) => {
//           const rating = getRandomRating(); // Generate a random rating for each project
//           return (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:bg-teal-100 hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
//               <p>{project.description}</p>
//               <StarRating rating={rating} /> {/* Display star rating */}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaGlobe,
  FaMicroscope,
  FaChalkboardTeacher,
} from "react-icons/fa"; // Icons for additional sections
import backgroundImage from "./Images/LGU-2-scaled.jpg"; // Adjust this path based on your folder structure

// Define projects with title and description
const projects = [
  {
    title: "Quantum-Enhanced Machine Learning",
    description: "Leveraging quantum computing to revolutionize AI algorithms.",
  },
  {
    title: "Biodegradable Smart Materials",
    description:
      "Developing eco-friendly materials with programmable properties.",
  },
  {
    title: "Neuromorphic Computing Architecture",
    description:
      "Brain-inspired computing systems for efficient AI processing.",
  },
  {
    title: "Autonomous Drone Swarm Technology",
    description: "Coordinated drone systems for complex tasks and emergencies.",
  },
];

// Utility function to generate a random rating between 4.4 and 4.9
const getRandomRating = () => {
  return (Math.random() * 0.5 + 4.4).toFixed(1);
};

// Component to render star rating based on a decimal rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center mt-2">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="text-yellow-500">
            &#9733;
          </span>
        ))}
      {halfStar === 1 && <span className="text-yellow-500">&#9733;</span>}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={index} className="text-gray-300">
            &#9733;
          </span>
        ))}
      <span className="ml-2 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

function Home() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center text-center text-white py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Hero Section */}
      <div className="bg-opacity-70 bg-teal-900 p-8 rounded-lg shadow-lg mt-10 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
          Welcome to STEM PROJECTS SHOWCASE
        </h1>
        <p className="mb-4 text-lg leading-relaxed animate__animated animate__fadeInUp">
          Discover groundbreaking projects from the brightest STEM minds at our
          university. Our platform bridges the gap between academic innovation
          and industry needs, fostering collaboration and driving technological
          advancement.
        </p>
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-md shadow-md transition-transform transform hover:scale-105 mt-4 animate__animated animate__zoomIn"
        >
          Explore Projects
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg my-10 w-11/12 md:w-8/12 lg:w-6/12 text-teal-800 animate__animated animate__fadeInUp">
        <h3 className="text-2xl font-semibold mb-4">
          Why STEM PROJECTS SHOWCASE?
        </h3>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center">
            <FaRobot className="mr-2" /> Showcase your innovative STEM projects
            to a global audience
          </li>
          <li className="flex items-center">
            <FaGlobe className="mr-2" /> Connect with industry leaders and
            potential employers
          </li>
          <li className="flex items-center">
            <FaMicroscope className="mr-2" /> Collaborate with peers and receive
            expert feedback
          </li>
          <li className="flex items-center">
            <FaChalkboardTeacher className="mr-2" /> Stay at the forefront of
            technological trends and breakthroughs
          </li>
        </ul>
      </div>
      {/* Featured Projects Section */}
      <h2 className="text-3xl font-bold text-white mb-4 border-b-4 border-teal-500 inline-block animate__animated animate__fadeIn">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 w-full md:w-10/12 lg:w-8/12">
        {projects.map((project, index) => {
          const rating = getRandomRating(); // Generate a random rating for each project
          return (
            <div
              key={index}
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:bg-teal-100 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-teal-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>{" "}
              {/* Updated text color */}
              <StarRating rating={rating} />
            </div>
          );
        })}
      </div>
      {/* Call to Action */}
      <div className="mt-10 p-6 bg-green-800 text-white rounded-lg shadow-lg text-center animate__animated animate__fadeInUp">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Showcase Your Project?
        </h3>
        <p className="mb-4">
          Join us today to share your innovations and make an impact in the STEM
          world.
        </p>
        <Link
          to="/submit"
          className="inline-block px-6 py-3 bg-white text-teal-800 font-semibold rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Submit Your Project
        </Link>
      </div>
    </section>
  );
}

export default Home;
