import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../data/servicesData';

const Services = ({ scrollY }) => {
  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollY > 400 ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Futuristic Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;