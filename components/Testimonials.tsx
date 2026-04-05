"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const testimonials = [
  {
    name: "Marcus Webb",
    title: "Supply Chain Director",
    company: "NovaBuild Ltd.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    rating: 5,
    text: "SwiftHaul transformed our European freight operations. Our on-time delivery rate jumped from 81% to 97% in the first quarter. Our account manager actually knows our business — that's rare in this industry.",
  },
  {
    name: "Priya Menon",
    title: "Founder & CEO",
    company: "KleanCart (E-commerce)",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b608?w=120&q=80",
    rating: 5,
    text: "We were losing customers due to failed deliveries with our previous provider. Six months after switching to SwiftHaul, returns dropped 40% and our review scores went up significantly.",
  },
  {
    name: "Daniel Osei",
    title: "Operations Manager",
    company: "Harborline Manufacturing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    rating: 5,
    text: "The real-time tracking dashboard alone was worth making the switch. Our team can see exactly where raw materials are without calling anyone. SwiftHaul just works — and that's everything in logistics.",
  },
  {
    name: "Sofia Andersen",
    title: "Head of Logistics",
    company: "TerraFresh Foods",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80",
    rating: 5,
    text: "Temperature-sensitive freight is unforgiving. SwiftHaul's cold chain compliance and customs documentation have given us complete confidence in cross-border shipments for the first time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" id="testimonials">
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
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real results from real businesses — the standard we hold ourselves to
            on every single shipment.
          </p>
          {/* ✅ Clear demo label */}
          <p className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full mt-4">
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            Concept demo — testimonials are illustrative of typical client results
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col gap-5"
            >
              {/* Top row: quote icon + stars */}
              <div className="flex items-start justify-between">
                <Quote className="w-8 h-8 text-orange-100 fill-orange-100 flex-shrink-0" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-slate-700 leading-relaxed text-[0.95rem] flex-1">
                "{t.text}"
              </p>

              {/* ✅ Fixed author row — consistent alignment */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={`${t.name} photo`}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-100 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 text-sm leading-tight truncate">
                    {t.name}
                  </div>
                  <div className="text-slate-500 text-xs leading-tight mt-0.5 truncate">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}