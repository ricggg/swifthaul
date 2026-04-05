"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Webb",
    title: "Supply Chain Director, NovaBuild Ltd.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "SwiftHaul has transformed how we manage freight across our European network. Our on-time rate jumped from 81% to 97% in the first quarter. Our account manager actually knows our business — that's rare.",
  },
  {
    name: "Priya Menon",
    title: "Founder & CEO, KleanCart (E-commerce)",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b608?w=100&q=80",
    rating: 5,
    text: "We were losing customers because of delivery failures with our old provider. Switched to SwiftHaul six months ago. Returns went down 40%, customer reviews went up. I wish we'd made the switch sooner.",
  },
  {
    name: "Daniel Osei",
    title: "Operations Manager, Harborline Manufacturing",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The real-time tracking dashboard alone was worth switching. Our procurement team can see where raw materials are without calling anyone. SwiftHaul just works — exactly what you want from a logistics partner.",
  },
  {
    name: "Sofia Andersen",
    title: "Head of Logistics, TerraFresh Foods",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    rating: 5,
    text: "Temperature-sensitive freight is unforgiving. SwiftHaul's cold chain compliance and the way they handle customs documentation has given us complete confidence in cross-border shipments for the first time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Client Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Real results from real businesses. These aren't cherry-picked — they're
            the standard we hold ourselves to.
          </p>
          <p className="text-xs text-slate-400 mt-2">
            * Testimonials are representative of typical client experiences (demo)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-orange-500 fill-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-500 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}