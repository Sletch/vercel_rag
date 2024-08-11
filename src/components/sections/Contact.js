import React from 'react';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../common/Alert';
import FuturisticButton from '../ui/FuturisticButton';

const Contact = ({ scrollY }) => {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollY > 1200 ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to revolutionize your AI capabilities? Our team of experts is here to guide you through the future of AI in Africa.
        </p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <FuturisticButton>Contact Us</FuturisticButton>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Contact RAG Solutions</AlertDialogTitle>
              <AlertDialogDescription>
                Our team will get back to you within 24 hours to discuss your AI needs.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Send Message</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </motion.section>
  );
};

export default Contact;