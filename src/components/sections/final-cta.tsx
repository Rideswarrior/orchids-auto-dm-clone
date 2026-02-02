import React from 'react';

/**
 * FinalCTA Component
 * 
 * A pixel-perfect clone of the final call-to-action section.
 * Features:
 * - Centered Heading: "Try AutoDM today"
 * - Sub-headline: "Free to start . No commitments."
 * - Large black pill button: "Start for Free"
 * - Responsive layout following the provided high-level design system.
 */

const FinalCTA: React.FC = () => {
  return (
    <section 
      className="w-full py-[100px] md:py-[120px] px-6 flex flex-col items-center justify-center bg-white"
      id="final-cta"
    >
      <div className="max-w-[1280px] w-full flex flex-col items-center text-center">
        {/* Main Heading */}
        <h2 
          className="font-display font-extrabold text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-[#000000] mb-4"
        >
          Try AutoDM <span className="text-[#0056E0]">today</span>
        </h2>

        {/* Sub-headline */}
        <p 
          className="font-sans text-[18px] md:text-[20px] text-[#4A5568] mb-10"
        >
          Free to start . No commitments.
        </p>

        {/* Primary Action Button */}
        <a 
          href="https://superprofile.bio/signup"
          className="inline-flex items-center justify-center bg-[#0F172A] text-white font-semibold text-[18px] px-12 py-5 rounded-[50px] transition-all duration-200 hover:scale-[1.02] hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-[#0056E0] focus:ring-offset-2"
        >
          Start for Free
        </a>
      </div>

      {/* Constraints and styling references from globals.css:
          --font-display: "Inter", sans-serif;
          --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
          --color-brand-blue: #0056e0;
          --color-brand-dark: #0f172a;
          --radius-xl: 40px; (pill shape used for buttons)
      */}
    </section>
  );
};

export default FinalCTA;