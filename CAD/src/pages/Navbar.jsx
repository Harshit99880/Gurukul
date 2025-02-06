import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-500 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo  */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
        
        
        <div className="hidden md:block text-white text-lg font-semibold">CAD Gurukul</div>
        
        
        <div className="hidden md:flex space-x-6">
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            Home
          </button>
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            About
          </button>
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            Contact
          </button>
        </div>
        
        {/* Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 p-4 bg-green-500">
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            Home
          </button>
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            About
          </button>
          <button className="text-white px-4 py-2 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 rounded-lg transition duration-200">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
