import React from 'react';
import AnoAI from '@/components/ui/animated-shader-background';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center items-center text-white">
      {/* 3D Animated Background */}
      <AnoAI />

      {/* Main Content Overlay */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Redefining Luxury T-Shirts
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
          Discover a collection where minimalist design meets uncompromising quality. Experience the perfect fit tailored for the modern individual.
        </p>
        
        <div className="flex gap-4 flex-col sm:flex-row">
          <Link
            to="/products"
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-200 hover:scale-105"
          >
            Shop Collection
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-white/10"
          >
            Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
