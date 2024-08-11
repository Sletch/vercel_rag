import React from 'react';
import { motion } from 'framer-motion';
import AIDemo from '../ui/AIDemo';
import PerformanceChart from '../charts/PerformanceChart';

const Demo = ({ scrollY }) => {
  return (
    <motion.section 
      id="demo" 
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollY > 800 ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience RAG in Action</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AIDemo />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Performance Metrics</h3>
            <PerformanceChart />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Demo;