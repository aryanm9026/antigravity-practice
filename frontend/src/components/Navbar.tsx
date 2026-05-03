import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
      <Link to="/" className="text-2xl font-bold tracking-widest">
        ANO.
      </Link>
      <div className="flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
        <Link to="/products" className="hover:opacity-70 transition-opacity">Collection</Link>
        <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
