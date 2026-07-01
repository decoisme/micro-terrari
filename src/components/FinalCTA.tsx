"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-primary via-primary-dark to-primary p-12 lg:p-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div
              className="absolute top-1/2 left-1/4 w-40 h-40 bg-secondary/10 organic-blob"
              style={{ animationDelay: "2s" }}
            />

            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-5"
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
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Bring a little piece of nature into your daily life with
                MicroTerrari. Handcrafted, sustainable, and designed to inspire
                calm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:scale-105 active:scale-95 text-base"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 border border-white/20 hover:scale-105 active:scale-95 text-base backdrop-blur-sm"
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
