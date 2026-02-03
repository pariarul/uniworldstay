'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, Home, Building2, Info, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // WhatsApp info
  const phoneNumber = '919613333393';
  const message = 'Hello, I want to know more details';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Properties', href: '/properties', icon: Building2 },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact Us', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/company_logo.png"
                alt="Uniworldstay Logo"
                width={200}
                height={400}
                priority
                className="h-15 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-green-600 shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden text-slate-700">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Drawer ===== */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="relative w-[75%] max-w-sm h-full bg-slate-50 shadow-xl flex flex-col"
            >
              {/* Header with Logo */}
              <div className="flex items-center justify-between px-5 py-4 bg-white ">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/company_logo.png"
                    alt="Uniworldstay Logo"
                    width={140}
                    height={36}
                    className="h-20 w-auto object-contain"
                  />
                </Link>
                <button onClick={() => setIsOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-4 py-6 space-y-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        flex items-center gap-4
                        bg-white rounded-2xl px-4 py-4
                        shadow-sm hover:shadow-md transition
                      "
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <span className="font-semibold text-slate-800">{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-4 bg-white border-t">
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-3
                    bg-green-500 text-white py-4 rounded-2xl
                    font-bold shadow-lg active:scale-95 transition
                  "
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-xs text-slate-400 mt-3">
                  WhatsApp No: <strong>96133 33393</strong>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
