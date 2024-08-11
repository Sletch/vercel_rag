import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FuturisticButton from './FuturisticButton';

const AIDemo = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResponse(`Analysis complete. Based on "${query}", our RAG system suggests optimizing your data pipeline for improved efficiency and implementing a custom NLP model for more accurate sentiment analysis.`);
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-4">AI Demo: Ask our RAG System</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your business query..."
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
        />
        <FuturisticButton type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </FuturisticButton>
      </form>
      {response && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-4 bg-gray-700 rounded text-white"
        >
          <h4 className="font-bold mb-2">AI Response:</h4>
          <p>{response}</p>
        </motion.div>
      )}
    </div>
  );
};

export default AIDemo;