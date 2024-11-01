// import React from 'react';

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
//       <ul className="list-disc list-inside">
//         <li>Showcase your innovative STEM projects to a global audience</li>
//         <li>Connect with industry leaders and potential employers</li>
//         <li>Collaborate with peers and receive expert feedback</li>
//         <li>Stay at the forefront of technological trends and breakthroughs</li>
//       </ul>
//     </section>
//   );
// }

// export default Home;


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

function Home() {
  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Welcome to STEM PROJECT SHOWCASE
      </h2>
      <p className="mb-4">
        Discover groundbreaking projects from the brightest STEM minds at our university. Our platform bridges the gap between academic innovation and industry needs, fostering collaboration and driving technological advancement.
      </p>
      <h3 className="text-xl font-semibold text-teal-800 mb-2">Why STEM PROJECT SHOWCASE?</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Showcase your innovative STEM projects to a global audience</li>
        <li>Connect with industry leaders and potential employers</li>
        <li>Collaborate with peers and receive expert feedback</li>
        <li>Stay at the forefront of technological trends and breakthroughs</li>
      </ul>

      {/* Featured Projects Section */}
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:bg-teal-100 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;

