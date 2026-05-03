import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const products = [
  { id: 1, name: 'The Essential Heavyweight', price: 85, color: 'Black', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, name: 'The Pure Cotton Tee', price: 95, color: 'White', image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, name: 'The Supima Classic', price: 110, color: 'Navy', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, name: 'The Oversized Drop', price: 120, color: 'Olive', image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, name: 'The Silk Blend', price: 145, color: 'Charcoal', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, name: 'The Linen Breeze', price: 130, color: 'Sand', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop' },
];

const Products = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Collection</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg">
            Impeccable craftsmanship. Unparalleled comfort. Explore our signature pieces designed to elevate your everyday wardrobe.
          </p>
        </header>

        <div className="flex justify-between items-center mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex gap-4">
            <button className="text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">All</button>
            <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Heavyweight</button>
            <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Lightweight</button>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">{product.color}</p>
                </div>
                <span className="font-medium">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
