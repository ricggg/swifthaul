"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2000, suffix: "+", label: "Businesses Served" },
  { value: 98.4, suffix: "%", label: "On-Time Delivery Rate", decimal: true },
  { value: 40, suffix: "+", label: "Countries Covered" },
  { value: 1.2, suffix: "M+", label: "Shipments Delivered", decimal: true },
];

function Counter({
  value,
  suffix,
  decimal,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function ProofBar() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                />
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-12 pt-10 border-t border-slate-700">
          <p className="text-center text-slate-500 text-sm mb-8">
            Trusted by leading companies across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["DHL Global", "FedEx Partner", "Amazon SFP", "Shopify Plus", "Maersk", "DB Schenker"].map(
              (logo) => (
                <div
                  key={logo}
                  className="text-slate-400 font-bold text-sm tracking-widest uppercase"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}