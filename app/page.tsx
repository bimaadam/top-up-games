import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Alert from '@/components/Alert';
import Form1 from '@/components/Form1';

const Homepage = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Alert />
      <Banner />
      <Hero />
      <Menu />
      <Form1 />
      <Footer />
    </div>
  );
};

export default Homepage;

