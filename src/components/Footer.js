import React from 'react';
import logoImg from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <img src={logoImg} alt="Logo" className="h-10" />
            
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;