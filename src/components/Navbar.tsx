"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ShoppingBag, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 glass shadow-lg shadow-black/10 dark:shadow-black/30"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/30">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-primary dark:text-accent tracking-tight">
              MicroTerrari
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-all duration-300 rounded-full hover:bg-primary/5 dark:hover:bg-accent/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/5 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark dark:from-accent/90 dark:to-secondary text-white dark:text-primary-dark text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-accent/20 hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] inset-x-0 z-40 p-4 lg:hidden"
          >
            <div className="glass-card rounded-[var(--radius-lg)] p-4 shadow-xl dark:shadow-2xl dark:shadow-black/40">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-text-muted dark:text-gray-400 hover:text-primary dark:hover:text-accent hover:bg-primary/5 dark:hover:bg-accent/5 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-200/50 dark:border-accent/10">
                <a
                  href="#products"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark dark:from-accent/90 dark:to-secondary text-white dark:text-primary-dark text-sm font-semibold rounded-full transition-all duration-300"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
