"use client";

import React from 'react';
import Image from 'next/image';
import { Video, Phone } from 'lucide-react';
import ScrollReveal from '@/components/scroll-reveal';

const Testimonials = () => {
  const studentExperiences = [
    {
      content: [
        { text: 'The hospital administration course covers all essential aspects of healthcare management.', isSender: true },
        { text: 'The faculty is very supportive and knowledgeable. The structured approach helped me understand hospital workflows clearly.', isSender: false },
        { text: 'Glad to hear that! The practical modules really make a difference.', isSender: true },
      ],
    },
    {
      content: [
        { text: 'How is the course structured at Edusource?', isSender: true },
        { text: 'It covers hospital operations, patient coordination, medical records, and ethics.', isSender: true },
        { text: 'That sounds comprehensive!', isSender: false },
        { text: 'The learning environment is professional and the faculty is very approachable.', isSender: false },
        { text: 'I feel confident about my understanding of healthcare administration now.', isSender: false },
      ],
    },
    {
      content: [
        { text: 'Welcome to Edusource HRD Centre! How can we help?', isSender: true },
        { text: 'I wanted to know about the certification.', isSender: false },
        { text: 'You receive a Government Approved Certificate upon completion.', isSender: true },
        { text: 'That is wonderful! The course content and faculty guidance have been excellent throughout my learning journey.', isSender: false },
      ],
    },
  ];

  return (
    <section className="py-[120px] px-6 bg-white overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-[1280px]">
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-black leading-[1.2] tracking-[-0.01em] mb-4">
              Trusted by <span className="italic font-normal text-[#4A5568]">Students &amp; Healthcare Aspirants</span>
            </h2>
            <p className="text-[20px] text-[#4A5568] max-w-[600px] mx-auto leading-[1.6]">
              Hear from our students about their learning experience at Edusource HRD Centre.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/1WQ6nK9M4cCbYUQYhdex9dNxk0M-11.jpeg" alt="Student" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Anju Krishnan</p>
                  </div>
                  <div className="flex gap-4 text-white/60">
                    <Video className="h-4 w-4" />
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {studentExperiences[0].content.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`max-w-[85%] rounded-[12px] p-3 text-[13px] leading-tight ${
                        msg.isSender 
                          ? 'bg-[#0056e0] text-white self-end rounded-tr-none' 
                          : 'bg-[#1f2937] text-white self-start rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-[24px] overflow-hidden bg-black border border-gray-100 shadow-soft">
                <video 
                  src="https://framerusercontent.com/assets/7rwHp3uckUyhESsYnazt3kFU7M.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-[#e2e8f0] rounded-[24px] p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#48bb78]">&#9733;</span>
                  ))}
                </div>
                <p className="text-[#4A5568] text-[16px] leading-[1.6] mb-6">
                  &quot;The Hospital Administration course at Edusource gave me a thorough understanding of how hospitals function. The faculty support and structured curriculum made learning very effective.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/4rZFoXgGKTyqmEK2qSZLnMdfA-12.jpeg" alt="Rahul M" width={40} height={40} className="object-cover" />
                  </div>
                  <span className="font-bold text-black text-[16px]">Rahul M</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.15}>
              <div className="rounded-[24px] overflow-hidden bg-black border border-gray-100 shadow-soft">
                <video 
                  src="https://framerusercontent.com/assets/7xP7j2R2k9h62MMxb1kXEB8H4MI.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-600">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/1WQ6nK9M4cCbYUQYhdex9dNxk0M-11.jpeg" alt="Student" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Meera S</p>
                  </div>
                  <div className="flex gap-4 text-white/60">
                    <Video className="h-4 w-4" />
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {studentExperiences[1].content.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`max-w-[85%] rounded-[12px] p-3 text-[13px] leading-tight ${
                        msg.isSender 
                          ? 'bg-[#0056e0] text-white self-end rounded-tr-none' 
                          : 'bg-[#1f2937] text-white self-start rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="rounded-[24px] overflow-hidden bg-[#2a2a2a] aspect-[9/13] relative shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0.2}>
              <div className="rounded-[24px] overflow-hidden bg-[#1f2937] aspect-[9/11] relative shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                     <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                   </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-500">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/CXqxrKhFb62A1BXDHDfCGaaerFE-14.jpeg" alt="Student" width={40} height={40} className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Deepak R</p>
                  </div>
                  <div className="flex gap-4 text-white/60">
                    <Video className="h-4 w-4" />
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {studentExperiences[2].content.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`max-w-[85%] rounded-[12px] p-3 text-[13px] leading-tight ${
                        msg.isSender 
                          ? 'bg-[#0056e0] text-white self-end rounded-tr-none' 
                          : 'bg-[#1f2937] text-white self-start rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="bg-white border border-[#e2e8f0] rounded-[24px] p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#48bb78]">&#9733;</span>
                  ))}
                </div>
                <p className="text-[#4A5568] text-[16px] leading-[1.6] mb-6">
                  &quot;Edusource HRD Centre provided me with a strong foundation in hospital administration. The government approved certification added real value to my qualification.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/DNAghrq62kAwheFB0o8xkz36J9c-15.jpeg" alt="Priya N" width={40} height={40} className="object-cover" />
                  </div>
                  <span className="font-bold text-black text-[16px]">Priya N</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
