"use client";

import { ArrowRight, MessageCircle, Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-primary via-primary-dark to-[#1a3a20] dark:from-[#0a1a0e] dark:via-primary-dark dark:to-[#0d1710] p-12 lg:p-20 text-center border border-transparent dark:border-accent/10">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 dark:bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-primary/10 rounded-full blur-3xl" />
            <div
              className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/10 dark:bg-accent/5 organic-blob"
              style={{ animationDelay: "2s" }}
            />

            {/* Floating leaf decorations */}
            <div className="absolute top-12 left-12 opacity-10">
              <Leaf className="w-16 h-16 text-white dark:text-accent rotate-45" />
            </div>
            <div className="absolute bottom-12 right-12 opacity-10">
              <Leaf className="w-12 h-12 text-white dark:text-accent -rotate-45" />
            </div>

            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6 leading-tight">
                Start Your Tiny
                <br />
                Forest Today.
              </h2>
              <p className="text-white/60 dark:text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Bring a little piece of nature into your daily life with
                MicroTerrari. Handcrafted, sustainable, and designed to inspire
                calm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-accent text-primary dark:text-primary-dark font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-accent/20 hover:scale-105 active:scale-95 text-base"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 border border-white/20 dark:border-accent/15 hover:scale-105 active:scale-95 text-base backdrop-blur-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
