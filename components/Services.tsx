"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import {
  Truck,
  Package,
  Globe,
  Warehouse,
  BarChart3,
  Clock,
  ArrowRight,
} from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.09,
      duration: 0.45,
      ease: "easeOut" as const,
    },
  }),
};

const services = [
  {
    icon: Globe,
    title: "International Freight Forwarding",
    description:
      "Air and ocean freight connecting your business to 40+ countries. Full customs clearance and documentation handled by our licensed agents.",
    features: ["Air & ocean freight", "Customs brokerage", "Door-to-door delivery"],
    // ✅ Container port — commercial, industrial
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    description:
      "Fast, reliable final-leg delivery to your customers' doorsteps with same-day and next-day options across metropolitan and regional areas.",
    features: ["Same-day options", "Proof of delivery", "Live GPS tracking"],
    // ✅ Delivery driver at van — realistic, commercial
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    description:
      "Secure, climate-controlled storage with pick-and-pack services. Seamlessly integrated with your e-commerce platform.",
    features: ["E-commerce integration", "Pick & pack", "Inventory management"],
    // ✅ Real warehouse shelving — industrial
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    icon: Package,
    title: "Express Parcel Delivery",
    description:
      "Time-sensitive shipments handled with priority routing. Guaranteed delivery windows with real-time updates every step of the way.",
    features: ["Priority routing", "Guaranteed windows", "24/7 support"],
    // ✅ Parcels on conveyor — supply chain
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?w=600&q=80",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Consulting",
    description:
      "Our logistics experts analyze your supply chain and identify cost-saving opportunities without sacrificing speed or reliability.",
    features: ["Cost analysis", "Route optimization", "Vendor management"],
    // ✅ Business analytics meeting — professional
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Clock,
    title: "Scheduled Freight Runs",
    description:
      "Dedicated daily or weekly freight lanes between fixed locations. Perfect for manufacturers with predictable volume needs.",
    features: ["Fixed schedules", "Dedicated vehicles", "Volume pricing"],
    // ✅ Fleet of trucks on highway — logistics
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50" id="services">
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
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
            End-to-End Logistics Solutions
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From international freight to your customer's front door — we handle
            every mile with precision and accountability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-orange-500 p-2 rounded-lg shadow-lg">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[1.05rem] font-bold text-slate-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-orange-500 font-semibold text-sm group/link hover:gap-3 transition-all focus:outline-none focus:underline"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}