"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-50 w-full glassmorphism border-b border-[#E2E8F0]"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/OYJ4kUke4gSpYhDkj5FejExce8-8.png"
              alt="Edusource HRD Centre Logo"
              width={160}
              height={32}
              className="h-8 object-contain"
              priority
            />
          </a>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center bg-[#F1F4F9] rounded-full px-1.5 py-1.5 gap-1">
          <a
            href="#hero"
            className="px-6 py-2 text-[14px] font-medium transition-colors rounded-full hover:text-[#0056E0]"
          >
            Home
          </a>
          <a
            href="#features"
            className="px-6 py-2 text-[14px] font-medium bg-white text-[#0056E0] shadow-sm transition-colors rounded-full"
          >
            Course
          </a>
          <a
            href="#highlights"
            className="px-6 py-2 text-[14px] font-medium transition-colors rounded-full hover:text-[#0056E0]"
          >
            About
          </a>
          <a
            href="#faq"
            className="px-6 py-2 text-[14px] font-medium transition-colors rounded-full hover:text-[#0056E0]"
          >
            FAQ
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="#faq"
            className="text-[14px] font-semibold text-[#0F172A] hover:text-[#0056E0] transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#final-cta"
            className="bg-[#0056E0] text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Apply Now
          </a>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="p-2 text-[#0F172A]">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
