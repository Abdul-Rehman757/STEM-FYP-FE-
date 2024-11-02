// import React, { useState } from 'react';

// const innovators = [
//   {
//     name: 'Ahad Raza',
//     specialization: 'AI and Robotics',
//     project: 'Self-learning Robotic Assistant',
//     contact: {
//       email: 'ahad.raza@example.com',
//       phone: '+92-300-1234567',
//       linkedin: 'https://www.linkedin.com/in/ahad-raza/',
//     },
//   },
//   {
//     name: 'Hamza Ali',
//     specialization: 'Renewable Energy',
//     project: 'High-Efficiency Solar Cells',
//     contact: {
//       email: 'hamza.ali@example.com',
//       phone: '+92-321-7654321',
//       linkedin: 'https://www.linkedin.com/in/hamza-ali/',
//     },
//   },
// ];

// function Industrialist() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedInnovator, setSelectedInnovator] = useState(null);

//   const handleContactClick = (innovator) => {
//     setSelectedInnovator(innovator);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedInnovator(null);
//   };

//   return (
//     <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         For Industrialists
//       </h2>
//       <p className="mb-4">
//         Welcome to the STEM PROJECT SHOWCASE Industrialist Portal. Here, you can discover cutting-edge projects, interact with talented students, and find your next great hire or collaboration.
//       </p>
//       <h3 className="text-xl font-semibold text-teal-800 mb-2">Benefits for Industry Partners:</h3>
//       <ul className="list-disc list-inside mb-4">
//         <li>Access to a pool of innovative projects and fresh ideas</li>
//         <li>Direct communication with student innovators</li>
//         <li>Opportunity to mentor and guide promising talents</li>
//         <li>Early access to emerging technologies and methodologies</li>
//       </ul>
//       <h3 className="text-xl font-semibold text-teal-800 mb-4">Featured Student Innovators</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {innovators.map((innovator, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-semibold text-teal-800 mb-2">{innovator.name}</h3>
//             <p><strong>Specialization:</strong> {innovator.specialization}</p>
//             <p><strong>Project:</strong> {innovator.project}</p>
//             <button
//               className="mt-4 w-full p-2 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
//               onClick={() => handleContactClick(innovator)}
//             >
//               Contact {innovator.name.split(' ')[0]}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedInnovator && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h3 className="text-xl font-semibold text-teal-800 mb-4">
//               Contact Information for {selectedInnovator.name}
//             </h3>
//             <p><strong>Email:</strong> {selectedInnovator.contact.email}</p>
//             <p><strong>Phone:</strong> {selectedInnovator.contact.phone}</p>
//             <p>
//               <strong>LinkedIn:</strong>{' '}
//               <a
//                 href={selectedInnovator.contact.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-teal-600 hover:underline"
//               >
//                 {selectedInnovator.contact.linkedin}
//               </a>
//             </p>
//             <button
//               className="mt-4 w-full p-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Industrialist;





// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const companies = [
//   { name: 'Devsinc' },
//   { name: 'System private limitted' },
//   { name: 'Netsol' },
//   { name: 'ibex' },
//   { name: 'Delign Media' },
//   { name: 'Gosaas Lab' },
// ];

// const innovators = [
//   {
//     name: 'Ahad Raza',
//     specialization: 'AI and Robotics',
//     project: 'Self-learning Robotic Assistant',
//     contact: {
//       email: 'ahad.raza@example.com',
//       phone: '+92-300-1234567',
//       linkedin: 'https://www.linkedin.com/in/ahad-raza/',
//     },
//   },
//   {
//     name: 'Hamza Ali',
//     specialization: 'Renewable Energy',
//     project: 'High-Efficiency Solar Cells',
//     contact: {
//       email: 'hamza.ali@example.com',
//       phone: '+92-321-7654321',
//       linkedin: 'https://www.linkedin.com/in/hamza-ali/',
//     },
//   },
// ];

// function Industrialist() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedInnovator, setSelectedInnovator] = useState(null);

//   const handleContactClick = (innovator) => {
//     setSelectedInnovator(innovator);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedInnovator(null);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
//     <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
//         For Industrialists
//       </h2>
//       <p className="mb-4">
//         Welcome to the STEM PROJECT SHOWCASE Industrialist Portal. Here, you can discover cutting-edge projects, interact with talented students, and find your next great hire or collaboration.
//       </p>

//       <h3 className="text-xl font-semibold text-teal-800 mb-2">Benefits for Industry Partners:</h3>
//       <ul className="list-disc list-inside mb-4">
//         <li>Access to a pool of innovative projects and fresh ideas</li>
//         <li>Direct communication with student innovators</li>
//         <li>Opportunity to mentor and guide promising talents</li>
//         <li>Early access to emerging technologies and methodologies</li>
//       </ul>

//       <h3 className="text-xl font-semibold text-teal-800 mb-2">Featured Companies</h3>
//       <Slider {...sliderSettings}>
//         {companies.map((company, index) => (
//           <div key={index} className="slider-slide">
//             <h2 className="text-2xl font-bold">{company.name}</h2>
//           </div>
//         ))}
//       </Slider>

//       <h3 className="text-xl font-semibold text-teal-800 mb-4">Featured Student Innovators</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {innovators.map((innovator, index) => (
//           <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
//             <h3 className="text-xl font-semibold text-teal-800 mb-2">{innovator.name}</h3>
//             <p><strong>Specialization:</strong> {innovator.specialization}</p>
//             <p><strong>Project:</strong> {innovator.project}</p>
//             <button
//               className="mt-4 w-full p-2 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
//               onClick={() => handleContactClick(innovator)}
//             >
//               Contact {innovator.name.split(' ')[0]}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedInnovator && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h3 className="text-xl font-semibold text-teal-800 mb-4">
//               Contact Information for {selectedInnovator.name}
//             </h3>
//             <p><strong>Email:</strong> {selectedInnovator.contact.email}</p>
//             <p><strong>Phone:</strong> {selectedInnovator.contact.phone}</p>
//             <p>
//               <strong>LinkedIn:</strong>{' '}
//               <a
//                 href={selectedInnovator.contact.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-teal-600 hover:underline"
//               >
//                 {selectedInnovator.contact.linkedin}
//               </a>
//             </p>
//             <button
//               className="mt-4 w-full p-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Industrialist;



import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companies = [
  { name: 'Devsinc' },
  { name: 'System Private Limited' },
  { name: 'Netsol' },
  { name: 'Ibex' },
  { name: 'Delign Media' },
  { name: 'Gosaas Lab' },
];

const innovators = [
  {
    name: 'Ahad Raza',
    specialization: 'AI and Robotics',
    project: 'Self-learning Robotic Assistant',
    contact: {
      email: 'ahad.raza@example.com',
      phone: '+92-300-1234567',
      linkedin: 'https://www.linkedin.com/in/ahad-raza/',
    },
  },
  {
    name: 'Hamza Ali',
    specialization: 'Renewable Energy',
    project: 'High-Efficiency Solar Cells',
    contact: {
      email: 'hamza.ali@example.com',
      phone: '+92-321-7654321',
      linkedin: 'https://www.linkedin.com/in/hamza-ali/',
    },
  },
];

function Industrialist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInnovator, setSelectedInnovator] = useState(null);

  const handleContactClick = (innovator) => {
    setSelectedInnovator(innovator);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInnovator(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        For Industrialists
      </h2>
      <p className="mb-4">
        Welcome to the STEM PROJECT SHOWCASE Industrialist Portal. Here, you can discover cutting-edge projects, interact with talented students, and find your next great hire or collaboration.
      </p>

      <h3 className="text-xl font-semibold text-teal-800 mb-2">Benefits for Industry Partners:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Access to a pool of innovative projects and fresh ideas</li>
        <li>Direct communication with student innovators</li>
        <li>Opportunity to mentor and guide promising talents</li>
        <li>Early access to emerging technologies and methodologies</li>
      </ul>

      <h3 className="text-xl font-semibold text-teal-800 mb-2">Featured Companies</h3>
      <Slider {...sliderSettings}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="slider-slide bg-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <h2 className="text-2xl font-bold text-teal-800">{company.name}</h2>
          </div>
        ))}
      </Slider>

      <h3 className="text-xl font-semibold text-teal-800 mb-4">Featured Student Innovators</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {innovators.map((innovator, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-800 mb-2">{innovator.name}</h3>
            <p><strong>Specialization:</strong> {innovator.specialization}</p>
            <p><strong>Project:</strong> {innovator.project}</p>
            <button
              className="mt-4 w-full p-2 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
              onClick={() => handleContactClick(innovator)}
            >
              Contact {innovator.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedInnovator && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Contact Information for {selectedInnovator.name}
            </h3>
            <p><strong>Email:</strong> {selectedInnovator.contact.email}</p>
            <p><strong>Phone:</strong> {selectedInnovator.contact.phone}</p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href={selectedInnovator.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                {selectedInnovator.contact.linkedin}
              </a>
            </p>
            <button
              className="mt-4 w-full p-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Industrialist;
