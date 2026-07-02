"use client";

import { ShoppingBag, Package, Layers, TreePine, ArrowDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: ShoppingBag,
    title: "Choose Your Product",
    description: "Browse our collection and select the perfect terrarium for your needs.",
    step: "01",
  },
  {
    icon: Package,
    title: "Receive Your Package",
    description: "Your terrarium arrives carefully packaged to ensure everything stays fresh and intact.",
    step: "02",
  },
  {
    icon: Layers,
    title: "Arrange Your Ecosystem",
    description: "Follow our simple guide to layer your growing medium, stones, moss, and plants.",
    step: "03",
  },
  {
    icon: TreePine,
    title: "Enjoy Your Forest",
    description: "Watch your miniature ecosystem thrive and bring life to your space every day.",
    step: "04",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03] dark:from-primary/[0.03] dark:via-transparent dark:to-primary/[0.03] -z-10" />
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent/80 uppercase tracking-widest mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-secondary bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Getting started with your own tiny forest is incredibly simple.
              Four easy steps to bring nature closer.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line (desktop) — dashed style */}
          <div className="hidden lg:block absolute top-[40px] left-[12.5%] right-[12.5%] h-px -z-0">
            <div className="w-full h-full border-t border-dashed border-accent/30 dark:border-accent/15" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.15}>
                <div className="group relative text-center">
                  {/* Step number */}
                  <div className="relative z-10 mb-8">
                    <div className="w-20 h-20 mx-auto rounded-[var(--radius-md)] glass-card flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10 dark:group-hover:shadow-accent/10 group-hover:scale-110 group-hover:bg-primary/10 dark:group-hover:bg-accent/8 dark:group-hover:border-accent/20">
                      <step.icon className="w-8 h-8 text-primary dark:text-accent transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Step badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary dark:from-accent dark:to-secondary text-white dark:text-primary-dark text-xs font-bold flex items-center justify-center shadow-md shadow-primary/20 dark:shadow-accent/20">
                      {step.step}
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden flex justify-center my-2 mb-6">
                      <ArrowDown className="w-5 h-5 text-accent/40 dark:text-accent/25" />
                    </div>
                  )}

                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text dark:text-gray-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-300 leading-relaxed max-w-[240px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
