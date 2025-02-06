import React from 'react';
import { FaBrain, FaRegFrown, FaSmile, FaBed, FaMedapps, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  { 
    title: "Enhanced mental focus and clarity", 
    icon: <FaBrain className="text-blue-500 text-3xl" />
  },
  { 
    title: "Reduction in stress and anxiety", 
    icon: <FaRegFrown className="text-red-500 text-3xl" />
  },
  { 
    title: "Improved cognitive health", 
    icon: <FaBrain className="text-green-500 text-3xl" />
  },
  { 
    title: "Greater emotional stability", 
    icon: <FaSmile className="text-yellow-500 text-3xl" />
  },
  { 
    title: "Enhanced sleep quality", 
    icon: <FaBed className="text-purple-500 text-3xl" />
  },
  { 
    title: "Increased self-awareness and mindfulness", 
    icon: <FaMedapps className="text-teal-500 text-3xl" />
  },
  { 
    title: "Resilience to distractions", 
    icon: <FaShieldAlt className="text-indigo-500 text-3xl" />
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Benefits</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
            {benefit.icon}
            <p className="text-xl font-medium">{benefit.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
