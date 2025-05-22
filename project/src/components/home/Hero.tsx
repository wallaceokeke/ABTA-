import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import NewsletterForm from '../shared/NewsletterForm';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-10 z-0"></div>
      
      {/* Floating shapes */}
      <motion.div 
        className="absolute top-1/4 right-[10%] w-24 h-24 rounded-full bg-accent-gold opacity-20 dark:opacity-10 z-0"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-[15%] w-32 h-32 rounded-full bg-primary-500 opacity-10 dark:opacity-5 z-0"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Rooted in Africa,{' '}
              <span className="text-primary-600 dark:text-primary-400">Powered by AI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              Empowering the African mindset to lead the technological revolution through awareness, education, and community.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary flex items-center">
                Learn More
                <ChevronRight size={18} className="ml-1" />
              </Link>
              
              <Link to="/community" className="btn-outline">
                Join Our Community
              </Link>
            </div>
          </motion.div>
          
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-xl shadow-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <NewsletterForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;