"use client";

import { motion } from "framer-motion";
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
      "Every shipment is covered up to $50,000 as standard. Additional coverage available on request — no awkward conversations when things go wrong.",
  },
  {
    icon: Zap,
    title: "Real-Time Tracking Dashboard",
    description:
      "Log into your SwiftHaul portal and see exactly where every shipment is, at any moment. No call-center hold times. Just data.",
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
      "Detailed delivery analytics, cost breakdowns, and route optimization suggestions — helping you reduce logistics spend over time.",
  },
  {
    icon: Lock,
    title: "Secure Chain of Custody",
    description:
      "Tamper-evident sealing, digital handoff signatures, and full audit trails ensure your cargo integrity from origin to destination.",
  },
  {
    icon: RefreshCw,
    title: "Hassle-Free Returns Handling",
    description:
      "Returns are inevitable in e-commerce. Our reverse logistics service turns them into a smooth, cost-effective process for your customers.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                alt="SwiftHaul logistics team"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-extrabold">12+</div>
              <div className="text-sm font-medium opacity-90">Years in logistics</div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-extrabold text-slate-900">98.4%</div>
              <div className="text-xs text-slate-500 font-medium">On-time rate</div>
            </div>
          </motion.div>

          {/* Right: Reasons grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-4">
                Built for Businesses That Can't Afford Delays
              </h2>
              <p className="text-slate-400 text-lg">
                Every feature we've built solves a real problem our clients faced
                with other providers.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500/10 p-2.5 rounded-xl flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                        <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {reason.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
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