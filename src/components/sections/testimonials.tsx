import React from 'react';
import Image from 'next/image';
import { Video, Phone } from 'lucide-react';

const Testimonials = () => {
  // Testimonial data extracted from content and visuals
  const testimonials = [
    {
      type: 'chat',
      sender: 'Robert Doran',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/1WQ6nK9M4cCbYUQYhdex9dNxk0M-11.jpeg',
      content: [
        { text: 'page like this Creator - https://www.instagram.com/madhvinjuneja/ (you\'ll see she\'s using SuperProfile)', isSender: true },
        { text: 'Excellent, thanks for the clarification!! Enjoying the interface so far!!', isSender: false },
        { text: 'Is there a feedback form you\'d like filled?', isSender: false },
        { text: 'Appreciate it, Robert. Your words are the best feedback :)', isSender: true },
      ],
      className: 'col-span-1 row-span-1',
    },
    {
      type: 'video',
      src: 'https://framerusercontent.com/assets/7rwHp3uckUyhESsYnazt3kFU7M.mp4',
      className: 'col-span-1 row-span-2 aspect-[9/16] bg-[#1a1a1a] rounded-[24px] overflow-hidden',
    },
    {
      type: 'video',
      src: 'https://framerusercontent.com/assets/7xP7j2R2k9h62MMxb1kXEB8H4MI.mp4',
      className: 'col-span-1 row-span-2 aspect-[9/16] bg-[#1a1a1a] rounded-[24px] overflow-hidden',
    },
    {
      type: 'video',
      videoPlaceholder: true, // For the ones where assets aren't directly linked but visible in screens
      className: 'col-span-1 row-span-2 aspect-[9/16] bg-[#2a2a2a] rounded-[24px] overflow-hidden',
    },
    {
      type: 'chat',
      sender: 'Marion Singapore',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/1WQ6nK9M4cCbYUQYhdex9dNxk0M-11.jpeg',
      content: [
        { text: 'https://superprofile.bio/explore-all-apps', isSender: true },
        { text: 'Go to the above link and switch on AutoDM', isSender: true },
        { text: 'got it', isSender: false },
        { text: 'I must say until now - your customer service with WhatsApp is amazing!!', isSender: false },
        { text: 'never seen anything alike and I appreciate it a lot', isSender: false },
      ],
      className: 'col-span-1 row-span-1',
    },
    {
      type: 'review',
      rating: 5,
      text: '"One of the greatest experience ever. I found Telegram integrated feature very usefull. As it totally automates my business also the support is pretty good."',
      author: 'Prasun B',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/4rZFoXgGKTyqmEK2qSZLnMdfA-12.jpeg',
      className: 'col-span-1 row-span-1',
    },
    {
      type: 'chat',
      sender: 'Sidhi Creator',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/CXqxrKhFb62A1BXDHDfCGaaerFE-14.jpeg',
      content: [
        { text: 'I\'ve approved your AutoDM access from my end.', isSender: true },
        { text: 'okay thanks a lot will try now', isSender: false },
        { text: 'You\'re most welcome!', isSender: true },
        { text: 'Hi its an appreciation message for you all who created this automation for free I was not able to do it from any other site...', isSender: false },
      ],
      className: 'col-span-1 row-span-1',
    },
    {
      type: 'review',
      rating: 5,
      text: '"SuperProfile\'s locked content feature has been a game-changer for me, enabling me to monetize my YouTube channel and grow my earnings."',
      author: 'Kavyal Sedanni',
      avatar: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f236cae-f369-4b7e-8d1c-2883eb29a59e-superprofile-bio/assets/images/DNAghrq62kAwheFB0o8xkz36J9c-15.jpeg',
      className: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section className="py-[120px] px-6 bg-white overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-black leading-[1.2] tracking-[-0.01em] mb-4">
            Top choice of <span className="italic font-normal text-[#4A5568]">500,000+ creators</span>
          </h2>
          <p className="text-[20px] text-[#4A5568] max-w-[600px] mx-auto leading-[1.6]">
            See how we&apos;ve helped creators like you build great brands and businesses.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Robert Doran Chat Card */}
            <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={testimonials[0].avatar!} alt="Robert Doran" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Robert Doran</p>
                </div>
                <div className="flex gap-4 text-white/60">
                  <Video className="h-4 w-4" />
                  <Phone className="h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {testimonials[0].content?.map((msg, idx) => (
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

            {/* Video 1 */}
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

             {/* Review 1 */}
             <div className="bg-white border border-[#e2e8f0] rounded-[24px] p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#48bb78]">★</span>
                  ))}
                </div>
                <p className="text-[#4A5568] text-[16px] leading-[1.6] mb-6">
                  &quot;One of the greatest experience ever. I found Telegram integrated feature very usefull. As it totally automates my business also the support is pretty good.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={testimonials[5].avatar!} alt="Prasun B" width={40} height={40} className="object-cover" />
                  </div>
                  <span className="font-bold text-black text-[16px]">Prasun B</span>
                </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
             {/* Large Video 2 */}
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

            {/* Marion Singapore Chat */}
            <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-600">
                  <Image src={testimonials[4].avatar!} alt="Marion" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Marion Singapore</p>
                </div>
                <div className="flex gap-4 text-white/60">
                   <i className="lucide-video h-4 w-4" />
                   <i className="lucide-phone h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {testimonials[4].content?.map((msg, idx) => (
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

            {/* Video Placeholder 3 */}
            <div className="rounded-[24px] overflow-hidden bg-[#2a2a2a] aspect-[9/13] relative shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                 </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
             {/* Video Placeholder 4 */}
             <div className="rounded-[24px] overflow-hidden bg-[#1f2937] aspect-[9/11] relative shadow-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                 </div>
              </div>
            </div>

            {/* Sidhi Creator Chat */}
            <div className="bg-[#0f172a] rounded-[24px] p-6 shadow-soft flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-500">
                  <Image src={testimonials[6].avatar!} alt="Sidhi" width={40} height={40} className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Sidhi Creator</p>
                </div>
                <div className="flex gap-4 text-white/60">
                   <i className="lucide-video h-4 w-4" />
                   <i className="lucide-phone h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {testimonials[6].content?.map((msg, idx) => (
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

            {/* Review 2 */}
            <div className="bg-white border border-[#e2e8f0] rounded-[24px] p-8 shadow-soft">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#48bb78]">★</span>
                  ))}
                </div>
                <p className="text-[#4A5568] text-[16px] leading-[1.6] mb-6">
                  &quot;SuperProfile&apos;s locked content feature has been a game-changer for me, enabling me to monetize my YouTube channel and grow my earnings.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={testimonials[7].avatar!} alt="Kavyal Sedanni" width={40} height={40} className="object-cover" />
                  </div>
                  <span className="font-bold text-black text-[16px]">Kavyal Sedanni</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;