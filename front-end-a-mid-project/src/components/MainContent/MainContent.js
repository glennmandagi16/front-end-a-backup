// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <main className="container mx-auto p-6">
      {/* Section Pengantar */}
      <section className="text-center my-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyBrand</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We provide exceptional services to help you achieve your goals. Our team is dedicated to delivering the best solutions for your needs.
        </p>
      </section>

      {/* Section Fitur atau Layanan */}
      <section className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fitur 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 1</h2>
          <p className="text-gray-600">
            Description of the first feature or service offered by the brand.
          </p>
        </div>

        {/* Fitur 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 2</h2>
          <p className="text-gray-600">
            Description of the second feature or service offered by the brand.
          </p>
        </div>

        {/* Fitur 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Feature 3</h2>
          <p className="text-gray-600">
            Description of the third feature or service offered by the brand.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
