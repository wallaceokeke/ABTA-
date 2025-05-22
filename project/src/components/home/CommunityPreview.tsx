import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Users } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

interface CommunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  delay: number;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ 
  icon, title, description, link, linkText, delay 
}) => {
  return (
    <motion.div 
      className="card flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      
      <a 
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-outline text-center"
      >
        {linkText}
      </a>
    </motion.div>
  );
};

const CommunityPreview: React.FC = () => {
  const communities = [
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Group",
      description: "Join our active WhatsApp group for daily discussions, resource sharing, and community support.",
      link: "https://chat.whatsapp.com/K3RTcYIiSf07RdJC5moCdq",
      linkText: "Join WhatsApp Group"
    },
    {
      icon: <Send size={24} />,
      title: "Telegram Channel",
      description: "Subscribe to our Telegram channel for curated content, announcements, and technological insights.",
      link: "https://t.me/ForexRiseHub",
      linkText: "Join Telegram Channel"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Channel",
      description: "Follow our WhatsApp channel for broadcast updates and important announcements.",
      link: "https://whatsapp.com/channel/0029Vb5wi9TBFLgS84b8qa1B",
      linkText: "Join WhatsApp Channel"
    }
  ];

  return (
    <section className="section bg-primary-50 dark:bg-primary-950">
      <div className="container">
        <SectionHeader 
          title="Join Our Community" 
          subtitle="Connect with like-minded individuals across Africa who are passionate about technological growth and innovation."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <CommunityCard 
              key={index}
              icon={community.icon}
              title={community.title}
              description={community.description}
              link={community.link}
              linkText={community.linkText}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/community" className="btn-primary inline-flex items-center">
            <Users size={18} className="mr-2" />
            Explore All Communities
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPreview;