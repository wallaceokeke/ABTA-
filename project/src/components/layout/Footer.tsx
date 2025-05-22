import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  MapPin 
} from 'lucide-react';
import Logo from '../shared/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size={32} />
              <span className="text-xl font-heading font-bold">ABTA</span>
            </div>
            <p className="text-gray-300 mb-4">
              Rooted in Africa, Powered by AI. Building mental and technical systems to lead the AI age.
            </p>
            <p className="italic text-accent-gold font-medium">
              "Africa is not behind — it is awakening."
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="text-lg font-bold mb-4">Join Our Community</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chat.whatsapp.com/K3RTcYIiSf07RdJC5moCdq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  WhatsApp Group
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/ForexRiseHub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  Telegram Channel
                </a>
              </li>
              <li>
                <a 
                  href="https://whatsapp.com/channel/0029Vb5wi9TBFLgS84b8qa1B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-gold transition-colors"
                >
                  WhatsApp Channel
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-accent-gold" />
                <a 
                  href="mailto:okekewallace@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  okekewallace@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent-gold" />
                <span className="text-gray-300">
                  African-Based Technological Awareness
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ABTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;