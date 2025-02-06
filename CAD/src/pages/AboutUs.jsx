import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">About Us</h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image  */}
        <div className="w-full md:w-1/3">
          <img 
            src="/logo.png" 
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8 float-left"
          />
        </div>

        {/* Text  */}
        
        <div className="w-full md:w-2/3 text-justify">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our company! We are a team of passionate individuals who strive to provide top-notch services to our customers. Our journey began with a simple idea and has since evolved into a thriving business. With years of experience and expertise in the industry, we are committed to delivering the best solutions to our clients.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our core values are integrity, innovation, and excellence. We believe in building long-lasting relationships with our clients by providing exceptional value and support. Our team works collaboratively to bring creative ideas to life and deliver outstanding results that exceed expectations.
          </p>
          <p className="text-lg text-gray-700">
            Join us on our mission to create a better future through innovation and dedication. We are excited to continue growing and making a positive impact on the world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
