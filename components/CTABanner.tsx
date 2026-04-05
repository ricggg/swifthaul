"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to Move Smarter?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Join 2,000+ businesses that trust SwiftHaul with their freight.
            Get your custom quote in under 2 hours — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 active:scale-100 shadow-lg"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18005559247"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 border border-orange-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +1 800-555-9247
            </a>
          </div>

          <p className="text-orange-200 text-sm mt-6">
            Available Monday–Friday, 7am–7pm EST · Response within 2 business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}