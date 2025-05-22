import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchLatestNews } from '../../services/supabase';
import SectionHeader from '../shared/SectionHeader';
import NewsCard from '../shared/NewsCard';

// Mock news data for preview (would be replaced with actual data from Supabase)
const mockNews = [
  {
    id: '1',
    title: 'The Rise of AI in African Healthcare Systems',
    excerpt: 'How artificial intelligence is transforming healthcare delivery across the continent, from rural clinics to urban hospitals.',
    published_at: '2023-04-15T09:00:00Z',
    image_url: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Bridging the Digital Divide: Internet Access Initiatives in East Africa',
    excerpt: 'New programs aim to bring high-speed internet to remote communities, opening doors to education and economic opportunities.',
    published_at: '2023-04-10T14:30:00Z',
    image_url: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'African Tech Startups Secure Record Funding Despite Global Downturn',
    excerpt: 'Against global trends, African tech startups have secured unprecedented levels of funding, particularly in fintech and agritech sectors.',
    published_at: '2023-04-05T11:15:00Z',
    image_url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const NewsPreview: React.FC = () => {
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      
      try {
        const result = await fetchLatestNews(3);
        
        if (result.success && result.data.length > 0) {
          setNews(result.data);
        }
      } catch (err) {
        setError('Failed to load latest news.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Uncomment this when Supabase is set up
    // getNews();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeader 
          title="Latest Tech News" 
          subtitle="Stay informed with the latest technological developments and insights from Africa and beyond."
          centered
        />
        
        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-600 dark:text-red-400 py-8">
            {error}
          </div>
        )}
        
        {!loading && !error && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {news.map((item) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <NewsCard news={item} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <div className="text-center mt-12">
          <Link to="/newsletter" className="btn-outline inline-flex items-center">
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;