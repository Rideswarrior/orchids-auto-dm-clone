import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Help', href: 'mailto:care@superprofile.bio' },
    { label: 'Partner Program', href: '/partners' },
    { label: 'Changelog', href: '/changelog' },
  ];

  return (
    <footer className="w-full bg-white pt-20 pb-12 sm:pt-32 sm:pb-16 font-inter">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 pb-12">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-[#4A5568] hover:text-[#0056E0] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A5568] hover:text-[#0056E0] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A5568] hover:text-[#0056E0] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A5568] hover:text-[#0056E0] transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E2E8F0]" />

        {/* Copyright Text */}
        <div className="pt-10">
          <p className="text-[14px] text-[#4A5568] m-0 text-center md:text-left leading-relaxed">
            © 2025 SuperProfile by Cosmofeed Technologies Pvt. Ltd. (formerly Stella Shared Spaces Pvt. Ltd.)
          </p>
        </div>
      </div>

      {/* Floating Launch Banner (Bottom Center) - Per High Level Design Order 12 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glassmorphism px-5 py-3 rounded-full shadow-soft border border-[#E2E8F0] flex items-center space-x-2 whitespace-nowrap">
          <span className="text-[13px] sm:text-[14px] font-medium text-black">
            🎉 <strong>New Launch</strong> - Use AutoDM to send unlimited DM Automations on Instagram
          </span>
          <a
            href="https://superprofile.bio/creator/auto-dm"
            className="text-[13px] sm:text-[14px] font-semibold text-[#0056E0] underline"
          >
            Start now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;