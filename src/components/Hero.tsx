"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 noise-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-white to-accent/10 dark:from-[#070d09] dark:via-[#0a1a0e] dark:to-[#0d1710]" />

        {/* Organic blobs — larger and more vivid in dark mode */}
        <div className="absolute top-10 -right-32 w-[600px] h-[600px] bg-accent/20 dark:bg-primary/20 organic-blob" />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-secondary/15 dark:bg-secondary/12 organic-blob"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-primary/5 dark:bg-accent/8 organic-blob"
          style={{ animationDelay: "5s" }}
        />
        {/* Extra ambient glow for dark mode */}
        <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-glow" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary dark:text-accent">
                <Sparkles className="w-4 h-4" />
                Handcrafted with Love
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] tracking-tight">
                <span className="text-text dark:text-gray-50">Bring a Living</span>
                <br />
                <span className="text-text dark:text-gray-50">Ecosystem to </span>
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent dark:from-accent dark:via-secondary dark:to-accent-bright bg-clip-text text-transparent">
                    Your Space.
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C40 2 80 2 100 5C120 8 160 10 198 4"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#355E3B" />
                        <stop offset="1" stopColor="#A8D5BA" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover handcrafted miniature terrariums made with real moss and
                live plants. Designed to bring calm, beauty, and nature into your
                home or workspace.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark dark:from-accent dark:to-secondary text-white dark:text-primary-dark font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 dark:hover:shadow-accent/20 hover:scale-105 active:scale-95 text-base"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card hover:bg-primary/5 dark:hover:bg-accent/5 text-primary dark:text-accent font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-base"
                >
                  Explore Collection
                </a>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">500+</div>
                  <div className="text-xs text-text-muted dark:text-gray-500 mt-0.5">Happy Customers</div>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-accent/15" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">100%</div>
                  <div className="text-xs text-text-muted dark:text-gray-500 mt-0.5">Natural Materials</div>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-accent/15" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">4.9★</div>
                  <div className="text-xs text-text-muted dark:text-gray-500 mt-0.5">Average Rating</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Product Image */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/10 dark:from-accent/15 dark:via-primary/10 dark:to-secondary/8 rounded-[var(--radius-xl)] blur-3xl scale-110" />

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="relative rounded-[var(--radius-xl)] overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-black/40 dark:ring-1 dark:ring-accent/10">
                  <Image
                    src="/hero-terrarium.png"
                    alt="MicroTerrari Premium Miniature Terrarium"
                    width={700}
                    height={700}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent dark:from-black/30 dark:via-transparent" />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-6"
              >
                <div className="glass-card glow-card rounded-[var(--radius-md)] px-4 py-3 shadow-lg dark:shadow-xl dark:shadow-black/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/30 dark:bg-accent/15 flex items-center justify-center text-lg">
                    🌿
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text dark:text-gray-100">100% Natural</div>
                    <div className="text-xs text-text-muted dark:text-gray-500">Real Living Plants</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -top-4 -right-4 sm:top-8 sm:-right-6"
              >
                <div className="glass-card glow-card rounded-[var(--radius-md)] px-4 py-3 shadow-lg dark:shadow-xl dark:shadow-black/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-accent/10 flex items-center justify-center text-lg">
                    ✨
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text dark:text-gray-100">Handcrafted</div>
                    <div className="text-xs text-text-muted dark:text-gray-500">Made with Care</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
