"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Headphones,
  BarChart2,
  Lock,
  RefreshCw,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Cargo Insurance Included",
    description:
      "Every shipment is covered up to $50,000 as standard. Additional coverage up to $500,000 available on request — no awkward conversations when things go wrong.",
  },
  {
    icon: Zap,
    title: "Real-Time Tracking Dashboard",
    description:
      "Log into your SwiftHaul portal and see exactly where every shipment is at any moment. No hold times. Just live data.",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description:
      "You're not a ticket number. Every client gets a named account manager who knows your business and picks up when you call.",
  },
  {
    icon: BarChart2,
    title: "Monthly Performance Reports",
    description:
      "Delivery analytics, cost breakdowns, and route optimization suggestions — helping you reduce logistics spend over time.",
  },
  {
    icon: Lock,
    title: "Secure Chain of Custody",
    description:
      "Tamper-evident sealing, digital handoff signatures, and full audit trails ensure cargo integrity from origin to destination.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns Handling",
    description:
      "Our reverse logistics service turns returns into a smooth, cost-effective process your customers will appreciate.",
  },
];

const reasonVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="why-us">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image with floating stats */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="SwiftHaul logistics operations"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating: years */}
            <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white px-6 py-5 rounded-2xl shadow-2xl">
              <div className="text-4xl font-extrabold leading-none">12+</div>
              <div className="text-sm font-medium opacity-90 mt-1">Years in logistics</div>
            </div>

            {/* Floating: on-time rate */}
            <div className="absolute -top-4 -left-4 bg-white text-slate-900 px-5 py-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-extrabold leading-none">98.4%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">On-time delivery</div>
            </div>
          </motion.div>

          {/* Right: content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="mb-10"
            >
              <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4 leading-tight">
                Built for Businesses That Can't Afford Delays
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Every feature we've built solves a real problem our clients
                faced with other providers.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reasonVariants}
                    className="group flex items-start gap-3"
                  >
                    <div className="bg-orange-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1 leading-snug">
                        {reason.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}