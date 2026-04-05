"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  origin: "",
  destination: "",
  message: "",
};

const services = [
  "International Freight Forwarding",
  "Last-Mile Delivery",
  "Warehousing & Fulfillment",
  "Express Parcel Delivery",
  "Supply Chain Consulting",
  "Scheduled Freight Runs",
  "Other / Not sure yet",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
            Request a Free Quote
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Tell us about your shipment and we'll get back to you with a
            transparent, tailored quote within 2 business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+1 800-555-9247", "Mon–Fri, 7am–7pm EST"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["hello@swifthaul.com", "Response within 2 hours"],
              },
              {
                icon: MapPin,
                title: "Head Office",
                lines: ["1240 Harbor Blvd, Suite 300", "Los Angeles, CA 90021"],
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["Mon–Fri: 7:00 AM – 7:00 PM EST", "Emergency line: 24/7"],
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="bg-orange-50 p-2.5 rounded-xl flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">
                      {item.title}
                    </div>
                    {item.lines.map((line, i) => (
                      <div key={i} className="text-slate-500 text-sm">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Trust note */}
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <div className="text-4xl font-extrabold text-orange-500 mb-1">2hr</div>
              <div className="font-semibold mb-2">Guaranteed response time</div>
              <p className="text-slate-400 text-sm">
                We don't run ticket systems. Your inquiry goes directly to a human
                logistics specialist who knows how to help.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      Quote Request Received!
                    </h2>
                    <p className="text-slate-600 max-w-sm mb-6">
                      Thank you, <strong>{form.name}</strong>. A SwiftHaul logistics
                      specialist will contact you at{" "}
                      <strong>{form.email}</strong> within 2 business hours.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-sm text-orange-700 font-medium">
                      Reference: #SH-{Math.floor(Math.random() * 90000) + 10000}
                    </div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initialForm);
                      }}
                      className="mt-6 text-sm text-slate-500 hover:text-orange-500 transition-colors"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Marcus Webb"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="NovaBuild Ltd."
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="marcus@novabuild.com"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 312-555-0192"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Origin (City / Country)
                        </label>
                        <input
                          name="origin"
                          value={form.origin}
                          onChange={handleChange}
                          placeholder="Chicago, IL, USA"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Destination (City / Country)
                        </label>
                        <input
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="London, UK"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your shipment — weight, dimensions, timeline, any special requirements..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-100 flex items-center justify-center gap-2 text-base"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="w-5 h-5" />
                          </motion.div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Quote Request
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      No commitment required · Response within 2 business hours ·
                      Your data is never shared
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}