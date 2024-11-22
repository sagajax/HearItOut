import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
      author: "Lorem Ipsum"
    },
    {
      text: "Another testimonial text here...",
      author: "Lorem Ipsum"
    },
    {
      text: "Third testimonial text here...",
      author: "Lorem Ipsum"
    },
    {
      text: "Fourth testimonial text here...",
      author: "Lorem Ipsum"
    },
    {
      text: "Fifth testimonial text here...",
      author: "Lorem Ipsum"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#EBF7FC]">
      <h2 className="text-2xl text-[#2B7B8C] font-semibold mb-8 text-center">
        SECTION III [25 points]
      </h2>

      <div className="relative">
        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 relative">
          {/* Quote marks */}
          <div className="absolute top-4 left-4 text-gray-200 text-6xl font-serif">"</div>
          <div className="absolute bottom-4 right-4 text-gray-200 text-6xl font-serif rotate-180">"</div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              {testimonials[currentSlide].author}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {testimonials[currentSlide].text}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-[#2B7B8C] text-white p-2 rounded-full hover:bg-[#236778] transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-[#2B7B8C] text-white p-2 rounded-full hover:bg-[#236778] transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#2B7B8C]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slider Button */}
        <div className="text-center mt-6">
          <button className="bg-[#1B3240] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-opacity">
            Slider Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;