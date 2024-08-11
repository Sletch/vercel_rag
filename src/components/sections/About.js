import React from 'react';
import { motion } from 'framer-motion';

const About = ({ scrollY }) => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollY > 200 ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">About RAG Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 mb-4">
              RAG Solutions is at the forefront of AI innovation in Africa. We specialize in Retrieval Augmented Generation (RAG) systems that are secure, offline, and compliant with South African data regulations.
            </p>
            <p className="text-gray-300 mb-4">
              Our mission is to empower businesses and organizations across the continent with cutting-edge AI solutions that remain operational even during load shedding, ensuring uninterrupted service and data security.
            </p>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-300">
              <li>Pioneering local, offline AI systems</li>
              <li>Tailored solutions for African businesses</li>
              <li>Advanced data science and analytics</li>
              <li>Commitment to data privacy and security</li>
              <li>Innovative approach to AI in challenging environments</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;