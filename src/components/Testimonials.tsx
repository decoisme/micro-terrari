"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Meja kerjaku terasa jauh lebih hidup. MicroTerrari cup duduk sempurna di sebelah monitor dan memberi energi tenang ke workspace-ku setiap hari.",
    author: "Nadia Fitriani",
    role: "Content Creator",
    rating: 5,
    gradient: "from-primary to-secondary",
  },
  {
    text: "Hadiah kecil yang sempurna untuk pecinta tanaman. Aku beli lima untuk souvenir acara kantor dan semua orang senang banget. Unik dan thoughtful!",
    author: "Meina Marintan",
    role: "Event Organizer",
    rating: 5,
    gradient: "from-secondary to-accent",
  },
  {
    text: "Nggak nyangka sesuatu sekecil ini bisa sebagus ini. Attention to detail-nya luar biasa — kayak punya hutan kecil di atas rak buku.",
    author: "Muhammad Dinan Ghifari",
    role: "UI/UX Designer",
    rating: 5,
    gradient: "from-accent to-primary",
  },
  {
    text: "Aku suka banget konsep DIY kit-nya. Prosesnya therapeutic dan hasilnya cantik. Sekarang jadi ketagihan bikin terrarium sendiri!",
    author: "Retno Clarashinta",
    role: "Freelance Illustrator",
    rating: 5,
    gradient: "from-earth to-secondary",
  },
  {
    text: "Packaging-nya rapi dan premium. Terrariumnya sampai dalam kondisi sempurna. Langsung jadi focal point di meja belajarku. Highly recommended!",
    author: "Mazaya Azizah",
    role: "Medical Student",
    rating: 5,
    gradient: "from-primary to-accent",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-24" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/[0.02] -z-10" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 dark:bg-secondary/5 organic-blob -z-10" />
      <div className="hidden dark:block absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent/80 uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-secondary bg-clip-text text-transparent">
                Our Customers
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Real stories from real people who brought a piece of nature into
              their daily lives.
            </p>
          </div>
        </ScrollReveal>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-5 lg:mb-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 0.12}>
              <div className="group relative h-full p-7 glass-card rounded-[var(--radius-lg)] hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 dark:hover:border-accent/20">
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote className="w-7 h-7 text-accent/40 dark:text-accent/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-text dark:text-gray-200 text-sm leading-relaxed mb-7 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-text dark:text-gray-100 text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-text-muted dark:text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={(index + 3) * 0.12}>
              <div className="group relative h-full p-7 glass-card rounded-[var(--radius-lg)] hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 dark:hover:border-accent/15">
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote className="w-7 h-7 text-accent/40 dark:text-accent/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-text dark:text-gray-300 text-sm leading-relaxed mb-7 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-text dark:text-gray-100 text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-text-muted dark:text-gray-400 text-xs">
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
