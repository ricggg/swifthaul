"use client";

import { motion } from "framer-motion";
import { ClipboardList, CalculatorIcon, PackageCheck, MapPin } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Request a Quote",
    description:
      "Fill out our quick online form with your shipment details — origin, destination, weight, and timeline. No phone tag required.",
  },
  {
    icon: CalculatorIcon,
    step: "02",
    title: "Receive Your Custom Plan",
    description:
      "Our team reviews your requirements and sends back a tailored logistics plan with transparent pricing within 2 business hours.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "We Pick Up & Process",
    description:
      "SwiftHaul handles pickup, documentation, and routing. Your shipment is loaded and moving — with a tracking ID sent instantly.",
  },
  {
    icon: MapPin,
    step: "04",
    title: "Track & Receive",
    description:
      "Monitor your shipment live from our tracking portal. Get automated updates via SMS or email until it's safely delivered.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            From Quote to Delivery in 4 Steps
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We've removed every friction point so your logistics runs on
            autopilot from day one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/8 right-1/8 h-0.5 bg-orange-100 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-50 border-2 border-orange-200 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Icon className="w-7 h-7 text-orange-500" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}