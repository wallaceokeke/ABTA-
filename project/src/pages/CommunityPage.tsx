import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Users, Share2, Globe } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';

interface CommunityPlatformProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  buttonText: string;
  members?: string;
  delay: number;
}

const CommunityPlatform: React.FC<CommunityPlatformProps> = ({ 
  icon, title, description, link, buttonText, members, delay 
}) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>
      
      {members && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center">
          <Users size={16} className="mr-2" />
          {members} members
        </p>
      )}
      
      <a 
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-primary w-full text-center"
      >
        {buttonText}
      </a>
    </motion.div>
  );
};

const CommunityPage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Community - ABTA';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Community
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Connect with like-minded individuals across Africa who are passionate about technological growth and innovation.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Community Platforms Section */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Our Community Platforms" 
            subtitle="Join us on platforms where we grow together."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CommunityPlatform 
              icon={<MessageCircle size={24} />}
              title="WhatsApp Group"
              description="Join our active WhatsApp group for daily discussions, resource sharing, and community support. Connect directly with fellow members and get real-time updates."
              link="https://chat.whatsapp.com/K3RTcYIiSf07RdJC5moCdq"
              buttonText="Join WhatsApp Group"
              members="500+"
              delay={0}
            />
            
            <CommunityPlatform 
              icon={<Send size={24} />}
              title="Telegram Channel"
              description="Subscribe to our Telegram channel for curated content, announcements, and technological insights. Perfect for those who prefer a more streamlined information flow."
              link="https://t.me/ForexRiseHub"
              buttonText="Join Telegram Channel"
              members="1,200+"
              delay={0.1}
            />
            
            <CommunityPlatform 
              icon={<MessageCircle size={24} />}
              title="WhatsApp Channel"
              description="Follow our WhatsApp channel for broadcast updates and important announcements. Stay in the loop with minimal notification noise."
              link="https://whatsapp.com/channel/0029Vb5wi9TBFLgS84b8qa1B"
              buttonText="Join WhatsApp Channel"
              members="750+"
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* Community Benefits Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeader 
            title="Why Join Our Community?" 
            subtitle="Being part of the ABTA community offers numerous benefits for your technological journey."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-4">
                <Share2 size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access a wealth of shared resources, experiences, and insights from community members across different technological domains and skill levels.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card flex"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mr-4">
                <Users size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Network Building</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect with peers, mentors, and industry professionals who share your passion for technology and innovation in an African context.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mr-4">
                <Globe size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover collaboration opportunities, job openings, events, and initiatives that can accelerate your technological growth and career.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card flex"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mr-4">
                <MessageCircle size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Support System</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get assistance with technical challenges, career advice, and guidance from a supportive community that wants to see you succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Community Guidelines Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader 
              title="Community Guidelines" 
              subtitle="To ensure a positive and productive experience for all members, we ask that you follow these guidelines:"
              centered
            />
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-primary-600 dark:text-primary-400 mr-2">1.</span>
                  <p><strong>Respect All Members:</strong> Treat everyone with courtesy and respect, regardless of background, experience level, or viewpoint.</p>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary-600 dark:text-primary-400 mr-2">2.</span>
                  <p><strong>Share Value:</strong> Focus on sharing insights, resources, and questions that add value to the community.</p>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary-600 dark:text-primary-400 mr-2">3.</span>
                  <p><strong>No Spam:</strong> Avoid excessive self-promotion or irrelevant content that doesn't serve the community's purpose.</p>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary-600 dark:text-primary-400 mr-2">4.</span>
                  <p><strong>Protect Privacy:</strong> Don't share personal information about yourself or others without explicit consent.</p>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary-600 dark:text-primary-400 mr-2">5.</span>
                  <p><strong>Constructive Communication:</strong> When providing feedback or engaging in discussions, be constructive and solution-oriented.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8">
              Choose any of our platforms and start connecting with fellow tech enthusiasts across Africa today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://chat.whatsapp.com/K3RTcYIiSf07RdJC5moCdq"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Group
              </a>
              <a 
                href="https://t.me/ForexRiseHub"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Send size={18} className="mr-2" />
                Telegram Channel
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vb5wi9TBFLgS84b8qa1B"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Channel
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;