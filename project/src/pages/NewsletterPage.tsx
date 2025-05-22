import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';
import NewsletterForm from '../components/shared/NewsletterForm';
import NewsCard from '../components/shared/NewsCard';
import { fetchLatestNews } from '../services/supabase';

// Mock news data (would be replaced with actual data from Supabase)
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
  },
  {
    id: '4',
    title: 'Machine Learning Models Trained on African Languages Show Promising Results',
    excerpt: 'New research demonstrates improved performance in NLP models specifically trained on diverse African linguistic datasets.',
    published_at: '2023-03-28T13:45:00Z',
    image_url: 'https://images.pexels.com/photos/7256347/pexels-photo-7256347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Solar-Powered Tech Hubs Expand Across Rural Communities',
    excerpt: 'Innovative solar solutions are bringing technology access to areas previously limited by unreliable power infrastructure.',
    published_at: '2023-03-22T10:30:00Z',
    image_url: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'African Governments Collaborate on Continental Data Protection Framework',
    excerpt: 'A new initiative aims to standardize data protection and privacy regulations across African nations to support the digital economy.',
    published_at: '2023-03-15T16:20:00Z',
    image_url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const NewsletterPage: React.FC = () => {
  const [news, setNews] = useState(mockNews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set page title
  useEffect(() => {
    document.title = 'Newsletter - ABTA';
  }, []);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      
      try {
        const result = await fetchLatestNews(6);
        
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

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tech News & Newsletter
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay informed with daily insights on AI, technology, and innovation with an African perspective.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-card rounded-xl p-6 text-left"
            >
              <h3 className="text-primary-800 dark:text-primary-400 text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <NewsletterForm 
                subtitle="Get daily tech updates delivered directly to your inbox."
                buttonText="Subscribe Now"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Latest Tech News" 
            subtitle="Explore the latest technological developments and insights from Africa and beyond."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <NewsCard news={item} />
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Pagination for future implementation */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Previous</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card text-primary-600 dark:text-primary-400 font-medium">1</a>
              <a href="#" className="px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">2</a>
              <a href="#" className="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">Next</a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeader 
            title="Why Subscribe?" 
            subtitle="Our newsletter offers unique insights you won't find elsewhere."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-3">African Perspective</h3>
              <p className="text-gray-600 dark:text-gray-300">
                News and analysis filtered through an African lens, focusing on relevance to the continent.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">AI Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deep dives into artificial intelligence trends, technologies, and applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-3">Practical Tips</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Actionable advice for leveraging technology in various sectors and businesses.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3">Community Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay connected with our growing community of tech enthusiasts across Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterPage;