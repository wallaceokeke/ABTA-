import React from 'react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  published_at: string;
  image_url?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="card h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      {news.image_url && (
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img 
            src={news.image_url} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      <div className="flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {formatDate(news.published_at)}
        </p>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {news.excerpt}
        </p>
      </div>
      
      <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
        Read More
      </button>
    </div>
  );
};

export default NewsCard;