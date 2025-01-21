import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('')` }}>
      <div className="hero-overlay bg-opacity-50 bg-secondary"></div>
      <div className="hero-content flex-col lg:flex-row text-center lg:text-left text-white">
        {/* Gambar Samping */}
        <img
          src="assets/img/hero.jpg"
          className="max-w-sm w-64 rounded-lg shadow-2xl hidden lg:block"
          alt="Hero Image"
        />
        {/* Konten Text */}
        <div className="lg:ml-8">
          <h1 className="text-5xl font-bold mb-4">Top-Up Game Cepat & Mudah!</h1>
          <p className="mb-6 text-lg">
            Nikmati promo spesial dan diskon menarik setiap hari. Top up game favoritmu dengan harga murah dan proses cepat!
          </p>
          {/* Tombol CTA */}
          <Link href='#menu'>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary btn-lg rounded-full px-8">Top Up Sekarang 🚀</motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
