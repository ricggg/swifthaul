import { Truck, Users, Globe, Award } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const values = [
  {
    icon: Truck,
    title: "Reliability First",
    description:
      "We built SwiftHaul because we saw too many businesses lose money to unreliable carriers. Reliability isn't a feature — it's the baseline.",
  },
  {
    icon: Users,
    title: "Human-First Service",
    description:
      "Technology handles the tracking. Humans handle the relationship. You always have a named contact who knows your account.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Knowledge",
    description:
      "Our partner network in 40+ countries means you get local expertise at every point — not just at origin and destination.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description:
      "We publish our rate structure and never add surprise fees. What you quote is what you pay. Full stop.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white pt-28 pb-0">
        {/* Hero */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80"
              alt="Logistics trucks"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
              Built by Shippers,{" "}
              <span className="text-orange-500">For Shippers</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              SwiftHaul was founded in 2012 by a team of logistics veterans who
              were tired of freight companies that overpromised and underdelivered.
              Today, we're trusted by 2,000+ businesses worldwide.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-6">
                From Frustration to Industry Standard
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  SwiftHaul started in a small office in Los Angeles in 2012. Our
                  founders — all veterans of major freight carriers — watched
                  businesses lose customers, miss contracts, and bleed cash because
                  of logistics failures they had no control over.
                </p>
                <p>
                  They built SwiftHaul to fix that. Not with technology alone, but
                  with a culture that treats every shipment as if it belongs to
                  them. Because in a sense, it does — our reputation lives and dies
                  on every delivery we make.
                </p>
                <p>
                  Today, we operate 12 distribution hubs across North America,
                  Europe, and Asia-Pacific, with partner networks in 40+ countries.
                  We've delivered over 1.2 million shipments and maintained a 98.4%
                  on-time rate since 2019.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="SwiftHaul team"
                className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-5 rounded-2xl shadow-xl">
                <div className="text-3xl font-extrabold">Since 2012</div>
                <div className="text-sm opacity-90">12 years in business</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-slate-900">
                What We Stand For
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team image */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden relative h-80">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
              alt="SwiftHaul operations center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl font-extrabold mb-2">120+</div>
                <div className="text-xl text-slate-300">
                  Logistics professionals across 3 continents
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CTABanner />
    </>
  );
}