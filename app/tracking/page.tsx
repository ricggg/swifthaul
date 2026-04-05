"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  AlertCircle,
} from "lucide-react";

interface TrackingEvent {
  time: string;
  location: string;
  status: string;
  completed: boolean;
}

interface ShipmentData {
  id: string;
  status: "in-transit" | "delivered" | "processing";
  statusLabel: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  carrier: string;
  weight: string;
  events: TrackingEvent[];
}

const mockShipments: Record<string, ShipmentData> = {
  "SH-2024-8841": {
    id: "SH-2024-8841",
    status: "in-transit",
    statusLabel: "In Transit",
    origin: "Chicago, IL",
    destination: "Los Angeles, CA",
    estimatedDelivery: "Dec 18, 2024",
    carrier: "SwiftHaul Express",
    weight: "24.5 kg",
    events: [
      { time: "Dec 15, 2024 · 08:32 AM", location: "Chicago, IL", status: "Shipment picked up from sender", completed: true },
      { time: "Dec 15, 2024 · 06:15 PM", location: "Chicago Hub, IL", status: "Processed at sorting facility", completed: true },
      { time: "Dec 16, 2024 · 02:00 AM", location: "Kansas City, MO", status: "In transit — hub transfer", completed: true },
      { time: "Dec 17, 2024 · 10:45 AM", location: "Phoenix, AZ", status: "Arrived at regional hub", completed: true },
      { time: "Dec 18, 2024 · 07:00 AM", location: "Los Angeles, CA", status: "Out for delivery", completed: false },
      { time: "Dec 18, 2024 · Est.", location: "Los Angeles, CA", status: "Delivered to recipient", completed: false },
    ],
  },
  "SH-2024-7203": {
    id: "SH-2024-7203",
    status: "delivered",
    statusLabel: "Delivered",
    origin: "New York, NY",
    destination: "Miami, FL",
    estimatedDelivery: "Dec 14, 2024",
    carrier: "SwiftHaul Ground",
    weight: "8.2 kg",
    events: [
      { time: "Dec 11, 2024 · 09:00 AM", location: "New York, NY", status: "Shipment picked up", completed: true },
      { time: "Dec 12, 2024 · 11:30 AM", location: "Charlotte, NC", status: "In transit — hub transfer", completed: true },
      { time: "Dec 13, 2024 · 08:00 AM", location: "Jacksonville, FL", status: "Arrived at regional hub", completed: true },
      { time: "Dec 14, 2024 · 09:15 AM", location: "Miami, FL", status: "Out for delivery", completed: true },
      { time: "Dec 14, 2024 · 02:47 PM", location: "Miami, FL", status: "Delivered — signed by J. MARTINEZ", completed: true },
    ],
  },
};

const statusConfig = {
  "in-transit": { color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", icon: Truck },
  delivered: { color: "text-green-600", bg: "bg-green-50", border: "border-green-200", icon: CheckCircle2 },
  processing: { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", icon: Clock },
};

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<ShipmentData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!trackingId.trim()) return;
    setLoading(true);
    setNotFound(false);
    setResult(null);

    setTimeout(() => {
      const found = mockShipments[trackingId.trim().toUpperCase()];
      if (found) {
        setResult(found);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-4">
            <Package className="w-7 h-7 text-orange-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">
            Track Your Shipment
          </h1>
          <p className="text-slate-600">
            Enter your SwiftHaul tracking ID for real-time updates.
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Try: <button onClick={() => setTrackingId("SH-2024-8841")} className="text-orange-500 hover:underline font-medium">SH-2024-8841</button>
            {" "}or{" "}
            <button onClick={() => setTrackingId("SH-2024-7203")} className="text-orange-500 hover:underline font-medium">SH-2024-7203</button>
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8"
        >
          <div className="flex gap-3">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              placeholder="e.g. SH-2024-8841"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleTrack}
              disabled={loading || !trackingId.trim()}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="w-4 h-4" />
                </motion.div>
              ) : (
                <Search className="w-4 h-4" />
              )}
              {loading ? "Searching..." : "Track"}
            </button>
          </div>
        </motion.div>

        {/* Not found */}
        <AnimatePresence>
          {notFound && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-3 mb-8"
            >
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-700">Tracking ID not found</p>
                <p className="text-red-600 text-sm mt-1">
                  Please check your ID and try again. If you need help, contact our support team.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Status card */}
              {(() => {
                const config = statusConfig[result.status];
                const Icon = config.icon;
                return (
                  <div className={`${config.bg} border ${config.border} rounded-2xl p-6`}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-6 h-6 ${config.color}`} />
                        <div>
                          <div className="font-bold text-slate-900 text-lg">
                            {result.statusLabel}
                          </div>
                          <div className="text-slate-500 text-sm">
                            Tracking ID: {result.id}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 uppercase tracking-wide">
                          Est. Delivery
                        </div>
                        <div className="font-bold text-slate-900">{result.estimatedDelivery}</div>
                      </div>
                    </div>

                    <div className="mt-4 grid sm:grid-cols-3 gap-4 pt-4 border-t border-current border-opacity-20">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">From</div>
                        <div className="font-semibold text-slate-800 text-sm flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          {result.origin}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">To</div>
                        <div className="font-semibold text-slate-800 text-sm flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-500" />
                          {result.destination}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Weight</div>
                        <div className="font-semibold text-slate-800 text-sm">{result.weight}</div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Timeline */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-6">Shipment Timeline</h3>
                <div className="relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200" />
                  <div className="space-y-6">
                    {result.events.map((event, i) => (
                      <div key={i} className="flex gap-4 relative">
                        <div
                          className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center z-10 ${
                            event.completed
                              ? "bg-orange-500"
                              : "bg-slate-200"
                          }`}
                        >
                          <div
                            className={`w-2.5 h-2.5 rounded-full ${
                              event.completed ? "bg-white" : "bg-slate-400"
                            }`}
                          />
                        </div>
                        <div className={`flex-1 pb-2 ${!event.completed ? "opacity-50" : ""}`}>
                          <div className="font-semibold text-slate-900 text-sm">
                            {event.status}
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            {event.location} · {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}