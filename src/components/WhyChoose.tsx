"use client";

import { Leaf, Hand, Gift, Recycle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Leaf,
    title: "Living Plants",
    description:
      "Real moss and live plants carefully selected for healthy, long-lasting growth inside your terrarium.",
    gradient: "from-primary/10 to-accent/10",
    darkGradient: "dark:from-primary/8 dark:to-accent/5",
    iconBg: "bg-primary/15 dark:bg-primary/20",
    iconColor: "text-primary dark:text-accent",
    glowColor: "group-hover:shadow-primary/10 dark:group-hover:shadow-accent/10",
  },
  {
    icon: Hand,
    title: "Handmade",
    description:
      "Each terrarium is assembled by hand with meticulous attention to every detail and composition.",
    gradient: "from-secondary/10 to-primary/10",
    darkGradient: "dark:from-secondary/6 dark:to-primary/5",
    iconBg: "bg-secondary/15 dark:bg-secondary/15",
    iconColor: "text-secondary dark:text-secondary",
    glowColor: "group-hover:shadow-secondary/10 dark:group-hover:shadow-secondary/10",
  },
  {
    icon: Gift,
    title: "Perfect Gift",
    description:
      "Ideal for birthdays, anniversaries, graduation, office desks, and home decoration. Truly memorable.",
    gradient: "from-earth/10 to-secondary/10",
    darkGradient: "dark:from-earth/6 dark:to-secondary/5",
    iconBg: "bg-earth/15 dark:bg-earth/15",
    iconColor: "text-earth dark:text-earth-light",
    glowColor: "group-hover:shadow-earth/10 dark:group-hover:shadow-earth/10",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description:
      "Built using natural materials with reusable containers. Beautiful for you, kind to the planet.",
    gradient: "from-accent/10 to-primary/10",
    darkGradient: "dark:from-accent/6 dark:to-primary/5",
    iconBg: "bg-accent/20 dark:bg-accent/15",
    iconColor: "text-primary dark:text-accent",
    glowColor: "group-hover:shadow-accent/10 dark:group-hover:shadow-accent/10",
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Section divider top */}
      <div className="section-divider mb-24" />
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl -z-10" />
      <div className="hidden dark:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent/80 uppercase tracking-widest mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Crafted for Those Who{" "}
              <span className="bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-secondary bg-clip-text text-transparent">
                Appreciate Nature
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Every MicroTerrari product is thoughtfully designed to bring the
              beauty of nature into your everyday spaces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div
                className={`group relative h-full p-8 rounded-[var(--radius-lg)] bg-gradient-to-br ${feature.gradient} ${feature.darkGradient} border border-white/60 dark:border-accent/10 hover:shadow-xl ${feature.glowColor} transition-all duration-500 hover:-translate-y-1 dark:hover:border-accent/20`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-[var(--radius-md)] ${feature.iconBg} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${feature.iconColor}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
