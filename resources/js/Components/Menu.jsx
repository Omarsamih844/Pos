import React, { useState } from 'react';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {menuData.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-white hover:bg-gray-50'
            } shadow-md`}
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-sm mt-2">
              {category.products.length} produits disponibles
            </p>
          </div>
        ))}
      </div>

      {/* Products List */}
      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            {menuData.find((cat) => cat.id === selectedCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuData
              .find((cat) => cat.id === selectedCategory)
              ?.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-primary font-bold">
                      {product.price.toFixed(2)} €
                    </p>
                    <button
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                      onClick={() => {
                        // Add to cart functionality here
                        console.log('Add to cart:', product);
                      }}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu; 