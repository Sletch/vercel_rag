import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Demo from '../components/sections/Demo';
import Contact from '../components/sections/Contact';
import Loader from '../components/ui/Loader';
import ErrorBoundary from '../components/common/ErrorBoundary';
import ParticleBackground from '../components/common/ParticleBackground';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setLoading(false), 2000);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <ErrorBoundary>
      <div className="bg-gray-900 min-h-screen text-gray-100">
        <Head>
          <title>RAG Solutions - Future of AI in Africa</title>
          <meta name="description" content="Secure, Offline RAG Systems for South Africa" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence>
          {loading ? (
            <Loader key="loader" />
          ) : (
            <motion.div
              key="content"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Navigation />
              <main className="container mx-auto px-4 max-w-6xl">
                <Hero />
                <About scrollY={scrollY} />
                <Services scrollY={scrollY} />
                <Demo scrollY={scrollY} />
                <Contact scrollY={scrollY} />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
        <ParticleBackground />
      </div>
    </ErrorBoundary>
  );
}