import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/company_logo.png"
                alt="Uniworldstay Logo"
                width={200}
                height={80}
                priority
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Simplifying global co-living for students and travelers. We provide
              verified properties, local support, and a community-driven
              accommodation experience across major global education hubs.
            </p>

            <div className="flex space-x-4">
              {[
                Facebook,
                Twitter,
                Instagram,
                Linkedin,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-slate-800 rounded-full
                             hover:bg-[#0E5F6F] hover:text-white
                             transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/properties" className="hover:text-[#D4AF37] transition-colors">Find Accommodation</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Partner with Us</Link></li>
              <li><Link href="#" className="hover:text-[#D4AF37] transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-6">
              Destinations
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/properties?country=canada" className="hover:text-[#D4AF37] transition-colors">Canada</Link></li>
              <li><Link href="/properties?country=uk" className="hover:text-[#D4AF37] transition-colors">United Kingdom</Link></li>
              <li><Link href="/properties?country=ireland" className="hover:text-[#D4AF37] transition-colors">Ireland</Link></li>
              <li><Link href="/properties?country=australia" className="hover:text-[#D4AF37] transition-colors">Australia</Link></li>
              <li><Link href="/properties?country=germany" className="hover:text-[#D4AF37] transition-colors">Germany</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">

              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#0E5F6F] shrink-0 mt-1" />
                <span>
                  Registered Office: 1/56 C, Lalita Park, Laxmi Nagar,
                  New Delhi, Delhi 110092
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#0E5F6F] shrink-0 mt-1" />
                <span>
                  Marketing Office: Level 3, RVK Tower,
                  High Road, Thrissur 680001
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#0E5F6F] shrink-0" />
                <a href="tel:+919613333393" className="hover:text-[#D4AF37]">
                  +91 961 333 3393
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#0E5F6F] shrink-0" />
                <a href="mailto:info@uniworldstay.com" className="hover:text-[#D4AF37]">
                  info@uniworldstay.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700
                        flex flex-col md:flex-row
                        justify-between items-center
                        space-y-4 md:space-y-0
                        text-xs text-slate-400">

          <p>
            © {currentYear} Uniworldstay (A Division of RV Properties).
            All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#D4AF37] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
