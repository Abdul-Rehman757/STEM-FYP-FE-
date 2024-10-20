import React from 'react';

const projects = [
  {
    title: 'Quantum-Enhanced Machine Learning',
    description: 'Leveraging quantum computing to revolutionize AI algorithms.',
  },
  {
    title: 'Biodegradable Smart Materials',
    description: 'Developing eco-friendly materials with programmable properties.',
  },
  {
    title: 'Neuromorphic Computing Architecture',
    description: 'Brain-inspired computing systems for efficient AI processing.',
  },
  {
    title: 'Autonomous Drone Swarm Technology',
    description: 'Coordinated drone systems for complex tasks and emergencies.',
  },
];

function Projects() {
  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
