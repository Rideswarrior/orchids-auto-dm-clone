import React from 'react';
import Image from 'next/image';

/**
 * ValueCards Component
 * Clones the "Why creators love AutoDM" section with dark-themed cards.
 * Implements pixel-perfect styles based on computed styles and high-level design.
 */
export default function ValueCards() {
  return (
    <section id="highlights" className="relative py-[80px] md:py-[120px] overflow-hidden bg-white">
      {/* Background Radial Glow Effect as described in visual_effects_treatments */}
      <div 
        className="absolute inset-x-0 bottom-[-20%] h-[100%] pointer-events-none opacity-40 md:opacity-60"
        style={{
          background: 'radial-gradient(circle, #E0E7FF 0%, #FFFFFF 100%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-black leading-[1.2]">
            Why creators love AutoDM
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Boosts Engagement (Large) */}
          <div className="lg:col-span-8 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]">
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Boosts Engagement</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8] max-w-[450px]">
                More comments = more reach. Trigger DMs from comments and skyrocket your visibility.
              </p>
            </div>
            
            {/* Visual Element for Engagement (Mockup Chat Bubble) */}
            <div className="mt-auto relative z-10 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] aspect-[16/9] border-2 border-[#1E293B] rounded-[24px] p-4 bg-[#0F172A]/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 bg-[#1E293B] rounded-full px-4 py-2 w-fit transform translate-y-4 translate-x-4 shadow-xl">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/yiYCIJMULz38EDsglKAVAIZdEo-7.webp" 
                      alt="User avatar" 
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-white text-sm font-medium">I want this ebook!</span>
                </div>
                {/* Secondary decorative elements */}
                <div className="absolute inset-0 border border-brand-blue/20 rounded-[22px] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Card 2: Capture Every Lead (Small/Medium) */}
          <div className="lg:col-span-4 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]">
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Capture Every Lead</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8]">
                Every trigger sends a personalized DM and captures emails without you lifting a finger.
              </p>
            </div>
            {/* Concentric rings/Email visual */}
            <div className="mt-auto relative w-full aspect-square flex items-center justify-center opacity-80">
              <div className="absolute w-[200px] h-[200px] border border-brand-blue/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-[150px] h-[150px] border border-brand-blue/40 rounded-full flex items-center justify-center">
                  <div className="w-[100px] h-[100px] border border-brand-blue/60 rounded-full flex items-center justify-center bg-brand-blue/10">
                    <div className="p-4 bg-brand-blue rounded-xl shadow-lg shadow-brand-blue/30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Click-Throughs (Small/Medium) */}
          <div className="lg:col-span-4 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col min-h-[480px]">
            <div className="mb-6 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3 leading-tight">Click-Throughs That Actually Convert</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8]">
                DM links get 3–5x more clicks than your bio. Why wait for them to go hunting?
              </p>
            </div>
            {/* Conversion Visual */}
            <div className="mt-auto relative w-full h-full flex items-center justify-center p-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full transform hover:scale-105 transition-transform">
                <div className="h-2 w-3/4 bg-white/20 rounded mb-3" />
                <div className="h-2 w-full bg-white/20 rounded mb-3" />
                <div className="h-10 w-full bg-brand-blue rounded-[50px] flex items-center justify-center font-semibold text-white text-sm">
                  Visit Course
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Grow Followers (Large) */}
          <div className="lg:col-span-8 group relative overflow-hidden bg-[#0F172A] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center min-h-[480px]">
             <div className="flex-1 z-10">
              <h3 className="text-[24px] md:text-[32px] font-bold text-white mb-3">Grow Followers Faster</h3>
              <p className="text-[14px] md:text-[16px] text-[#94A3B8] max-w-[400px]">
                Turn on “Ask for a follow before sending DM” — reward new followers with a freebie, link, or discount instantly.
              </p>
            </div>

            {/* In-app DM mockup */}
            <div className="flex-1 w-full max-w-[320px] bg-[#1E293B] rounded-[24px] p-4 border border-white/5 shadow-2xl overflow-hidden self-end">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-brand-blue text-white rounded-[16px] rounded-tr-none px-4 py-3 text-sm max-w-[90%]">
                    Got it. Thanks!
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-[#334155] text-white rounded-[16px] rounded-tl-none px-4 py-3 text-sm max-w-[90%] border border-white/5">
                    Great! Here's the link for the workshop.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="w-full h-10 bg-white/10 rounded-full flex items-center px-4">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}