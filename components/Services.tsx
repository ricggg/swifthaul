"use client";

import { motion } from "framer-motion";
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

const services = [
  {
    icon: Globe,
    title: "International Freight Forwarding",
    description:
      "Air and ocean freight solutions connecting your business to markets in 40+ countries. Full customs clearance and documentation handled by our licensed agents.",
    features: ["Air & ocean freight", "Customs brokerage", "Door-to-door delivery"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    description:
      "Fast, reliable final-leg delivery to your customers' doorsteps. Serving metropolitan and regional areas with same-day and next-day options.",
    features: ["Same-day options", "Proof of delivery", "Live GPS tracking"],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Fulfillment",
    description:
      "Secure, climate-controlled storage facilities with pick-and-pack services. Seamlessly integrated with your e-commerce platform.",
    features: ["E-commerce integration", "Pick & pack", "Inventory management"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    icon: Package,
    title: "Express Parcel Delivery",
    description:
      "Time-sensitive shipments handled with priority routing. Guaranteed delivery windows with real-time updates every step of the way.",
    features: ["Priority routing", "Guaranteed windows", "24/7 support"],
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
  },
  {
    icon: BarChart3,
    title: "Supply Chain Consulting",
    description:
      "Our logistics experts analyze your current supply chain and identify cost-saving opportunities without sacrificing speed or reliability.",
    features: ["Cost analysis", "Route optimization", "Vendor management"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Clock,
    title: "Scheduled Freight Runs",
    description:
      "Dedicated weekly or daily freight lanes between fixed locations. Perfect for manufacturers and distributors with predictable volume.",
    features: ["Fixed schedules", "Dedicated vehicles", "Volume pricing"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            End-to-End Logistics Solutions
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From international freight to your customer's front door — we handle
            every mile with precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-slate-100"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-orange-500 p-2.5 rounded-xl">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-orange-500 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
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