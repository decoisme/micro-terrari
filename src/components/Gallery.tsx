"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    src: "/gallery-workspace.png",
    alt: "Modern workspace with MicroTerrari terrarium",
    label: "Workspace",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery-gift.png",
    alt: "MicroTerrari gift packaging",
    label: "Gift Ready",
    span: "",
  },
  {
    src: "/gallery-moss.png",
    alt: "Close-up of living moss in terrarium",
    label: "Living Moss",
    span: "",
  },
  {
    src: "/gallery-lifestyle.png",
    alt: "Terrariums in lifestyle home setting",
    label: "Home Decor",
    span: "md:col-span-2",
  },
  {
    src: "/gallery-multiple.png",
    alt: "Collection of miniature terrariums",
    label: "Collection",
    span: "",
  },
  {
    src: "/gallery-macro.png",
    alt: "Macro shot of miniature terrarium ecosystem",
    label: "Micro World",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent uppercase tracking-widest mb-4">
              Visual Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Product{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Explore our terrariums in real-world settings. Every piece tells a
              story of nature, craftsmanship, and calm.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.src}
              delay={index * 0.1}
              className={item.span}
            >
              <div className="gallery-item group relative h-full min-h-[240px] cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Overlay */}
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                      MicroTerrari
                    </span>
                    <h4 className="text-white text-lg font-bold font-[family-name:var(--font-heading)]">
                      {item.label}
                    </h4>
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
