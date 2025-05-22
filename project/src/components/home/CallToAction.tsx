import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-700 opacity-90 z-0"></div>
      
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 bg-pattern-dark opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Join Africa's Technological Revolution?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The future of African technology begins with awareness. Start your journey with ABTA today.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/newsletter" className="btn bg-white text-primary-800 hover:bg-gray-100 w-full sm:w-auto">
              Subscribe to Newsletter
            </Link>
            
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10 flex items-center w-full sm:w-auto">
              <Mail size={18} className="mr-2" />
              Contact Us
            </Link>
            
            <Link to="/about" className="text-white hover:text-gray-200 flex items-center mt-4 sm:mt-0">
              Learn More
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;