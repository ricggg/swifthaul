"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with businesses of all sizes — from e-commerce startups shipping 50 parcels a month to manufacturers moving full container loads internationally. If you have freight, we have a solution.",
  },
  {
    q: "How quickly can you provide a quote?",
    a: "Standard quotes are returned within 2 business hours. For complex or multi-leg shipments, we aim for same business day. You'll receive a detailed breakdown with no hidden fees.",
  },
  {
    q: "Do you offer cargo insurance?",
    a: "Yes. All shipments include standard coverage up to $50,000 at no extra charge. Extended coverage up to $500,000 is available for high-value cargo — ask your account manager.",
  },
  {
    q: "Can I track my shipments in real time?",
    a: "Absolutely. Every shipment gets a tracking ID visible on our online portal. You can also set up automated SMS and email notifications at key delivery milestones.",
  },
  {
    q: "What happens if a shipment is delayed or damaged?",
    a: "We notify you immediately. Our claims process is straightforward — submit a form, and our team resolves it within 5 business days. We don't hide behind fine print.",
  },
  {
    q: "Do you handle customs clearance for international shipments?",
    a: "Yes. Our licensed customs brokers handle all import/export documentation, tariff classification, and duties payment on your behalf across 40+ countries.",
  },
  {
    q: "Is there a minimum shipment volume to work with SwiftHaul?",
    a: "No minimum volume required. We offer flexible plans whether you ship once a week or multiple times per day. Volume discounts apply automatically as you scale.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <span className="text-orange-500 font-semibold text-xs uppercase tracking-widest">
            Common Questions
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Everything you need to know before getting started.{" "}
            <a
              href="/contact"
              className="text-orange-500 font-semibold hover:underline focus:outline-none focus:underline"
            >
              Still have questions? Contact us.
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.04,
                duration: 0.4,
                ease: "easeOut" as const,
              }}
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === i
                  ? "border-orange-200 bg-orange-50/30"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-orange-50/50 focus:outline-none focus:bg-orange-50/50"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-900 pr-4 text-sm sm:text-[0.95rem] leading-snug">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-4 h-4 text-orange-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" as const }}
                  >
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-orange-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}