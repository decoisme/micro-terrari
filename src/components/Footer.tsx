"use client";

import { Leaf, Camera, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const quickLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    icon: Camera,
    href: "https://instagram.com/microterrari",
  },
  {
    label: "TikTok",
    icon: ArrowUpRight,
    href: "https://tiktok.com/@microterrari",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/628123456789",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:hello@microterrari.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-gray-200/50 dark:border-accent/8">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="#home" className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-primary dark:text-accent">
                  MicroTerrari
                </span>
              </a>
              <p className="text-sm text-text-muted dark:text-gray-300 leading-relaxed max-w-xs mb-6">
                Bringing nature into everyday spaces through handcrafted
                miniature terrariums. Made with real living plants, moss, and
                natural materials.
              </p>

              {/* Newsletter */}
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-accent/10 text-sm text-text dark:text-gray-300 placeholder-text-muted dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent/20 dark:focus:border-accent/20 transition-all"
                />
                <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark dark:from-accent dark:to-secondary text-white dark:text-primary-dark text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-md hover:shadow-primary/20 dark:hover:shadow-accent/15 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-text dark:text-white uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-bold text-text dark:text-white uppercase tracking-wider mb-5">
                Connect
              </h4>
              <ul className="space-y-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-accent/10 transition-colors duration-300">
                        <social.icon className="w-3.5 h-3.5" />
                      </div>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-accent/8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted dark:text-gray-600">
              Copyright © 2026 MicroTerrari. All rights reserved.
            </p>
            <p className="text-xs text-text-muted dark:text-gray-600">
              Handcrafted with 🌿 in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
