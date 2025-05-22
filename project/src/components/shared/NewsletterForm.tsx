import React, { useState } from 'react';
import { subscribeToNewsletter } from '../../services/supabase';

interface NewsletterFormProps {
  className?: string;
  buttonText?: string;
  subtitle?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  className = '', 
  buttonText = 'Subscribe',
  subtitle = 'Join our daily newsletter for the latest tech insights.'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setStatus('error');
      setMessage('Please fill in all fields.');
      return;
    }
    
    setStatus('loading');
    
    try {
      const result = await subscribeToNewsletter(name, email);
      
      if (result.success) {
        setStatus('success');
        setMessage("You're now part of the tech awakening. Stay tuned for daily insights.");
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={className}>
      {subtitle && <p className="text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Your name"
            disabled={status === 'loading'}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="your.email@example.com"
            disabled={status === 'loading'}
          />
        </div>
        
        <button
          type="submit"
          className={`btn-primary w-full ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {status === 'success' && (
        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
          {message}
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;