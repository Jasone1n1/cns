'use client';

import ApplyButton from '@/components/share/Apply-BT';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/apply-now' },
];

function handleApplyClick() {
  window.location.href = '/apply-now';
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;
    const el = navRef.current;

    el.style.opacity = '0';
    el.style.transform = 'translateY(-12px)';

    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="backdrop-blur-md bg-white/90 md:bg-white/40 border border-white/30 shadow-lg
      rounded-2xl md:rounded-full
      px-4 sm:px-6 md:px-8
      py-2 sm:py-3
      w-[95%] max-w-7xl
      mx-auto
      mt-3 sm:mt-4
      fixed top-0 left-0 right-0
      z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between gap-3">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="CASHNET USA home"
        >
          <Image
            src="/images/icons/png/cashnetusa-logo.png"
            alt="logo"
            width={120}
            height={60}
            className="w-24 sm:w-28 md:w-32 h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name.toLowerCase())}
              className={`text-[15px] lg:text-base font-medium transition-colors
              hover:text-[#007BFF]
              ${activeLink === link.name.toLowerCase()
                  ? 'text-[#007BFF]'
                  : 'text-gray-800'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <ApplyButton
            label="Apply Now"
            onClick={handleApplyClick}
            className="shrink-0"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300
            ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 my-1 transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-[2px] bg-gray-800 transition-all duration-300
            ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1 pt-4 pb-2 border-t border-gray-200 mt-3">

              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(link.name.toLowerCase())}
                    className={`block py-3 px-4 rounded-lg text-base font-medium transition
                    ${activeLink === link.name.toLowerCase()
                        ? 'text-[#007BFF] bg-blue-50'
                        : 'text-gray-800 hover:bg-gray-100'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              <li className="pt-2">
                <ApplyButton
                  label="Apply Now"
                  onClick={() => {
                    handleApplyClick();
                    setMenuOpen(false);
                  }}
                  className="w-full justify-center"
                />
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
