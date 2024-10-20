import React, { useState } from 'react';

function Submit() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null); // For previewing image

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Preview the file if it's an image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null); // Clear preview if it's not an image
      }
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFilePreview(null); // Clear the preview as well
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      console.log('Selected File:', selectedFile); // You can now upload or process the file
      alert('Project submitted successfully!');
    } else {
      alert('Please choose a file before submitting.');
    }
  };

  return (
    <section className="bg-white rounded-lg p-8 mb-8 shadow-lg">
      <h2 className="text-2xl font-bold text-teal-800 border-b-2 border-teal-600 pb-2 mb-4">
        Submit Your Project
      </h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Project Description"
          rows="4"
          required
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <input
          type="text"
          placeholder="Technologies Used"
          className="w-full p-3 border border-gray-300 rounded"
        />

        <div className="relative w-full p-3 border border-gray-300 rounded bg-gray-50">
          <label className="block mb-2 font-semibold text-gray-700">
            Choose a project file (Image, Video, Zip, PDF)
          </label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.gif,.mp4,.zip,.pdf,.doc,.docx" // Accept various file types
            onChange={handleFileChange}
            className="w-full p-1"
          />

          {/* Display the selected file name */}
          {selectedFile && (
            <div className="mt-2 text-sm text-teal-800 font-semibold flex justify-between items-center">
              <p>Selected File: {selectedFile.name}</p>
              
              {/* Cross button to remove the file */}
              <button
                onClick={handleRemoveFile}
                type="button"
                className="text-red-500 font-bold text-lg"
              >
                &times;
              </button>
            </div>
          )}

          {/* Display a preview if the selected file is an image */}
          {filePreview && (
            <div className="mt-4 relative">
              <img
                src={filePreview}
                alt="Selected Preview"
                className="max-w-xs max-h-40 object-cover rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700"
        >
          Submit Project
        </button>
      </form>
    </section>
  );
}

export default Submit;

