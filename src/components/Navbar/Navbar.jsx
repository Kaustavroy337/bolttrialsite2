import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
          <Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-secondary rounded-md">Home</Link>
            <Link to="/services" className="block px-3 py-2 hover:bg-secondary rounded-md">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 hover:bg-secondary rounded-md">Portfolio</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-secondary rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}