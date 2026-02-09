"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative px-6 pt-12 pb-0 overflow-hidden bg-white">
      {/* Primary Blue Hero Container */}
      <div className="max-w-[1440px] mx-auto bg-[#0056E0] rounded-[40px] relative overflow-hidden min-h-[720px] lg:min-h-[800px] flex flex-col items-center">
        
        {/* Subtle Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content Layout */}
        <div className="container relative z-10 pt-20 lg:pt-32 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <motion.h1
              className="text-white text-[48px] md:text-[64px] font-[800] leading-[1.1] tracking-[-0.02em] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Build Your Career in <br /> Hospital Administration
            </motion.h1>
            <motion.p
              className="text-white/80 text-[18px] md:text-[20px] leading-[1.6] max-w-[540px] mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A professionally structured program at Edusource HRD Centre, Kollam — equipping learners with essential administrative knowledge and practical understanding of healthcare systems. Government Approved Certification.
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a 
                href="#final-cta"
                className="bg-white text-[#0056E0] hover:scale-[1.02] transition-transform duration-200 px-8 py-4 rounded-full font-semibold text-[16px] shadow-lg inline-flex items-center justify-center cursor-pointer"
              >
                Apply for Admission
              </a>
            </motion.div>
          </div>

          {/* Product Visual (Hand holding Phone) */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[320px] md:w-[480px] lg:w-[560px] aspect-[0.56] flex justify-center items-end">
              {/* The Hand with Phone Image */}
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/jYOEdYf4OnQm0FJXy5EjomPxTyA-2.png" 
                alt="Hospital Administration Course Visual"
                width={560}
                height={1000}
                className="w-full h-auto object-contain relative z-20"
                style={{ marginBottom: '-40px' }}
              />

              {/* Float-in UI Elements (Notification Tooltip) */}
              <div className="absolute bottom-[20%] left-[-10%] md:left-[-5%] z-30 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="bg-[#0f1012] text-white p-4 rounded-xl flex items-center gap-3 shadow-2xl border border-white/10 max-w-[280px]">
                  <div className="w-8 h-8 rounded-full bg-[#0056E0] flex items-center justify-center text-[12px] font-bold">1</div>
                  <p className="text-[12px] leading-tight text-white/90">
                    Learn hospital operations, patient coordination, and healthcare administration...
                  </p>
                </div>
              </div>

              {/* Video Overlay inside screen */}
              <div className="absolute top-[16.5%] w-[66%] h-[40%] rounded-[30px] overflow-hidden z-10 left-[17%]">
                <video 
                  src="https://framerusercontent.com/assets/QL65mQBgX87uv5vUwGasPkyzntc.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Shadow Blur Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0056E0] to-transparent z-20" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Trust / Credibility Bar Section */}
      <div id="credibility" className="max-w-[1280px] mx-auto py-12 md:py-20 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Govt Certified Badge */}
          <div className="bg-[#F7F9FC] border border-[#E2E8F0] p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0056E0] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="text-[14px] font-semibold text-[#0f172a]">Govt. Approved</span>
            </div>
            <p className="text-[12px] text-[#4A5568] leading-tight">
              Government Approved Certification with formal recognition and credibility.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start pl-0 md:pl-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#f1c40f]">&#9733;</span>
              <span className="text-[24px] font-bold text-black">15+ Years</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Of Academic Excellence</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#0056E0]">&#128218;</span>
              <span className="text-[24px] font-bold text-black">1,000+</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Students Trained</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#48BB78]">&#127891;</span>
              <span className="text-[24px] font-bold text-black">Professional</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Healthcare Curriculum</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
