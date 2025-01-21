'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Peringatan = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-4 py-2 sm:px-8 sm:py-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="alert alert-info flex items-center gap-2 px-4 py-2 rounded-lg shadow-md sm:max-w-lg sm:mx-auto bg-blue-100 text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text text-sm sm:text-base">
          Website masih dalam tahap pengembangan oleh Bimaadam.
        </span>
      </motion.div>
    </div>
  );
};

export default Peringatan;
