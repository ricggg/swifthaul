"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-orange-500 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-400 rounded-full opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-600 rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Move Smarter?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 2,000+ businesses that trust SwiftHaul with their freight.
            Get your custom quote in under 2 hours — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl text-base transition-all hover:scale-[1.03] active:scale-100 shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18005559247"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 border border-orange-400/50 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all focus:outline-none focus:ring-4 focus:ring-orange-300/40"
            >
              <Phone className="w-5 h-5" />
              Call +1 800-555-9247
            </a>
          </div>

          <p className="text-orange-200 text-sm mt-7">
            Mon–Fri, 7am–7pm EST · Emergency freight line available 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}