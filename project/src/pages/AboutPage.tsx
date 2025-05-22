import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';
import { Link } from 'react-router-dom';
import { ChevronRight, Brain, Lightbulb, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About - ABTA';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
        <div className="container relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About ABTA
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ABTA is not just a platform. It's a mindset shift. We're building the foundation for Africa's technological revolution.
          </motion.p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                ABTA was founded on a simple yet powerful belief: <strong>"The mind is the first operating system."</strong>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We exist to help Africans build both mental and technical systems necessary to lead in the AI age. Our platform combines technological awareness with psychological development to create a holistic approach to Africa's digital transformation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Through education, community, and innovation, we're nurturing the next generation of African tech leaders who will shape the continent's future.
              </p>
            </motion.div>
            
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="African tech professionals" 
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide our mission and shape our approach to technological awareness in Africa."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mind First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe that technological advancement begins with mental models. Before code comes mindset. We focus on developing the cognitive frameworks necessary for innovation.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Accessible Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Technology should be demystified. We break down complex concepts into accessible learning paths, ensuring everyone can participate in the digital revolution.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Africa-First Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our solutions are built with African contexts and challenges in mind. We believe in developing technological awareness that is relevant to the continent's unique opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="section bg-primary-50 dark:bg-primary-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader 
              title="Our Vision for Africa" 
              centered
            />
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              We envision an Africa where technological awareness is widespread, where innovation flows from village to metropolis, and where Africans don't just consume technology but create it.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              By 2030, we aim to have empowered over 1 million Africans with the technological knowledge and mindset needed to lead in a digital world. Africa is not behind — it is awakening.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/community" className="btn-primary inline-flex items-center">
                Join Our Movement
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="bg-primary-600 text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-lg mb-8">
                Whether you're a tech enthusiast, a professional, or simply curious about the future of technology in Africa, there's a place for you in our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/newsletter" className="btn bg-white text-primary-700 hover:bg-gray-100">
                  Subscribe to Newsletter
                </Link>
                <Link to="/community" className="btn border-2 border-white hover:bg-white/10">
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;