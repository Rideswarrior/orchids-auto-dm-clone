"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/scroll-reveal';

export default function TrustStats() {
  const metaBadgeIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/0ksg3sGuskAauQjFSBhqfuReY-2.png";

  return (
    <section 
      id="credibility" 
      className="w-full bg-white py-[60px] md:py-[80px]"
    >
      <div className="container max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 w-full">
            
            {/* Govt Approved Badge */}
            <motion.div 
              className="flex items-center gap-4 p-4 md:p-6 rounded-[24px] border border-[#e2e8f0] bg-white w-full max-w-[440px]"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-start min-w-fit">
                <div className="flex items-center gap-2 mb-1">
                  <Image 
                    src={metaBadgeIcon} 
                    alt="Edusource Logo" 
                    width={92} 
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="text-[14px] font-semibold text-[#000000]">Govt. Approved</span>
              </div>
              <div className="h-full w-[1px] bg-[#e2e8f0] mx-2 hidden sm:block"></div>
              <p className="text-[14px] leading-[1.4] text-[#4a5568] m-0">
                Edusource HRD Centre is a Government Approved training institute for healthcare administration.
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-12 md:gap-16 lg:gap-20 w-full lg:w-auto">
              
              {/* Stat Item 1 */}
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="mb-2 text-[#f1c40f]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">15+ Years</h3>
                  <p className="text-[14px] text-[#4a5568] m-0">Of Academic Excellence</p>
                </div>
              </ScrollReveal>

              {/* Stat Item 2 */}
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="mb-2 text-[#f1c40f]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 11H13V15H11V11H7V9H11V5H13V9H17V11Z" />
                    </svg>
                  </div>
                  <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">1,000+</h3>
                  <p className="text-[14px] text-[#4a5568] m-0">Students Successfully Trained</p>
                </div>
              </ScrollReveal>

              {/* Stat Item 3 */}
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="mb-2 text-[#f1c40f]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
                    </svg>
                  </div>
                  <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">Professional</h3>
                  <p className="text-[14px] text-[#4a5568] m-0">Healthcare Curriculum</p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
