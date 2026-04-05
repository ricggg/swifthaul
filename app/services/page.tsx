import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import HowItWorks from "@/components/HowItWorks";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-4">
            Every Logistics Need. One Partner.
          </h1>
          <p className="text-slate-400 text-xl">
            Whether you're shipping a single parcel or managing a complex
            international supply chain, SwiftHaul has the infrastructure,
            expertise, and coverage to deliver.
          </p>
        </div>
      </div>
      <Services />
      <HowItWorks />
      <CTABanner />
    </>
  );
}