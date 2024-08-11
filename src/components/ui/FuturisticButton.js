import React from 'react';
import { motion } from 'framer-motion';

const FuturisticButton = ({ children, onClick, disabled, type = 'button' }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      bg-gradient-to-r from-blue-500 to-purple-600 
      text-white font-bold py-2 px-6 rounded-full 
      shadow-lg hover:shadow-xl transition-all duration-300
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-purple-700'}
    `}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </motion.button>
);

export default FuturisticButton;