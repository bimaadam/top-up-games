'use client';
import '@splidejs/react-splide/css'; // Default style
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Bannerimages } from '../lib/data'; // Import data

const Banner = () => {
  return (
    <div>
      <Splide
        options={{
          type: 'loop', // Slide akan terus berputar
          autoplay: true, // Slide otomatis berpindah
          interval: 3000, // Durasi antar slide (ms)
          perPage: 1, // Satu slide per halaman
          arrows: false, // Menampilkan panah navigasi
          pagination: true, // Menampilkan indikator di bawah slide
          drag: true, // Memungkinkan user drag slide
          lazyLoad: 'sequential', // Lazy loading untuk optimasi
        }}
        aria-label="RB GAMES"
      >
        {Bannerimages.map((image) => (
          <SplideSlide key={image.id}>
            <div className="relative">
              {/* Gambar Banner dengan batasan ukuran */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-96 mt-20"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Banner;
