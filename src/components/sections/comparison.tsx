"use client";

import React from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import ScrollReveal from '@/components/scroll-reveal';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Government Approved Certification",
      edusource: { value: "check", text: "" },
      traditional: { value: "cross", text: "" },
    },
    {
      feature: "Healthcare-Focused Curriculum",
      edusource: { value: "text", text: "Specialized" },
      traditional: { value: "text", text: "Generic content" },
    },
    {
      feature: "Practical Administrative Training",
      edusource: { value: "text", text: "System-based approach" },
      traditional: { value: "text", text: "Theory-only learning" },
    },
    {
      feature: "Professional Faculty & Guidance",
      edusource: { value: "text", text: "Expert mentors" },
      traditional: { value: "text", text: "Limited support" },
    },
    {
      feature: "Suitable for Beginners",
      edusource: { value: "check", text: "" },
      traditional: { value: "cross", text: "" },
    },
  ];

  return (
    <section className="py-[120px] px-6 bg-white overflow-hidden" id="comparison">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-[48px] font-bold text-[#000000] leading-[1.2] mb-4 tracking-tight">
              Professional Healthcare Training vs Traditional Learning
            </h2>
            <p className="text-[16px] text-[#4A5568] max-w-[600px] mx-auto leading-[1.5]">
              See how Edusource HRD Centre&apos;s structured approach compares to conventional learning methods.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table Container */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-8">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden max-w-[900px] mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0]">
                    <th className="p-6 md:p-8 w-1/3"></th>
                    <th className="p-6 md:p-8 w-1/3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/nB7aFE9IAkTfwaIoblLAKapVOE-3.png"
                          alt="Edusource Logo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="text-[20px] font-bold text-[#000000]">Edusource HRD</span>
                      </div>
                    </th>
                    <th className="p-6 md:p-8 w-1/3 text-center">
                      <div className="flex items-center justify-center gap-2">
                         <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/icons/WCNTx6NzfwCIOcISan4GrKZ3gu8-4.png"
                          alt="Traditional Learning"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="text-[20px] font-bold text-[#000000]">Traditional</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={index !== comparisonData.length - 1 ? "border-b border-[#E2E8F0]" : ""}
                    >
                      <td className="p-6 md:p-8 text-[16px] font-semibold text-[#000000]">
                        {row.feature}
                      </td>
                      <td className="p-6 md:p-8 text-center text-[16px] text-[#000000] border-x border-[#E2E8F0]">
                        {row.edusource.value === "check" ? (
                          <div className="flex justify-center">
                            <div className="bg-[#E6F6EC] p-1 rounded-md">
                              <Check className="w-5 h-5 text-[#48BB78]" strokeWidth={3} />
                            </div>
                          </div>
                        ) : (
                          <span className="font-medium">{row.edusource.text}</span>
                        )}
                      </td>
                      <td className="p-6 md:p-8 text-center text-[16px] text-[#4A5568]">
                        {row.traditional.value === "cross" ? (
                          <div className="flex justify-center">
                            <X className="w-5 h-5 text-[#EF4444]" strokeWidth={2.5} />
                          </div>
                        ) : (
                          <span className="font-medium">{row.traditional.text}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="md:hidden mt-4 text-[#A0AEC0] text-sm">
              &#8592; Scroll to see full comparison &#8594;
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <a 
              href="#final-cta" 
              className="inline-flex items-center font-semibold text-[#0056E0] hover:underline"
            >
              Apply for Admission
              <svg 
                className="ml-1 w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ComparisonSection;
