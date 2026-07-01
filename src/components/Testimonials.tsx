"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "My desk feels so much more alive. The MicroTerrari cup sits perfectly next to my monitor and adds such a calming energy to my workspace.",
    author: "Sarah K.",
    role: "Remote Worker",
    rating: 5,
  },
  {
    text: "The perfect little gift for plant lovers. I bought five as wedding favors and everyone was absolutely delighted. Such a unique and thoughtful present.",
    author: "David R.",
    role: "Event Planner",
    rating: 5,
  },
  {
    text: "I never thought something this small could look this beautiful. The attention to detail is incredible — it's like having a tiny forest on my shelf.",
    author: "Maya L.",
    role: "Interior Designer",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/[0.02] -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/5 organic-blob -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Customers
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Real stories from real people who brought a piece of nature into
              their daily lives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.12}>
              <div className="group relative h-full p-8 glass-card rounded-[var(--radius-lg)] hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent/50 dark:text-accent/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-text dark:text-gray-200 text-base leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-text dark:text-white text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-text-muted dark:text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
