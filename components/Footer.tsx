import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "International Freight", href: "/services" },
    { label: "Last-Mile Delivery", href: "/services" },
    { label: "Warehousing", href: "/services" },
    { label: "Express Parcels", href: "/services" },
    { label: "Supply Chain Consulting", href: "/services" },
  ],
  Company: [
    { label: "About SwiftHaul", href: "/about" },
    { label: "Track Shipment", href: "/tracking" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Partner Program", href: "#" },
  ],
  Support: [
    { label: "Get a Quote", href: "/contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Claims Process", href: "#" },
    { label: "Service Status", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white">
                  Swift<span className="text-orange-500">Haul</span>
                </span>
                <p className="text-xs text-slate-500 leading-none">Logistics</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              SwiftHaul delivers end-to-end logistics solutions for growing
              businesses. Reliable freight, real-time tracking, and a team that
              treats your cargo like our own.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>1240 Harbor Blvd, Suite 300, Los Angeles, CA 90021</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a
                  href="tel:+18005559247"
                  className="hover:text-white transition-colors"
                >
                  +1 800-555-9247
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:hello@swifthaul.com"
                  className="hover:text-white transition-colors"
                >
                  hello@swifthaul.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors text-slate-400 hover:text-white"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} SwiftHaul Logistics Inc. All rights
            reserved.
          </p>
          <p className="text-slate-600">
            Licensed freight broker · USDOT #2847193 · Licensed Customs Broker
          </p>
        </div>
      </div>
    </footer>
  );
}