'use client';

import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Darshan', href: '#darshan' },
    { label: 'Pooja', href: '#pooja' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-divine-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <Flame className="w-8 h-8 text-sacred-orange animate-flame" />
            <span className="text-xl md:text-2xl font-bold divine-text text-gradient-gold group-hover:scale-105 transition-transform">
              Vadakkumpuram Temple
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-300 hover:text-divine-gold transition-colors duration-300 sacred-text font-semibold relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-divine-gold group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-divine-gold to-sacred-orange text-black font-bold divine-text rounded-full hover:scale-105 transition-transform duration-300"
          >
            <Flame className="w-4 h-4" />
            Visit Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
