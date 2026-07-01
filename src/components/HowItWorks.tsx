"use client";

import { ShoppingBag, Package, Layers, TreePine } from "lucide-react";
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03] dark:from-primary/[0.02] dark:to-primary/[0.02] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent uppercase tracking-widest mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.15}>
                <div className="group relative text-center">
                  {/* Step number */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 mx-auto rounded-[var(--radius-md)] glass-card flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110 group-hover:bg-primary/10 dark:group-hover:bg-accent/10">
                      <step.icon className="w-8 h-8 text-primary dark:text-accent transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Step badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary dark:bg-accent text-white dark:text-primary text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="sm:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent" />
                    </div>
                  )}

                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed max-w-[240px] mx-auto">
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
