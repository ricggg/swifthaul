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
    a: "Absolutely. Every shipment gets a tracking ID and is visible on our online portal. You can also set up automated SMS and email notifications at key milestones.",
  },
  {
    q: "What happens if a shipment is delayed or damaged?",
    a: "We notify you immediately. Our claims process is straightforward — submit a form, and our team handles it within 5 business days. We don't hide behind fine print.",
  },
  {
    q: "Do you handle customs clearance for international shipments?",
    a: "Yes. Our licensed customs brokers handle all import/export documentation, tariff classification, and duties payment on your behalf. We cover 40+ countries.",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Everything you need to know before getting started. Still have questions?{" "}
            <a href="/contact" className="text-orange-500 font-medium hover:underline">
              Contact our team.
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4 text-sm sm:text-base">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
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