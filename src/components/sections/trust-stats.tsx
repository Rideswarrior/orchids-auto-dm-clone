import React from 'react';
import Image from 'next/image';

/**
 * TrustStats Section
 * 
 * Clones the credibility section of SuperProfile AutoDM.
 * Features:
 * - Meta Verified Tech Provider badge
 * - Statistics for Creators (100,000+)
 * - Instagram AutoDMs sent (10 Million+)
 * - Follower growth (2 Million+)
 * 
 * Themes: Light
 */

export default function TrustStats() {
  const metaBadgeIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/0ksg3sGuskAauQjFSBhqfuReY-2.png";

  return (
    <section 
      id="credibility" 
      className="w-full bg-white py-[60px] md:py-[80px]"
    >
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 w-full">
          
          {/* Meta Verified Badge */}
          <div 
            className="flex items-center gap-4 p-4 md:p-6 rounded-[24px] border border-[#e2e8f0] bg-white w-full max-w-[440px]"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex flex-col items-start min-w-fit">
              <div className="flex items-center gap-2 mb-1">
                <Image 
                  src={metaBadgeIcon} 
                  alt="Meta Logo" 
                  width={92} 
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-semibold text-[#000000]">Tech provider</span>
            </div>
            <div className="h-full w-[1px] bg-[#e2e8f0] mx-2 hidden sm:block"></div>
            <p className="text-[14px] leading-[1.4] text-[#4a5568] m-0">
              SuperProfile has been certified by Meta as a Verified Tech Provider.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-12 md:gap-16 lg:gap-20 w-full lg:w-auto">
            
            {/* Stat Item 1 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-2 text-[#f1c40f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">100,000+</h3>
              <p className="text-[14px] text-[#4a5568] m-0">Creators use SuperProfile</p>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-2 text-[#f1c40f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 11H13V15H11V11H7V9H11V5H13V9H17V11Z" />
                </svg>
              </div>
              <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">10 Million+</h3>
              <p className="text-[14px] text-[#4a5568] m-0">Instagram AutoDMs sent</p>
            </div>

            {/* Stat Item 3 */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-2 text-[#f1c40f]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
                </svg>
              </div>
              <h3 className="text-[28px] font-bold text-[#000000] leading-tight mb-1">2 Million+</h3>
              <p className="text-[14px] text-[#4a5568] m-0">Follower growth</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}