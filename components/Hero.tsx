"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock4, Globe2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.55,
      ease: "easeOut" as const,
    },
  }),
};

const trustBadges = [
  { icon: ShieldCheck, text: "No hidden fees. Ever." },
  { icon: Clock4,      text: "98.4% on-time delivery rate" },
  { icon: Globe2,      text: "40+ countries covered" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
          alt="Logistics warehouse operations"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/50" />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500 z-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            Trusted by 2,000+ businesses in 40+ countries
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Freight That Arrives{" "}
            <span className="text-orange-500">On Time.</span>
            <br className="hidden sm:block" /> Every Time.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
          >
            SwiftHaul connects your business to reliable freight forwarding,
            last-mile delivery, and real-time shipment tracking — so you focus
            on growth, not logistics headaches.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.03] active:scale-100 shadow-xl shadow-orange-500/25 focus:outline-none focus:ring-4 focus:ring-orange-500/40"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tracking"
              className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/15 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Track a Shipment
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-x-7 gap-y-3"
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-slate-400 text-sm"
              >
                <Icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}