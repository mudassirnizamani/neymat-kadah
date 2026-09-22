import { useState, useEffect } from "react";


import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { businessConfig } from '../../data/config';
import { cn } from '../../utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    // using setTimeout to avoid warning since we just want to close the menu on route change
    setTimeout(() => setIsOpen(false), 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'For Offices', path: '/offices' },
    { name: 'For Hostels', path: '/hostels' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-nk-surface/95 backdrop-blur-sm border-nk-border py-4'
          : 'bg-nk-bg border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-semibold text-nk-text-primary">
            {businessConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-nk-accent',
                  location.pathname === link.path ? 'text-nk-accent' : 'text-nk-text-secondary'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-nk-text-primary text-nk-surface rounded-md text-sm font-medium hover:bg-nk-text-primary/90 transition-colors"
            >
              Order / Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-nk-text-primary hover:text-nk-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-nk-surface border-b border-nk-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-lg font-medium py-2',
                location.pathname === link.path ? 'text-nk-accent' : 'text-nk-text-secondary'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full text-center px-5 py-3 bg-nk-text-primary text-nk-surface rounded-md text-base font-medium hover:bg-nk-text-primary/90 transition-colors mt-4"
          >
            Order / Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};
