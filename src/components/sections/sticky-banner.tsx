"use client";

import React from "react";

export default function StickyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] w-full px-4 pb-4 md:px-0 md:pb-0">
      <div 
        className="mx-auto flex w-full max-w-[1280px] items-center justify-center py-[10px] px-6 text-center md:max-w-none"
        style={{
          background: "linear-gradient(90deg, #D6E3F7 0%, #BCCFEF 100%)",
          borderTop: "1px solid rgba(0, 86, 224, 0.1)",
        }}
      >
        <p className="m-0 flex flex-wrap items-center justify-center gap-1 font-sans text-[13px] font-medium leading-[1.4] text-[#000000] sm:text-[14px]">
          <span className="flex items-center gap-1">
            <span role="img" aria-label="party popper" className="text-[16px]">
              🎉
            </span>
            <span className="font-bold">New Launch</span>
          </span>
          <span className="mx-1 hidden sm:inline">-</span>
          <span>Use AutoDM to send unlimited DM Automations on Instagram</span>
          <a
            href="https://superprofile.bio/creator/auto-dm"
            className="ml-1 font-bold text-[#000000] underline transition-opacity hover:opacity-80"
          >
            Start now
          </a>
        </p>
      </div>
      
      <div 
        className="hidden md:block h-0" 
        style={{ background: "linear-gradient(90deg, #D6E3F7 0%, #BCCFEF 100%)" }}
      />
    </div>
  );
}
