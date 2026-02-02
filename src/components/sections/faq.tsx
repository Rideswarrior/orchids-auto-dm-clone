"use client";

import React, { useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-[#E2E8F0] last:border-0 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:bg-black/5 rounded-lg px-2"
        aria-expanded={isOpen}
      >
        <span className="text-[18px] font-medium text-black leading-tight">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-[#4A5568] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pt-1 px-2 text-[16px] text-[#4A5568] leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is AutoDM free?",
      answer:
        "Yes! You can start sending unlimited DMs, for Post Replies, for free — no credit card needed. Advanced features like \"DM Automations on replies on Stories and Lives\", “Ask for a Follow to Get DM”, and \"Email capture\" are available on our paid plan.",
    },
    {
      question: "Is this tool safe to use with Instagram?",
      answer:
        "Totally. We’re an official Meta Tech Partner, which means AutoDM is built on Instagram’s approved APIs and follows all platform guidelines. No hacks. No shadowbans.",
    },
    {
      question: "Do I need any tech skills to set this up?",
      answer:
        "Nope. If you can post a reel, you can use AutoDM. Setup takes under a minute — no code, no Zapier, no confusion.",
    },
    {
      question: "Can I customize the message for each post or reel?",
      answer:
        "Yes! You can create unique DM flows for every post, story, or campaign. Personalize messages based on what your audience interacts with.",
    },
    {
      question: "Why AutoDM instead of tools like ManyChat?",
      answer:
        "SuperProfile gives you everything in one place — from AutoDM to email nurture to product selling — without the complexity or cost of juggling 5 different tools. Plus, it’s made specifically for creators.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFFFF] py-[120px] relative px-6 overflow-hidden">
      {/* Container with rounded corners as seen in the screenshot background */}
      <div className="max-w-[720px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          {/* Badge */}
          <div className="bg-[#F7F9FC] border border-[#E2E8F0] px-3 py-1 rounded-full flex items-center gap-2 mb-6">
            <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center">
                <HelpCircle className="w-3 h-3 text-white" />
            </div>
            <span className="text-[12px] font-semibold text-[#4A5568] uppercase tracking-wide">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-[48px] md:text-[56px] font-bold text-black text-center leading-[1.1] mb-12">
            Questions? Answers!
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#E2E8F0] p-4 md:p-6 mb-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Support Link */}
        <div className="flex items-center justify-center gap-2 text-[#4A5568]">
          <Mail className="w-5 h-5" />
          <p className="m-0 text-[16px]">
            Feel free to mail us for any enquiries:{" "}
            <a
              href="mailto:care@superprofile.bio"
              className="text-black font-semibold hover:underline transition-all"
            >
              care@superprofile.bio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}