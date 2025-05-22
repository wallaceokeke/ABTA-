import React, { useState } from 'react';
import { submitContactForm } from '../../services/supabase';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields.');
      return;
    }
    
    setStatus('loading');
    
    try {
      const result = await submitContactForm(name, email, message);
      
      if (result.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully. We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Your name"
          disabled={status === 'loading'}
        />
      </div>
      
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="your.email@example.com"
          disabled={status === 'loading'}
        />
      </div>
      
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input min-h-[120px]"
          placeholder="How can we help you?"
          disabled={status === 'loading'}
        />
      </div>
      
      <button
        type="submit"
        className={`btn-primary w-full ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      
      {status === 'success' && (
        <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
          {statusMessage}
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;