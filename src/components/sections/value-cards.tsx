"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/scroll-reveal';

export default function ValueCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section id="highlights" className="relative py-[80px] md:py-[120px] overflow-hidden bg-white">
      {/* Background Radial Glow Effect */}
      <div 
        className="absolute inset-x-0 bottom-[-20%] h-[100%] pointer-events-none opacity-40 md:opacity-60"
        style={{
          background: 'radial-gradient(circle, #E0E7FF 0%, #FFFFFF 100%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-black leading-[1.2]">
              Why Choose Edusource HRD Centre
            </h2>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Structured Learning (Large) */}
          <motion.div
            className="lg:col-span-8 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
          >
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Structured & Discipline-Oriented Learning</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8] max-w-[450px]">
                The course follows a structured academic approach, blending conceptual clarity with real-world administrative perspectives in healthcare.
              </p>
            </div>
            <div className="mt-auto relative z-10 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] aspect-[16/9] border-2 border-[#1E293B] rounded-[24px] p-4 bg-[#0F172A]/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 bg-[#1E293B] rounded-full px-4 py-2 w-fit transform translate-y-4 translate-x-4 shadow-xl">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/yiYCIJMULz38EDsglKAVAIZdEo-7.webp" 
                      alt="Student avatar" 
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-white text-sm font-medium">I want to enroll in this course!</span>
                </div>
                <div className="absolute inset-0 border border-brand-blue/20 rounded-[22px] pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Government Approved Certification */}
          <motion.div
            className="lg:col-span-4 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
          >
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Government Approved Certification</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8]">
                Upon successful completion, students are awarded a Government Approved Certificate, adding formal recognition and credibility.
              </p>
            </div>
            <div className="mt-auto relative w-full aspect-square flex items-center justify-center opacity-80">
              <div className="absolute w-[200px] h-[200px] border border-brand-blue/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-[150px] h-[150px] border border-brand-blue/40 rounded-full flex items-center justify-center">
                  <div className="w-[100px] h-[100px] border border-brand-blue/60 rounded-full flex items-center justify-center bg-brand-blue/10">
                    <div className="p-4 bg-brand-blue rounded-xl shadow-lg shadow-brand-blue/30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Healthcare-Focused Training */}
          <motion.div
            className="lg:col-span-4 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
          >
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3 leading-tight">Healthcare-Focused Administrative Training</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8]">
                Ideal for individuals who wish to build a strong foundation in hospital administration without a medical background.
              </p>
            </div>
            <div className="mt-auto relative w-full h-full flex items-center justify-center p-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full transform hover:scale-105 transition-transform">
                <div className="h-2 w-3/4 bg-white/20 rounded mb-3" />
                <div className="h-2 w-full bg-white/20 rounded mb-3" />
                <div className="h-10 w-full bg-brand-blue rounded-[50px] flex items-center justify-center font-semibold text-white text-sm">
                  Download Course Details
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Professional & Ethical Approach (Large) */}
          <motion.div
            className="lg:col-span-8 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center min-h-[480px]"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={cardVariants}
          >
             <div className="flex-1 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Professional, Ethical & System-Based Approach</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8] max-w-[400px]">
                The course emphasizes knowledge, responsibility, and professionalism — designed to develop administrative competence and confidence in healthcare settings.
              </p>
            </div>

            <div className="flex-1 w-full max-w-[320px] bg-[#1E293B] rounded-[24px] p-4 border border-white/5 shadow-2xl overflow-hidden self-end">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-brand-blue text-white rounded-[16px] rounded-tr-none px-4 py-3 text-sm max-w-[90%]">
                    How is the course structured?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#334155] text-white rounded-[16px] rounded-tl-none px-4 py-3 text-sm max-w-[90%] border border-white/5">
                    It blends conceptual learning with practical hospital administration perspectives.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="w-full h-10 bg-white/10 rounded-full flex items-center px-4">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
