import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../assets/background.png";   // star background

import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer

    >
      <div className="max-w-8xl mx-auto  p-6">

        <div className="bg-[#0b0b0e]/90 backdrop-blur-xl rounded-[2.5rem] px-8 md:px-14 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* LOGO */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Flow Studios" className="h-16 mb-6" />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Clear, competitive, and result-oriented pricing — so you know
              exactly what you're investing in.
            </p>
          </div>

          {/* INFORMATION (scroll sections) */}
          <div>
            <h3 className="font-semibold text-amber-50 mb-4">Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li><HashLink smooth to="/#reviews" className="hover:text-white">Reviews</HashLink></li>
              <li><HashLink smooth to="/#faq" className="hover:text-white">FAQ's</HashLink></li>
              <li><HashLink smooth to="/#contact" className="hover:text-white">Get in touch</HashLink></li>

            </ul>
          </div>

          {/* PORTFOLIO */}
          <div>
            <h3 className="font-semibold text-amber-50 mb-4">Our Portfolio</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <Link
                  to="/portfolio/fourth"
                  className="hover:text-white cursor-pointer transition"
                >
                  Aatm Nurture
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/second"
                  className="hover:text-white cursor-pointer transition"
                >
                  Iot Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/fuel"
                  className="hover:text-white cursor-pointer transition"
                >
                  Fuel N Flavour
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/third"
                  className="hover:text-white cursor-pointer transition"
                >
                  TrackIt
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio/fifth"
                  className="hover:text-white cursor-pointer transition"
                >
                  Starbucks
                </Link>
              </li>

            </ul>
          </div>

          {/* COMPANY (About page works) */}
          <div>
            <h3 className="font-semibold  text-amber-50 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <Link to="/about" className="hover:text-white">
                  About us
                </Link>
              </li>

              <li>
                <HashLink smooth to="/#services" className="hover:text-white">
                  Our Services
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#whyus" className="hover:text-white">
                  Why us?
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#technologies" className="hover:text-white">
                  Technologies
                </HashLink>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8">

            <div>
              <h3 className="font-semibold text-amber-50 mb-4">CONTACT</h3>

              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-purple-400" />
                  <span>+91 9773777618</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-purple-400" />
                  <span>info@floowstudios.com</span>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex md:flex-col gap-4 items-start md:items-end">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;