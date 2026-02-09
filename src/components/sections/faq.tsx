"use client";

import React, { useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/scroll-reveal";

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
      question: "Who can apply for the Hospital Administration Course?",
      answer:
        "The course is open to students, freshers, and working professionals who wish to build a strong foundation in hospital administration. No prior medical background is required. It is suitable for beginners and career-oriented learners interested in healthcare administration.",
    },
    {
      question: "What is the duration of the course?",
      answer:
        "The Hospital Administration Course follows a structured academic schedule. Please contact Edusource HRD Centre directly for the current course duration and batch details.",
    },
    {
      question: "Is the certification government approved?",
      answer:
        "Yes. Upon successful completion, students are awarded a Government Approved Certificate, adding formal recognition and credibility to their qualification. This certification supports academic progression and enhances professional value in healthcare administration-related fields.",
    },
    {
      question: "What are the key subjects covered in this course?",
      answer:
        "The course covers Fundamentals of Hospital Administration, Healthcare Office & Front-Desk Management, Medical Records and Documentation Practices, Hospital Ethics and Professional Conduct, Patient Coordination and Administrative Communication, and Understanding Hospital Systems and Operational Workflow.",
    },
    {
      question: "Does the course guarantee job placement?",
      answer:
        "The Hospital Administration course emphasizes knowledge, responsibility, and professionalism. It is designed to develop administrative competence and confidence. The true value of the course lies in skill development, certified learning, and institutional readiness. Edusource HRD Centre does not make claims related to job placement or employment guarantees.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFFFF] py-[120px] relative px-6 overflow-hidden" id="faq">
      <div className="max-w-[720px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-12">
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
        </ScrollReveal>

        {/* Accordion Container */}
        <ScrollReveal delay={0.2}>
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
        </ScrollReveal>

        {/* Support Link */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-2 text-[#4A5568]">
            <Mail className="w-5 h-5" />
            <p className="m-0 text-[16px]">
              For enquiries, contact us at:{" "}
              <a
                href="mailto:info@edusourcehrd.com"
                className="text-black font-semibold hover:underline transition-all"
              >
                info@edusourcehrd.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
