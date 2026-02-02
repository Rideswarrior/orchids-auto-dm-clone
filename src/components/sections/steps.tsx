import React from 'react';
import Image from 'next/image';

/**
 * StepsSection - "Choose, Write, and Go!"
 * 
 * Clones the 3-step setup process with interactive UI mockups and cursor icons.
 * Consistent with Next.js 15, TypeScript, and Tailwind CSS.
 */
export default function StepsSection() {
  const steps = [
    {
      badge: "START IN JUST 3 STEPS",
      title: "Choose, Write, and Go!",
      description: "SuperProfile makes automation effortless— no learning curve, just results."
    }
  ];

  return (
    <section className="relative w-full py-[120px] px-6 bg-white overflow-hidden" id="steps-workflow">
      {/* Background radial glow for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none radial-glow opacity-60 z-0"></div>

      <div className="container relative z-10 mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 glassmorphism border border-border rounded-full shadow-sm">
            <span className="text-[12px] font-bold tracking-wider text-brand-dark uppercase">
              START IN JUST 3 STEPS
            </span>
          </div>
          <h2 className="h2 mb-4 text-text-heading">Choose, Write, and Go!</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl px-4">
            SuperProfile makes automation effortless— no learning curve, just results.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Step 1 Card: Choose a Trigger */}
          <div className="flex flex-col">
            <div className="bg-[#BBD7FF] rounded-[24px] p-8 min-h-[320px] relative overflow-hidden flex flex-col justify-center items-center shadow-soft mb-6 border border-[#A5C7FF]">
              <div className="w-full max-w-[280px] space-y-3 relative">
                {/* Option 1 */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 shadow-sm border border-white">
                  <div className="w-6 h-6 flex items-center justify-center text-[#7C3AED]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Replies on your Stories</span>
                </div>
                {/* Option 2 (Selected/Active) */}
                <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-md border-2 border-brand-blue relative transform scale-105 z-10">
                  <div className="w-6 h-6 flex items-center justify-center text-[#10B981]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-800">Comments on your Post or Reel</span>
                  {/* Cursor Icon */}
                  <div className="absolute -bottom-6 -right-4 w-10 h-10 animate-bounce">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/zWnTfIUxZXDTf0nXvEpbPWMWg-9.png"
                      alt="Cursor"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                {/* Option 3 */}
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 shadow-sm border border-white">
                  <div className="w-6 h-6 flex items-center justify-center text-[#EF4444]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11"/><rect width="12" height="10" x="2" y="7" rx="2"/></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-600">Comments on your Insta Live</span>
                </div>
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-[24px] font-bold text-text-heading mb-2">Choose a Trigger</h3>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                Choose how you&apos;d like to trigger the automation - on Post replies, DMs, or comments on Stories.
              </p>
            </div>
          </div>

          {/* Step 2 Card: Write Your Message */}
          <div className="flex flex-col">
            <div className="bg-[#BBD7FF] rounded-[24px] p-8 min-h-[320px] relative overflow-hidden flex flex-col justify-center items-center shadow-soft mb-6 border border-[#A5C7FF]">
              <div className="w-full max-w-[320px] bg-white rounded-2xl p-4 shadow-xl border border-white/50 space-y-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Message to send in DM</div>
                <div className="w-full h-24 bg-slate-50 border border-slate-100 rounded-xl p-3 relative">
                  <div className="absolute bottom-2 right-2 text-[10px] text-slate-300">0/1000</div>
                </div>
                <div className="w-full border-t border-slate-100 pt-3 relative">
                  <div className="flex items-center justify-center gap-2 py-2 border border-dashed border-slate-300 rounded-lg text-slate-400 text-xs font-medium">
                    <span>+ Add a button</span>
                  </div>
                  {/* Cursor Icon for button */}
                  <div className="absolute top-6 -left-4 w-10 h-10 animate-pulse">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/zWnTfIUxZXDTf0nXvEpbPWMWg-9.png"
                      alt="Cursor"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-[24px] font-bold text-text-heading mb-2">Write Your Message</h3>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                Drop your lead magnet, sales link, or just a friendly hello. Add a public reply if you want extra hype.
              </p>
            </div>
          </div>

        </div>

        {/* Step 3: Go Live */}
        <div className="flex flex-col items-center bg-transparent border-t border-border pt-12">
          <div className="max-w-2xl text-center mb-10">
            <h3 className="text-[28px] font-bold text-text-heading mb-2">Go Live in 30 Seconds</h3>
            <p className="text-[18px] text-muted-foreground">
              No Zapier. No coding. Just click &ldquo;Activate&rdquo; and let the magic happen.
            </p>
          </div>
          
          <a 
            href="https://superprofile.bio/signup" 
            className="btn-pill bg-brand-blue text-white px-8 py-4 text-[16px] flex items-center justify-center min-w-[200px] hover:bg-blue-700 shadow-lg shadow-blue-500/20"
          >
            Start for Free
          </a>
        </div>
      </div>
    </section>
  );
}