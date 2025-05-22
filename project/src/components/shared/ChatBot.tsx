import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot: React.FC = () => {
  const { messages, isOpen, addMessage, toggleChat } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input, true);
      setInput('');
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all transform hover:scale-105"
        aria-label="Toggle chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-96 rounded-xl shadow-xl overflow-hidden flex flex-col bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700"
          >
            {/* Chat header */}
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageSquare size={20} />
                <h3 className="font-medium">ABTA Assistant</h3>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 flex">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-800 dark:text-gray-100"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-primary-600 text-white py-2 px-4 rounded-r-lg hover:bg-primary-700 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;