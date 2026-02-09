"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/scroll-reveal';

const FinalCTA: React.FC = () => {
  return (
    <section 
      className="w-full py-[100px] md:py-[120px] px-6 flex flex-col items-center justify-center bg-white"
      id="final-cta"
    >
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">
        <ScrollReveal>
          <h2 
            className="font-display font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-[#000000] mb-4"
          >
            Begin Your Journey in <span className="text-[#0056E0]">Hospital Administration</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p 
            className="font-sans text-[18px] md:text-[20px] text-[#4A5568] mb-10"
          >
            Government Approved Certification. Professional Healthcare Training.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.a 
            href="#faq"
            className="inline-flex items-center justify-center bg-[#0F172A] text-white font-semibold text-[18px] px-12 py-5 rounded-[50px] transition-all duration-200 hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-[#0056E0] focus:ring-offset-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply for Admission
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
