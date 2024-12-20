import React from 'react';
import logoImg from '../assets/logo.svg';
const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-center">
          {/* Logo Container */}
          <div className="relative">
            
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 relative z-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;