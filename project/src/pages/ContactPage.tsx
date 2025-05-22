import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import ContactForm from '../components/shared/ContactForm';
import SectionHeader from '../components/shared/SectionHeader';

const ContactPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Contact - ABTA';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions, feedback, or want to collaborate? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="card mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Email</h4>
                      <a 
                        href="mailto:okekewallace@gmail.com"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        okekewallace@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Need something personal? Email Wallace directly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4">
                      <MessageSquare size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Community</h4>
                      <p className="mb-2">
                        Join our community platforms for quicker responses and to connect with other members.
                      </p>
                      <div className="flex space-x-4">
                        <a 
                          href="https://chat.whatsapp.com/K3RTcYIiSf07RdJC5moCdq" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                        >
                          WhatsApp
                        </a>
                        <a 
                          href="https://t.me/ForexRiseHub" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card bg-primary-600 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="mb-4">
                  "We believe that the mind is the first operating system. Our mission is to help Africans build both mental and technical systems necessary to lead in the AI age."
                </p>
                <p className="italic">
                  — ABTA Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeader 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about ABTA."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-bold mb-2">What is ABTA?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  ABTA (African-Based Technological Awareness) is a platform dedicated to empowering Africans with AI knowledge, tools, mentorship, and community. We focus on developing both the mindset and technical skills needed for innovation.
                </p>
              </motion.div>
              
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-2">How can I join the ABTA community?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  You can join our community through any of our platforms: WhatsApp Group, Telegram Channel, or WhatsApp Channel. Links to all these platforms are available on our Community page.
                </p>
              </motion.div>
              
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-2">Is the newsletter free?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, our daily tech newsletter is completely free. It provides valuable insights into AI, technology, and innovation with an African perspective, delivered directly to your inbox.
                </p>
              </motion.div>
              
              <motion.div 
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-2">How can I collaborate with ABTA?</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We're open to collaborations that align with our mission of empowering Africans through technological awareness. Please reach out to us through the contact form or email us directly at okekewallace@gmail.com to discuss potential partnerships.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;