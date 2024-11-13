import React, { useState } from 'react';

// Sample data categorized by Science, Technology, Engineering, and Mathematics
const categoriesData = [
  {
    name: 'Science',
    projects: [
      { title: 'Quantum Physics Research', description: 'Exploring the boundaries of quantum mechanics.', rating: 4.5 },
      { title: 'Genetics and Gene Editing', description: 'Advancements in CRISPR and gene editing.', rating: 4.3 },
      { title: 'Climate Change Modeling', description: 'Simulating climate patterns to predict future impacts.', rating: 4.4 },
      { title: 'Astrobiology', description: 'Study of life possibilities on other planets.', rating: 4.2 },
      { title: 'Microbiology Innovations', description: 'New findings in microbiome research.', rating: 4.5 },
    ],
  },
  {
    name: 'Technology',
    projects: [
      { title: 'Artificial Intelligence', description: 'Developing self-learning algorithms.', rating: 4.5 },
      { title: 'Blockchain for Data Security', description: 'Securing data with blockchain technology.', rating: 4.4 },
      { title: 'Internet of Things (IoT)', description: 'Connecting devices to enhance smart home automation.', rating: 4.2 },
      { title: 'Augmented Reality in Education', description: 'Using AR for immersive learning.', rating: 4.3 },
      { title: '5G Networks and Smart Cities', description: 'Infrastructure for the next generation.', rating: 4.4 },
    ],
  },
  {
    name: 'Engineering',
    projects: [
      { title: 'Renewable Energy Systems', description: 'Harnessing solar and wind energy efficiently.', rating: 4.5 },
      { title: 'Autonomous Vehicle Technology', description: 'Building self-driving car systems.', rating: 4.2 },
      { title: 'Advanced Robotics', description: 'Creating robots for industrial automation.', rating: 4.3 },
      { title: 'Structural Integrity Analysis', description: 'Ensuring safety in civil engineering.', rating: 4.4 },
      { title: 'Hydraulic Systems Innovation', description: 'New advancements in hydraulics.', rating: 4.1 },
    ],
  },
  {
    name: 'Mathematics',
    projects: [
      { title: 'Algorithm Optimization', description: 'Improving efficiency in computational algorithms.', rating: 4.3 },
      { title: 'Statistical Data Analysis', description: 'Techniques for analyzing large datasets.', rating: 4.5 },
      { title: 'Cryptography', description: 'Securing data through advanced encryption.', rating: 4.2 },
      { title: 'Mathematical Modeling', description: 'Creating models to simulate real-world scenarios.', rating: 4.4 },
      { title: 'Fractal Geometry', description: 'Exploring patterns in nature using fractals.', rating: 4.3 },
    ],
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term within selected category
  const filteredProjects = selectedCategory
    ? selectedCategory.projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Function to render star rating
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
        STEM Projects Showcase
      </h2>

      {/* Check if a category is selected */}
      {selectedCategory === null ? (
        // Display category list if no category is selected
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <h3 className="text-xl font-semibold text-teal-800">{category.name}</h3>
              <p className="text-gray-600">Explore innovative projects in {category.name}.</p>
            </div>
          ))}
        </div>
      ) : (
        // Display projects within the selected category
        <div>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSearchTerm(''); // Clear search term when returning to categories
            }}
            className="text-teal-600 underline mb-4"
          >
            ← Back to Categories
          </button>
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">
            {selectedCategory.name} Projects
          </h3>

          {/* Search bar for filtering projects in the selected category */}
          <div className="mb-4">
            <input
              type="text"
              placeholder={`Search in ${selectedCategory.name} projects...`}
              className="p-2 border border-gray-300 rounded w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold text-teal-800 mb-2">{project.title}</h4>
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
        </div>
      )}
    </section>
  );
};

export default Projects;
