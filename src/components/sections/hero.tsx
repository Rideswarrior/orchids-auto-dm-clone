import React from 'react';
import Image from 'next/image';

/**
 * Hero Section
 * Logic: A large royal blue container with a subtle grid pattern, containing the main value proposition
 * and a product visual featuring a 3D phone mockup.
 */
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
            <h1 className="text-white text-[48px] md:text-[64px] font-[800] leading-[1.1] tracking-[-0.02em] mb-6">
              Turn Engagement <br /> Into Conversions
            </h1>
            <p className="text-white/80 text-[18px] md:text-[20px] leading-[1.6] max-w-[540px] mx-auto lg:mx-0 mb-10">
              Send instant DMs to anyone who comments or replies to your Stories, Lives, or Posts — 100% automated, no manual effort.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="https://superprofile.bio/creator/auto-dm"
                className="bg-white text-[#0056E0] hover:scale-[1.02] transition-transform duration-200 px-8 py-4 rounded-full font-semibold text-[16px] shadow-lg inline-flex items-center justify-center cursor-pointer"
              >
                Start for Free
              </a>
            </div>
          </div>

          {/* Product Visual (Hand holding Phone) */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[480px] lg:w-[560px] aspect-[0.56] flex justify-center items-end">
              {/* The Hand with Phone Image */}
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/jYOEdYf4OnQm0FJXy5EjomPxTyA-2.png" 
                alt="AutoDM Visual Interface"
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
                    When someone comments on your Reel, Post, Story, or Live....
                  </p>
                </div>
              </div>

              {/* Video Overlay inside screen - conceptual placement based on HTML Structure */}
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
          </div>

        </div>
      </div>

      {/* Trust / Credibility Bar Section */}
      <div id="credibility" className="max-w-[1280px] mx-auto py-12 md:py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          
          {/* Meta Tech Provider Badge */}
          <div className="bg-[#F7F9FC] border border-[#E2E8F0] p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-auto">
                <svg viewBox="0 0 100 20" className="w-[80px] text-[#0668E1] fill-current">
                   <path d="M72.2,4.6L72.2,4.6c-2.4,0-4.4,1.9-4.4,4.3c0,2.4,2,4.3,4.4,4.3l0,0c2.4,0,4.4-1.9,4.4-4.3C76.6,6.5,74.6,4.6,72.2,4.6 M72.2,12.2L72.2,12.2c-1.8,0-3.3-1.4-3.3-3.2c0-1.8,1.5-3.2,3.3-3.2c1.8,0,3.3,1.4,3.3,3.2C75.5,10.7,74,12.2,72.2,12.2 M83.5,4.6L83.5,4.6c-2.4,0-4.4,1.9-4.4,4.3c0,2.4,2,4.3,4.4,4.3l0,0c2.4,0,4.4-1.9,4.4-4.3C87.9,6.5,85.9,4.6,83.5,4.6 M83.5,12.2L83.5,12.2c-1.8,0-3.3-1.4-3.3-3.2c0-1.8,1.5-3.2,3.3-3.2c1.8,0,3.3,1.4,3.3,3.2C86.8,10.7,85.3,12.2,83.5,12.2 M94.8,4.6L94.8,4.6c-2.4,0-4.4,1.9-4.4,4.3c0,2.4,2,4.3,4.4,4.3l0,0c2.4,0,4.4-1.9,4.4-4.3C99.2,6.5,97.2,4.6,94.8,4.6 M94.8,12.2L94.8,12.2c-1.8,0-3.3-1.4-3.3-3.2c0-1.8,1.5-3.2,3.3-3.2c1.8,0,3.3,1.4,3.3,3.2C98.1,10.7,96.6,12.2,94.8,12.2 M60.8,4.7h-1.1V13h1.1v-3.7c0-2,1.2-3,2.7-3c0.4,0,0.8,0.1,1.1,0.2V5.4c-0.3-0.1-0.7-0.1-1-0.1 c-1.2,0-2.2,0.6-2.8,1.7V4.7z M53.8,8.8c0-2.4-1.8-4.3-4.1-4.3c-2.4,0-4.1,1.9-4.1,4.3s1.7,4.3,4.1,4.3c1.1,0,2.1-0.4,2.9-1.2l-0.7-0.7 c-0.6,0.6-1.4,0.9-2.2,0.9c-1.7,0-3-1.3-3-3.1h6.1C53.8,8.9,53.8,8.9,53.8,8.8 M46.6,8c0.1-1.6,1.4-2.5,2.9-2.5c1.4,0,2.8,0.9,2.9,2.5 H46.6z M38.6,1.3l-1.1,0.4v3h4.4v0.9h-4.4V13h-1.1V5.6h-2.1V4.7h2.1v-3.4L38.6,1.3z M27.1,4.7l-0.6,1.7c-0.6-1.1-1.6-1.8-2.8-1.8 c-2.4,0-4.1,1.9-4.1,4.3c0,2.4,1.7,4.3,4.1,4.3c1.2,0,2.2-0.7,2.8-1.7V13h1.1V4.7H27.1z M23.5,12.2c-1.7,0-3-1.4-3-3.2s1.3-3.2,3-3.2 c1.7,0,3,1.4,3,3.2S25.2,12.2,23.5,12.2 M10.4,4.7h-1.1V13h1.1V6.6l3.4,6.4h0.6l3.4-6.4V13H19V4.7h-1.2l-3.1,5.8L11.6,4.7H10.4z" />
                </svg>
              </div>
              <span className="text-[14px] font-semibold text-[#0f172a]">Tech provider</span>
            </div>
            <p className="text-[12px] text-[#4A5568] leading-tight">
              SuperProfile has been certified by Meta as a Verified Tech Provider.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start pl-0 md:pl-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#f1c40f]">★</span>
              <span className="text-[24px] font-bold text-black">100,000+</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Creators use SuperProfile</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#0056E0]">💬</span>
              <span className="text-[24px] font-bold text-black">10 Million+</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Instagram AutoDMs sent</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#48BB78]">🚀</span>
              <span className="text-[24px] font-bold text-black">2 Million+</span>
            </div>
            <p className="text-[14px] text-[#4A5568]">Follower growth</p>
          </div>

        </div>
      </div>
    </section>
  );
}