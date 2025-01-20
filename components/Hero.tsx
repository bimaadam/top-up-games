import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('')` }}>
      <div className="hero-overlay bg-opacity-50 bg-secondary"></div>
      <div className="hero-content flex-col lg:flex-row text-center lg:text-left text-white">
        {/* Gambar Samping */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
          alt="Hero Image"
        />
        {/* Konten Text */}
        <div className="lg:ml-8">
          <h1 className="text-5xl font-bold mb-4">Top-Up Game Cepat & Mudah!</h1>
          <p className="mb-6 text-lg">
            Nikmati promo spesial dan diskon menarik setiap hari. Top up game favoritmu dengan harga murah dan proses cepat!
          </p>
          {/* Tombol CTA */}
          <button className="btn btn-primary btn-lg rounded-full px-8">Top Up Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
