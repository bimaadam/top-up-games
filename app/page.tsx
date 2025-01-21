'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Alert from '@/components/Peringatan';
import Form1 from '@/components/Form1';

const Homepage = () => {
  const transition = { duration: 0.8, ease: 'easeInOut' }; // Properti transition global

  return (
    <motion.div
      className="bg-secondary min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      {/* NVABAR */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={transition}
      >
        <Navbar />
      </motion.div>
      {/* ALERTT */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={transition}
      >
        <Alert />
      </motion.div>
      {/* BANNER */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={transition}
      >
        <Banner />
      </motion.div>
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <Hero />
      </motion.div>
      {/* MENU */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={transition}
      >
        <Menu />
      </motion.div>
      {/* FORM1 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={transition}
      >
        <Form1 />
      </motion.div>
      {/* FOOTER */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={transition}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
