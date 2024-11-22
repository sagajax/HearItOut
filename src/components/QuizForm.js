import React, { useState } from 'react';

const QuizForm = () => {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl text-teal-600 font-semibold mb-6">
            SECTION I [15 points]
          </h2>

          {/* First Question Group */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet</p>
            <div className="space-y-3">
              {['Radio Button Option', 'Radio Button Option', 'Radio Button Option', 'Radio Button Option'].map((option, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="question1"
                    value={`option${index + 1}`}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-teal-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dropdown Question */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet</p>
            <select
              name="question2"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Drop Down Option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Second Radio Group */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet</p>
            <div className="space-y-3">
              {['Radio Button Option', 'Radio Button Option', 'Radio Button Option', 'Radio Button Option'].map((option, index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="question3"
                    value={`option${index + 1}`}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-teal-600"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors duration-200"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;