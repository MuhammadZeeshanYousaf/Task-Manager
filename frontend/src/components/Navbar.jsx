import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-dark shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://preview.redd.it/hi-this-is-a-logo-for-the-task-manager-application-called-v0-si3hzlaglc7b1.png?width=640&crop=smart&auto=webp&s=04d231d246026a59f988ac183a82e0ea2ca8ef4e"
            alt="logo"
            className="h-10 w-15"
          />
          <span className="text-xl font-bold text-gray-800">Task Manager</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#features" className="text-gray-600 hover:text-gray-800">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
        </div>

        {/* Create New Button */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Create New
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
