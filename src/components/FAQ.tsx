"use client";

import { useState } from "react";
import { ChevronDown, Droplets, Clock, Sprout, Gift, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How often should I water it?",
    answer:
      "For closed terrariums, you rarely need to water — the ecosystem recycles moisture. For open terrariums, spray lightly every 5–7 days. If you see condensation on the glass, the moisture level is just right.",
    icon: Droplets,
  },
  {
    question: "How long do the plants live?",
    answer:
      "With proper care, your terrarium plants can thrive for months to years. Moss is especially resilient and can live indefinitely in the right conditions. The key is indirect light and minimal watering.",
    icon: Clock,
  },
  {
    question: "Can beginners take care of it?",
    answer:
      "Absolutely! Our terrariums are designed to be low-maintenance and beginner-friendly. Each purchase comes with a simple care guide. It's one of the easiest ways to start your plant journey.",
    icon: Sprout,
  },
  {
    question: "Is it suitable as a gift?",
    answer:
      "Yes! MicroTerrari makes a unique, thoughtful, and memorable gift for any occasion — birthdays, anniversaries, graduation, housewarming, or just to brighten someone's day. We also offer gift packaging.",
    icon: Gift,
  },
  {
    question: "Do you ship throughout Indonesia?",
    answer:
      "Yes, we ship nationwide across Indonesia. We use careful packaging to ensure your terrarium arrives fresh and intact. Local delivery in select cities is also available for same-day or next-day delivery.",
    icon: Truck,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl -z-10" />
      <div className="hidden dark:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent/80 uppercase tracking-widest mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-secondary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Everything you need to know about caring for and enjoying your
              MicroTerrari.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
                  <div className={`glass-card rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-accent/5 ${openIndex === index ? 'dark:border-accent/20' : ''}`}>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-primary/15 dark:bg-accent/10' : 'bg-gray-100 dark:bg-white/5'}`}>
                      <faq.icon className={`w-4 h-4 transition-colors duration-300 ${openIndex === index ? 'text-primary dark:text-accent' : 'text-text-muted dark:text-gray-500'}`} />
                    </div>
                    <span className="text-base font-semibold text-text dark:text-gray-100 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? 'text-primary dark:text-accent' : 'text-text-muted dark:text-gray-500'}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 pl-[4.25rem]">
                        <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
