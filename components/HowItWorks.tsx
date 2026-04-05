"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ClipboardList, Calculator, PackageCheck, MapPin } from "lucide-react";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const steps = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    description:
      "Fill out our quick form with your shipment details — origin, destination, weight, and timeline. No phone tag. No sales pressure.",
  },
  {
    icon: Calculator,
    title: "Receive Your Plan",
    description:
      "Our team reviews your requirements and delivers a tailored logistics plan with fully transparent pricing within 2 business hours.",
  },
  {
    icon: PackageCheck,
    title: "We Pick Up & Process",
    description:
      "SwiftHaul handles pickup, documentation, and routing. Your shipment moves immediately with a tracking ID sent to you instantly.",
  },
  {
    icon: MapPin,
    title: "Track & Receive",
    description:
      "Monitor your shipment live from our portal. Get automated SMS and email updates at every milestone until safe delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
            From Quote to Delivery in 4 Steps
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We've removed every friction point so your logistics runs on
            autopilot from day one.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-orange-100 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepVariants}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-orange-50 border-2 border-orange-100 rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-orange-500 text-white text-xs font-extrabold rounded-full flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}