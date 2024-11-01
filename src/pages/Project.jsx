// import React from 'react';

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

// function Projects() {
//   return (
//     <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         Featured Projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Projects;




import React, { useState } from 'react';

// Sample project data with ratings between 4 and 4.5
const initialProjects = [
  {
    title: 'Quantum-Enhanced Machine Learning',
    description: 'Leveraging quantum computing to revolutionize AI algorithms.',
    rating: 4.5,
  },
  {
    title: 'Biodegradable Smart Materials',
    description: 'Developing eco-friendly materials with programmable properties.',
    rating: 4.2,
  },
  {
    title: 'Neuromorphic Computing Architecture',
    description: 'Brain-inspired computing systems for efficient AI processing.',
    rating: 4.4,
  },
  {
    title: 'Autonomous Drone Swarm Technology',
    description: 'Coordinated drone systems for complex tasks and emergencies.',
    rating: 4.3,
  },
  {
    title: 'AI-Powered Healthcare Solutions',
    description: 'Innovative solutions for enhancing patient care using AI.',
    rating: 4.5,
  },
  {
    title: 'Blockchain for Supply Chain Transparency',
    description: 'Enhancing supply chain visibility and security with blockchain.',
    rating: 4.4,
  },
  {
    title: 'Augmented Reality for Education',
    description: 'Revolutionizing learning experiences through augmented reality.',
    rating: 4.2,
  },
  {
    title: '5G Technology for Smart Cities',
    description: 'Building smarter cities with 5G infrastructure.',
    rating: 4.3,
  },
  {
    title: 'Cybersecurity for IoT Devices',
    description: 'Protecting IoT devices from cyber threats with advanced solutions.',
    rating: 4.4,
  },
  {
    title: 'Sustainable Energy Solutions',
    description: 'Innovative approaches to harness renewable energy sources.',
    rating: 4.5,
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState(initialProjects);

  // Filter projects based on the search term
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Featured Projects
      </h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border border-gray-300 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:bg-teal-50"
            >
              <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <div className="flex items-center">
                <div className="flex">{renderStars(Math.round(project.rating))}</div>
                <span className="ml-2 text-teal-600 font-bold">{project.rating}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;

