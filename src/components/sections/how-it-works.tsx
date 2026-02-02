"use client";

import React from 'react';
import Image from 'next/image';

/**
 * HowItWorks Section
 * This component clones the detailed features section showcasing the three main automated DM features:
 * 1. Auto-Respond
 * 2. Grow followers ('Ask for follow')
 * 3. Capture emails
 */

const features = [
  {
    id: 'auto-respond',
    badge: null,
    title: 'Auto-Respond to Replies on Reels, Posts, Stories, and Live.',
    description: 'Reply to all comments, story replies, and post interactions with personalized DMs in real time— completely hands-free after a one-time setup.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/iNztmbtngMbn7SrdRja0S87acs-4.png',
    alt: 'Trigger DMs for Instagram replies to stories, posts, reels, and Live',
    reversed: false,
    cta: 'Start for Free',
  },
  {
    id: 'ask-for-follow',
    badge: 'Creators grained 500,000+ IG followers using this feature',
    title: "Grow your followers with 'Ask for follow' feature",
    description: 'Use the “Ask for Follow” AutoDM to instantly nudge anyone who engages with your content—no spam, just smart, timely prompts that convert.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/76ETqKfpycRVnd58sKX5QEIjdjU-5.png',
    alt: "Grow followers on Instagram with 'Ask for a follow before sending DM' feature",
    reversed: true,
    cta: 'Start for Free',
  },
  {
    id: 'capture-emails',
    badge: 'Creators have collected over 600,000+ emails using this feature',
    title: 'Capture crucial information like emails',
    description: 'Automatically collect emails from every comment or reply and grow your list to send newsletters, promote launches, or sell products— without a landing page.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/V6asx70H6QID33YTgVlJ67S7g-6.png',
    alt: 'Collect emails in instagram DMs',
    reversed: false,
    cta: 'Start for Free',
  },
];

export default function HowItWorks() {
  return (
    <section id="features" className="relative py-20 overflow-hidden bg-white">
      {/* Grid Pattern Background - Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="bg-grid-pattern w-full h-[600px] absolute top-[-300px]" />
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex glassmorphism px-4 py-2 mb-6 border border-border rounded-full shadow-sm">
            <h5 className="text-sm font-semibold tracking-wider uppercase text-brand-dark">Features</h5>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-4 tracking-tight">
            How SuperProfile&apos;s AutoDM works
          </h2>
          <p className="max-w-xl text-lg text-text-body">
            Graphite improves your processes and transforms your business for you.
          </p>
        </div>

        {/* Features Content */}
        <div className="space-y-32">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${feature.reversed ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  {/* Decorative Glows */}
                  <div className="absolute -inset-10 bg-blue-50/50 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition duration-500" />
                  
                  <div className="relative overflow-hidden rounded-[24px] lg:rounded-[32px] border border-border bg-white shadow-soft">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={1138}
                      height={1160}
                      className="w-full h-auto object-cover"
                      priority={feature.id === 'auto-respond'}
                    />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
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
                    href="https://superprofile.bio/creator/auto-dm"
                    className="btn-pill inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                  >
                    {feature.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Grid Pattern - Bottom Offset */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[400px] pointer-events-none opacity-20">
        <div className="bg-grid-pattern w-full h-full" />
      </div>
    </section>
  );
}
<style jsx global>{`
  .bg-grid-pattern {
    background-image: linear-gradient(#E2E8F0 1px, transparent 1px),
      linear-gradient(90deg, #E2E8F0 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .glassmorphism {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .shadow-soft {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }
  .btn-pill {
    transition: all 0.2s ease;
  }
  .btn-pill:hover {
    transform: scale(1.02);
  }
`}</style>