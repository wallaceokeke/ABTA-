import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../shared/Logo';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu') && 
          !(event.target as Element).closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = "relative font-medium px-3 py-2 text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors before:absolute before:left-0 before:bottom-0 before:h-1 before:w-0 before:bg-accent-gold before:transition-all hover:before:w-full";
  const navLinkActiveClasses = "text-primary-600 dark:text-primary-400 before:w-full";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-dark-bg/90 shadow-md backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <Logo size={40} />
          <span className="text-xl font-heading font-bold">ABTA</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? navLinkActiveClasses : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? navLinkActiveClasses : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/newsletter" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? navLinkActiveClasses : ''}`}
          >
            Newsletter
          </NavLink>
          <NavLink 
            to="/community" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? navLinkActiveClasses : ''}`}
          >
            Community
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `${navLinkClasses} ${isActive ? navLinkActiveClasses : ''}`}
          >
            Contact
          </NavLink>
        </nav>
        
        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className="menu-button md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-dark-bg shadow-xl transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-xl ${isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `text-xl ${isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/newsletter" 
              className={({ isActive }) => `text-xl ${isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Newsletter
            </NavLink>
            <NavLink 
              to="/community" 
              className={({ isActive }) => `text-xl ${isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-xl ${isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} ABTA
            </p>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;