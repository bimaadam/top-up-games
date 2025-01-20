'use client'

import { diamonds } from '../../lib/data';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Navbar from '@/components/Navbar';
import React from 'react';


const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted');
};

const PilihItem = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <div className='justify-center mt-20'>
      <h1 className="text-accent text-center text-2xl bg-secondary py-4">
        Pilih Diamond dan Masukkan Detail
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {/* List Diamond */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {diamonds.map((diamond) => (
            <div
              key={diamond.id}
              className="card bg-base-300 p-4 rounded-lg shadow-lg hover:bg-base-200"
            >
              <img
                src="assets/icon/dm.svg"
                alt="Diamond icon"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-center">{diamond.amount}</h2>
              <p className="text-center text-lg text-accent">{diamond.price}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PilihItem;
