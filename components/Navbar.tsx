"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Track Shipment", href: "/tracking" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ✅ Fixed Logo — clear hierarchy, no clipping */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors flex-shrink-0">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[1.25rem] font-extrabold tracking-tight text-white group-hover:text-white transition-colors whitespace-nowrap"
                style={{ lineHeight: 1.1 }}
              >
                Swift<span className="text-orange-500">Haul</span>
              </span>
              <span className="text-[0.65rem] font-medium tracking-widest uppercase text-slate-400 mt-0.5">
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  pathname === link.href ? "text-orange-500" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+18005559247"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-orange-500 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 800-555-9247
            </a>
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:scale-105 active:scale-100"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-slate-800 mt-2 pt-4 flex flex-col gap-3">
                <a
                  href="tel:+18005559247"
                  className="flex items-center gap-2 px-4 text-sm text-slate-400"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  +1 800-555-9247
                </a>
                <Link
                  href="/contact"
                  className="mx-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-3 rounded-lg transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}