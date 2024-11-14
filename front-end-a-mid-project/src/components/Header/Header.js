// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          {/* Logo atau Nama Brand */}
          <a href="/" className="hover:text-blue-200">MyBrand</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-200">Halaman Depan</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200">Tentang</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
