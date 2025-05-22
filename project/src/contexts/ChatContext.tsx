import React, { createContext, useContext, useState } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  isOpen: boolean;
  addMessage: (text: string, isUser: boolean) => void;
  toggleChat: () => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Predefined responses for the AI assistant
const RESPONSES: { [key: string]: string } = {
  GREETING: "Hello! I'm ABTA's digital assistant. How can I help you learn about African-Based Technological Awareness today?",
  ABOUT: "ABTA is a platform dedicated to empowering Africans with AI knowledge, tools, mentorship, and community. Our belief is that 'the mind is the first operating system' and we aim to help Africans build mental and technical systems to lead in the AI age.",
  NEWSLETTER: "Our daily newsletter provides the latest tech insights and AI developments with an African perspective. You can subscribe on our Newsletter page!",
  COMMUNITY: "We have several community platforms where you can connect with like-minded individuals. You can join our WhatsApp group, Telegram channel, or WhatsApp channel. Check our Community page for links!",
  FALLBACK: "I'd love to help further, but this sounds like a question best answered by our founder. Please reach out directly at okekewallace@gmail.com."
};

// Helper function to generate responses based on user input
const generateResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return RESPONSES.GREETING;
  } else if (lowerMessage.includes('about') || lowerMessage.includes('what is abta') || lowerMessage.includes('purpose')) {
    return RESPONSES.ABOUT;
  } else if (lowerMessage.includes('newsletter') || lowerMessage.includes('news') || lowerMessage.includes('subscribe')) {
    return RESPONSES.NEWSLETTER;
  } else if (lowerMessage.includes('community') || lowerMessage.includes('join') || lowerMessage.includes('whatsapp') || lowerMessage.includes('telegram')) {
    return RESPONSES.COMMUNITY;
  } else {
    return RESPONSES.FALLBACK;
  }
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: RESPONSES.GREETING,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // If it's a user message, generate a response
    if (isUser) {
      setTimeout(() => {
        const responseText = generateResponse(text);
        const responseMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: RESPONSES.GREETING,
        isUser: false,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, isOpen, addMessage, toggleChat, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};