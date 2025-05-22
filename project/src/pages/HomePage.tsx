import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import NewsPreview from '../components/home/NewsPreview';
import CommunityPreview from '../components/home/CommunityPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'ABTA - African-Based Technological Awareness';
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <NewsPreview />
      <CommunityPreview />
      <CallToAction />
    </div>
  );
};

export default HomePage;