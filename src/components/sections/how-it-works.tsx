"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/scroll-reveal';

const features = [
  {
    id: 'hospital-operations',
    badge: null,
    title: 'Fundamentals of Hospital Administration & Operations',
    description: 'Gain insight into how hospitals function internally — from department coordination to operational workflows. Learn the administrative systems that support efficient patient care and institutional standards.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/iNztmbtngMbn7SrdRja0S87acs-4.png',
    alt: 'Hospital Operations and Administration Training',
    reversed: false,
    cta: 'Learn More',
  },
  {
    id: 'patient-coordination',
    badge: 'Core focus area of the Hospital Administration Course',
    title: 'Patient Coordination & Administrative Communication',
    description: 'Develop skills in patient coordination, appointment management, and inter-departmental communication. Emphasis is placed on professional discipline, documentation awareness, and effective communication in healthcare settings.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/76ETqKfpycRVnd58sKX5QEIjdjU-5.png',
    alt: 'Patient Coordination and Healthcare Communication',
    reversed: true,
    cta: 'Learn More',
  },
  {
    id: 'medical-records',
    badge: 'Essential healthcare documentation and records management',
    title: 'Medical Records, Documentation & Front-Desk Management',
    description: 'Learn professional healthcare office management, medical records documentation practices, and front-desk operations. This module prepares students to confidently handle administrative responsibilities in medical environments.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/V6asx70H6QID33YTgVlJ67S7g-6.png',
    alt: 'Medical Records and Documentation Management',
    reversed: false,
    cta: 'Learn More',
  },
];

export default function HowItWorks() {
  return (
    <section id="features" className="relative py-20 overflow-hidden bg-white">
      {/* Grid Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="bg-grid-pattern w-full h-[600px] absolute top-[-300px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-24 text-center">
            <div className="inline-flex glassmorphism px-4 py-2 mb-6 border border-border rounded-full shadow-sm">
              <h5 className="text-sm font-semibold tracking-wider uppercase text-brand-dark">Key Focus Areas</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-4 tracking-tight">
              What You Will Learn
            </h2>
            <p className="max-w-xl text-lg text-text-body">
              A structured academic approach blending conceptual clarity with real-world administrative perspectives.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Content */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${feature.reversed ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <ScrollReveal className="w-full md:w-1/2" direction={feature.reversed ? "right" : "left"} delay={0.1}>
                <div className="relative group">
                  <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-500" />
                  <div className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] border border-border bg-white shadow-soft">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1138}
                      height={1160}
                      className="w-full h-auto object-cover"
                      priority={feature.id === 'hospital-operations'}
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Text Side */}
              <ScrollReveal className="w-full md:w-1/2" delay={0.2}>
                <div className="max-w-lg">
                  {feature.badge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-green-50 text-brand-success rounded-lg border border-green-100 shadow-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span className="text-sm font-medium leading-none">{feature.badge}</span>
                    </div>
                  )}
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-text-heading mb-6 leading-[1.3]">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-text-body mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <a
                    href="#final-cta"
                    className="btn-pill inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                  >
                    {feature.cta}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Grid Pattern */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[400px] pointer-events-none opacity-20">
        <div className="bg-grid-pattern w-full h-full" />
      </div>
    </section>
  );
}
