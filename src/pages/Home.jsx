import React from 'react';

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
      <ul className="list-disc list-inside">
        <li>Showcase your innovative STEM projects to a global audience</li>
        <li>Connect with industry leaders and potential employers</li>
        <li>Collaborate with peers and receive expert feedback</li>
        <li>Stay at the forefront of technological trends and breakthroughs</li>
      </ul>
    </section>
  );
}

export default Home;
