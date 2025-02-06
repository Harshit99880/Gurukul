import React, { useRef } from 'react';

const testimonials = [
  {
    text: `"I got only 68% in my 10th exams. After attending CAD Gurukul classes, my concentration levels increased significantly. My scores were improved significantly with just three months of practice. Thank you CAD Gurukul and Adish Sir."`,
    name: "Aditya Ganjoo",
    title: "IIT Rank 57 - 2023",
    img: "/logo.png" 
  },
  {
    text: `"CAD Gurukul workshop has significantly improved my art. It transformed me from a hobby artist to a professional painter. Now my paintings are being sold in the range of 15k to 35k per painting."`,
    name: "Shikha Nayyar",
    title: "Artist (Painter)",
    img: "/logo.png" 
  },
  {
    text: `"I was an ordinary photographer, struggling financially. My skills were mediocre. After I started practicing CAD methods, my work and confidence got uplifted with just 5 months of practice. Now I am a successful celebrity photographer with top weddings in my portfolio, like the Ambani Wedding."`,
    name: "Kailash Rohera",
    title: "Celebrity Wedding Photographer",
    img: "/logo.png" 
  }
];

const TestimonialSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Testimonials</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md"
        >
          &#8592;
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 py-4 px-6 scrollbar-hide"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center min-w-[250px] max-w-[350px]"
            >
              <div className="flex flex-col items-center mb-4">
                <img 
                  src={testimonial.img} 
                  alt={testimonial.name} 
                  className="w-30 h-30 rounded-full object-cover mb-4" 
                />
                <p className="text-lg italic mb-4">{testimonial.text}</p>
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
