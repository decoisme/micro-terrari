"use client";

import Image from "next/image";
import { ShoppingCart, Wrench, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "MicroTerrari Cup",
    price: "Rp30.000",
    description:
      "A ready-to-display miniature terrarium designed for effortless decoration. Simply place it on your desk and enjoy nature.",
    image: "/terrarium-cup.png",
    includes: [
      "Living Moss",
      "Live Plants",
      "Natural Stones",
      "Growing Medium",
      "Transparent Cup",
    ],
    cta: "Buy Now",
    ctaIcon: ShoppingCart,
    accent: "primary",
    badge: "Best Seller",
  },
  {
    name: "MicroTerrari Kit",
    price: "Rp30.000",
    description:
      "A DIY terrarium kit for customers who enjoy building their own miniature ecosystem. A creative experience.",
    image: "/terrarium-kit.png",
    includes: [
      "Growing Medium",
      "Natural Stones",
      "Living Moss",
      "Live Plants",
      "Ziplock Packaging",
    ],
    cta: "Build Your Own",
    ctaIcon: Wrench,
    accent: "earth",
    badge: "DIY Kit",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent dark:via-accent/[0.02] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block text-sm font-semibold text-secondary dark:text-accent uppercase tracking-widest mb-4">
              Our Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
              Choose between a ready-to-display terrarium or a creative DIY
              experience. Both crafted with premium natural materials.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.name}
              delay={index * 0.15}
              direction={index === 0 ? "left" : "right"}
            >
              <div className="group relative h-full glass-card rounded-[var(--radius-xl)] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Badge */}
                <div
                  className={`absolute top-6 left-6 z-10 px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                    product.accent === "primary" ? "bg-primary" : "bg-earth"
                  }`}
                >
                  {product.badge}
                </div>

                {/* Image */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-accent/10 to-secondary/5 dark:from-primary/10 dark:to-accent/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-[#1a2a1e]/80" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text dark:text-white">
                        {product.name}
                      </h3>
                      <p className="text-text-muted dark:text-gray-400 text-sm mt-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span
                      className={`text-3xl font-bold ${
                        product.accent === "primary"
                          ? "text-primary dark:text-accent"
                          : "text-earth dark:text-earth-light"
                      }`}
                    >
                      {product.price}
                    </span>
                  </div>

                  {/* Includes */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider mb-3">
                      Includes
                    </p>
                    <div className="space-y-2">
                      {product.includes.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-text dark:text-gray-300"
                        >
                          <Check
                            className={`w-4 h-4 flex-shrink-0 ${
                              product.accent === "primary"
                                ? "text-primary dark:text-accent"
                                : "text-earth dark:text-earth-light"
                            }`}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 text-base text-white ${
                      product.accent === "primary"
                        ? "bg-primary hover:bg-primary-dark hover:shadow-primary/25"
                        : "bg-earth hover:bg-earth-light hover:shadow-earth/25"
                    }`}
                  >
                    <product.ctaIcon className="w-5 h-5" />
                    {product.cta}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
