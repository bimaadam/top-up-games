import React from 'react';

const Alert = () => {
  return (
    <div className="flex items-center justify-center px-4 py-2 sm:px-8 sm:py-4">
      <div
        role="alert"
        className="alert alert-info flex items-center gap-2 px-4 py-2 rounded-lg shadow-md sm:max-w-lg sm:mx-auto"
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
        <span className="text-sm sm:text-base">
          Website masih dalam tahap pengembangan.
        </span>
      </div>
    </div>
  );
};

export default Alert;
