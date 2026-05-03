import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          The Art of Simplicity.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          We believe that true luxury lies in the details. Our journey started with a single pursuit: to create the perfect t-shirt. No compromises, no shortcuts. Just exceptional materials, tailored fits, and timeless design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1000&q=80"
            alt="Craftsmanship"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6">Our Craft</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            Every thread is woven with purpose. We source the finest organic cotton and sustainable blends from ethical mills around the globe. Our silhouettes are obsessively refined to flatter every body type while ensuring maximum comfort.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            This isn't just clothing. It's an investment in pieces that will outlast trends and form the foundation of your modern wardrobe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
