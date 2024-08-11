import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FuturisticButton from '../ui/FuturisticButton';

const Hero = () => {
  return (
    <motion.section 
      id="hero" 
      className="h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-6xl font-bold mb-4 text-white"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        RAG Solutions
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8 text-gray-300"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Powering Africa's AI Revolution
      </motion.p>
      <FuturisticButton>Explore Our Solutions</FuturisticButton>
      <motion.div 
        className="mt-16"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;