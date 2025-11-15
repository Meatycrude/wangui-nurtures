// src/components/Footer.tsx
import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2">
              <Leaf className="h-7 w-7 text-[gold]" />
              <span className="font-['Playfair_Display'] text-xl font-bold text-white">
                Wangui Nurtures
              </span>
            </div>
            <p className="mt-3 text-sm">
              Nurturing mental health with care, compassion, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[gold]" />
                <a href="mailto:wanguinurtures8@gmail.com">
                  wanguinurtures8@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[gold]" />
                <span>+254 796 257636</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[gold]" />
                <span>Kisii, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Wangui. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:text-emerald-400">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:text-emerald-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
