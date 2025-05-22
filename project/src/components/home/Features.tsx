import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Users, 
  BookOpen, 
  MessageSquare 
} from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="card flex flex-col items-center text-center h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-5 p-4 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb size={28} />,
      title: "AI Knowledge Hub",
      description: "Access curated resources, insights, and tools that demystify artificial intelligence and its applications in the African context.",
    },
    {
      icon: <Users size={28} />,
      title: "Community Network",
      description: "Connect with like-minded individuals across Africa who are passionate about leveraging technology for growth and innovation.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Daily Tech Insights",
      description: "Stay informed with our daily newsletter featuring the latest technological developments relevant to the African landscape.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "AI-Powered Assistance",
      description: "Get personalized guidance from our AI assistant to navigate your technological awareness journey.",
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionHeader 
          title="What We Offer" 
          subtitle="Explore the tools and resources that ABTA provides to empower your technological journey."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;